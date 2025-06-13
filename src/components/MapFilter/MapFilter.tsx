import { useSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import { useState, useMemo, forwardRef } from 'react';
import { resourcesTreeFilter } from "../../data/resourcesTreeFilter";

import { useTreeItem, UseTreeItemParameters } from '@mui/x-tree-view/useTreeItem';
import {
  TreeItemContent,
  TreeItemIconContainer,
  TreeItemGroupTransition,
  TreeItemLabel,
  TreeItemRoot,
  TreeItemCheckbox,
} from '@mui/x-tree-view/TreeItem';
import { TreeItemIcon } from '@mui/x-tree-view/TreeItemIcon';
import { TreeItemProvider } from '@mui/x-tree-view/TreeItemProvider';
import { TreeItemDragAndDropOverlay } from '@mui/x-tree-view/TreeItemDragAndDropOverlay';
import { getItemIconURL } from "../../utils/icon";
import Icon from "../Icon/Icon";
import Thanks from "../Thanks/Thanks";
import { Typography } from "@mui/material";
import { items } from "../../data/item";
import compressSearchParams, { decompressSearchParams } from "../../utils/searchParams";
import CopyButton from "../CopyButton/CopyButton";

interface CustomTreeItemProps
  extends Omit<UseTreeItemParameters, 'rootRef'>,
    Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {}

const CustomTreeItem = forwardRef(function CustomTreeItem(
  props: CustomTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const { id, itemId, label, disabled, children, ...other } = props;

  const {
    getContextProviderProps,
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    getDragAndDropOverlayProps,
    status,
  } = useTreeItem({ id, itemId, children, label, disabled, rootRef: ref });

  const iconUrl = getItemIconURL(items[itemId]?.icon || '');

  return (
    <TreeItemProvider {...getContextProviderProps()}>
      <TreeItemRoot {...getRootProps(other)}>
        <TreeItemContent {...getContentProps()} sx={{ justifyContent: 'flex-start' }}>
          <TreeItemIconContainer {...getIconContainerProps()}>
            <TreeItemIcon status={status} />
          </TreeItemIconContainer>
          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            gap: 1, 
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            {/* Чекбокс первым элементом */}
            <TreeItemCheckbox {...getCheckboxProps()} sx={{ order: 1 }} />

            <Icon src={iconUrl}  sx={{ order: 2, width: 24, height: 24, display: 'flex', alignItems: 'center' }}/>
            
            {/* Название элемента */}
            <TreeItemLabel 
              {...getLabelProps()} 
              sx={{ 
                order: 3,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'left',
              }} 
            />
          </Box>
          <TreeItemDragAndDropOverlay {...getDragAndDropOverlayProps()} />
        </TreeItemContent>
        {children && <TreeItemGroupTransition {...getGroupTransitionProps()} />}
      </TreeItemRoot>
    </TreeItemProvider>
  );
});

const getAllItemItemIds = (): string[] => {
  const ids: string[] = [];
  const registerItemId = (item: TreeViewBaseItem) => {
    ids.push(item.id);
    item.children?.forEach(registerItemId);
  };

  resourcesTreeFilter.forEach(registerItemId);
  return ids;
};

const filterTreeItems = (items: TreeViewBaseItem[], searchText: string): TreeViewBaseItem[] => {
  if (!searchText) return items;

  return items.reduce<TreeViewBaseItem[]>((acc, item) => {
    const matches = item.label.toLowerCase().includes(searchText.toLowerCase());
    
    let filteredChildren: TreeViewBaseItem[] = [];
    if (item.children) {
      filteredChildren = filterTreeItems(item.children, searchText);
    }

    if (matches || filteredChildren.length > 0) {
      acc.push({
        ...item,
        children: filteredChildren.length > 0 ? filteredChildren : undefined
      });
    }

    return acc;
  }, []);
};

function MapFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedItems = decompressSearchParams(searchParams.get('ids') || '');
  const [searchText, setSearchText] = useState('');

  const filteredItems = useMemo(() => {
    return filterTreeItems(resourcesTreeFilter, searchText);
  }, [searchText]);

  const preparedSearchParams = (ids: string[]) => {
    let newSearchParams

    if (ids.length === 0) {
      newSearchParams = new URLSearchParams()
    } else {
      newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('ids', compressSearchParams(ids));
    }
    return newSearchParams;
  };

  const handleSelectedItemsChange = (
    event: React.SyntheticEvent | null,
    ids: string[],
  ) => {
    setSearchParams(preparedSearchParams(ids));
  };

  const handleSelectClick = () => {
    const ids = selectedItems.length === 0 ? getAllItemItemIds() : [];
    setSearchParams(preparedSearchParams(ids));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>Фильтр ресурсов</Typography>
      <TextField
        label="Искать по названию"
        variant="outlined"
        value={searchText}
        onChange={handleSearchChange}
        fullWidth
        slotProps={{
          input: {
            endAdornment: searchText && (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleClearSearch}
                  size="small"
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Stack 
      direction="row" 
      spacing={1} 
      alignItems="center"
      sx={{
        justifyContent: "space-between",
        alignItems: 'stretch'
      }}
    >
      <Button
        onClick={handleSelectClick}
        variant={selectedItems.length === 0 ? 'contained' : 'outlined'}
        sx={{
          textTransform: 'none'
        }}
      >
        {selectedItems.length === 0 ? 'Всё' : 'Сброс'}
      </Button>
      
      <CopyButton/>
    </Stack>
      <Box sx={{
        minWidth: 290,
        '& .MuiTreeItem-content': {
          justifyContent: 'flex-start',
          pl: 1
        }
      }}>
        <RichTreeView
          multiSelect
          defaultExpandedItems={['grid']}
          checkboxSelection
          items={filteredItems}
          selectedItems={selectedItems}
          onSelectedItemsChange={handleSelectedItemsChange}
          selectionPropagation={{ parents: true, descendants: true }}
          slots={{ item: CustomTreeItem }}
        />
      </Box>
      <Thanks/>
    </Stack>
  );
}

export default MapFilter;
