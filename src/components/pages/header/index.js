import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppBar, DrawerHeader, Main } from './styles';
import CenteredTabs from '../../header/HeaderTab';
import { SideMenu } from '../../header/SideMenu';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

export default function Layout() {
    const navigate = useNavigate();
    const authReducer = useSelector(state => state.authReducer);
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChangeRouting = (menuItem) => {
        setOpen(false);
        navigate(menuItem);
    }

    useEffect(() => {
        if (!authReducer.isAuthenticated) {
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authReducer])

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <CenteredTabs />
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {SideMenu && SideMenu.map((item, index) => {
                            return (
                                <ListItem key={item?.name} disablePadding onClick={() => handleChangeRouting(item?.path)}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {item?.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item?.name} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    <Divider />
                    <Outlet />
                </Main>
            </Box>
        </>
    );
}
