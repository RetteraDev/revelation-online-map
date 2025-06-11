import { useState } from 'react';
import { Drawer, IconButton, Stack, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface FilterPanelProps {
  children: React.ReactNode;
  width?: number | string;
}

export const Panel = ({ children, width = 350 }: FilterPanelProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      {/* Кнопка для открытия панели */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          left: 20,
          top: 20,
          zIndex: theme.zIndex.drawer - 1,
          backgroundColor: theme.palette.background.paper,
          boxShadow: 1,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Сама панель фильтров */}
      <Drawer
        open={open}
        onClose={toggleDrawer}
        variant={isMobile ? 'temporary' : 'persistent'}
        sx={{
          width: width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: width,
            boxSizing: 'border-box',
            p: 3,
            pt: 8, // Отступ для кнопки закрытия
          },
        }}
      >
        {/* Кнопка закрытия */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Содержимое фильтра */}
        <Box component="nav">
          <Stack spacing={3}>{children}</Stack>
        </Box>
      </Drawer>

      {/* Затемнение контента при открытом фильтре на мобильных */}
      {isMobile && open && (
        <Box
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: theme.zIndex.drawer - 1,
          }}
        />
      )}
    </>
  );
};
