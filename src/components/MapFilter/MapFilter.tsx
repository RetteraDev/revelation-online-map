import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, ECategory, EItem, items, IItem } from "../../data/resources";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  Collapse,
  Paper,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

enum CheckStatus {
  Unchecked = 0,
  Checked = 1,
  Indeterminate = -1
}

type ItemStatusMap = Record<number, number>;

function MapFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [itemStatuses, setItemStatuses] = useState<ItemStatusMap>({});

  const containerStyles = {
    position: 'absolute',
    top: 24,
    right: 24,
    width: 500,
    maxHeight: '70vh',
    overflow: 'auto',
    zIndex: 1000,
    boxShadow: 3,
  };

  useEffect(() => {
    const initialStatuses: ItemStatusMap = {};
    const checkedItemsParam = searchParams.get('items')?.split(',') || [];

    Object.entries(items).forEach(([itemKey, _]) => {
      const itemId = Number(itemKey);
      initialStatuses[itemId] = checkedItemsParam.includes(itemKey) 
        ? CheckStatus.Checked 
        : CheckStatus.Unchecked;
    });
    
    setItemStatuses(initialStatuses);
  }, [searchParams]);

  useEffect(() => {
    const checkedItemIds = Object.entries(itemStatuses)
      .filter(([_, status]) => status === CheckStatus.Checked)
      .map(([id]) => id);

    const newSearchParams = new URLSearchParams(searchParams);
    if (checkedItemIds.length > 0) {
      newSearchParams.set('items', checkedItemIds.join(','));
    } else {
      newSearchParams.delete('items');
    }
    
    setSearchParams(newSearchParams, { replace: true });
  }, [itemStatuses, searchParams, setSearchParams]);

  const handleCategoryClick = (categoryId: number) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const getCategoryItems = (categoryId: number): number[] => {
    return Object.entries(items)
      .filter(([_, itemData]) => itemData.category === categoryId)
      .map(([itemKey]) => Number(itemKey));
  };

  const computeCategoryStatus = (categoryId: number): number => {
    const categoryItemIds = getCategoryItems(categoryId);
    if (categoryItemIds.length === 0) return CheckStatus.Unchecked;

    let checkedCount = 0;
    let indeterminateCount = 0;

    categoryItemIds.forEach(itemId => {
      const currentStatus = itemStatuses[itemId] || CheckStatus.Unchecked;
      if (currentStatus === CheckStatus.Checked) checkedCount++;
      if (currentStatus === CheckStatus.Indeterminate) indeterminateCount++;
    });

    if (checkedCount === categoryItemIds.length) {
      return CheckStatus.Checked;
    } else if (checkedCount > 0 || indeterminateCount > 0) {
      return CheckStatus.Indeterminate;
    }
    return CheckStatus.Unchecked;
  };

  const handleCheckboxChange = (id: number, isCategory: boolean) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    
    const newStatus = e.target.checked ? CheckStatus.Checked : CheckStatus.Unchecked;
    const newStatuses = {...itemStatuses};

    if (isCategory) {
      const categoryItemIds = getCategoryItems(id);
      categoryItemIds.forEach(itemId => {
        newStatuses[itemId] = newStatus;
      });
    } else {
      newStatuses[id] = newStatus;
    }

    setItemStatuses(newStatuses);
  };

  return (
    <Box sx={containerStyles}>
      <Paper>
        <List>
            <ListItemText primary={"Фильтр ресурсов"} />
                {Object.entries(categories).map(([categoryKey, categoryData]) => {
                    const categoryId = Number(categoryKey);
                    const categoryItemIds = getCategoryItems(categoryId);
                    const categoryStatus = computeCategoryStatus(categoryId);

                    return (
                    <div key={categoryKey}>
                        <ListItem
                        secondaryAction={
                            <Checkbox
                            edge="end"
                            onChange={handleCheckboxChange(categoryId, true)}
                            checked={categoryStatus === CheckStatus.Checked}
                            indeterminate={categoryStatus === CheckStatus.Indeterminate}
                            onClick={(e) => e.stopPropagation()}
                            />
                        }
                        disablePadding
                        >
                        <ListItemButton onClick={() => handleCategoryClick(categoryId)}>
                            <ListItemText primary={categoryData.categoryName} />
                            {expandedCategories.includes(categoryId) ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        </ListItem>
                        
                        <Collapse in={expandedCategories.includes(categoryId)} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 4 }}>
                            {categoryItemIds.map(itemId => {
                                const itemData = items[itemId as EItem];
                            const itemStatus = itemStatuses[itemId] || CheckStatus.Unchecked;
                            
                            return (
                                <ListItem
                                key={itemId}
                                secondaryAction={
                                    <Checkbox
                                    edge="end"
                                    onChange={handleCheckboxChange(itemId, false)}
                                    checked={itemStatus === CheckStatus.Checked}
                                    />
                                }
                                disablePadding
                                >
                                <ListItemButton>
                                    <ListItemText primary={itemData.itemName} />
                                </ListItemButton>
                                </ListItem>
                            );
                            })}
                        </List>
                        </Collapse>
                    </div>
                    );
                })}
        </List>
      </Paper>
    </Box>
  );
}

export default MapFilter;