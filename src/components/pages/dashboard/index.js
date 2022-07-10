import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Item } from './styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
    const authReducer = useSelector(state => state.authReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authReducer.isAuthenticated) {
            navigate('/login');
        }
    }, [authReducer])

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                    return (
                        <Grid item xs={6}>
                            <Item>
                                <span>
                                    <h1>Dashboard</h1>
                                </span>
                                <span>
                                    <h2>Dashboard</h2>
                                </span>
                            </Item>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}

