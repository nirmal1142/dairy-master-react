import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../helpers/utils/auth.util';
import { useDispatch } from 'react-redux';
import { initiateAuth } from '../../store/action';


export default function CenteredTabs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogOut = () => {
    logout();
    navigate('/login');
    dispatch(initiateAuth())
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Profile" />
        <Tab label="Log in" onClick={() => navigate("/login")} />
        <Tab label="Log Out" onClick={() => handleLogOut()} />
      </Tabs>
    </Box>
  );
}
