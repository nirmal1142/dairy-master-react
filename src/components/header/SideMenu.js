import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';

export const SideMenu = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardIcon />,
        exact: true,
    },
    {
        name: 'Products',
        path: '/products',
        icon: <CategoryIcon />,
        exact: true,
    },
]