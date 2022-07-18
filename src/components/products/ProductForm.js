import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AddMoreDetails from './UI/AddMoreDetails';
import { Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux'
import { addDairyMasterDetails, getAllDairyMaster } from '../../store/services/dairyMaster';
import { clearAddDairyMasterError } from '../../store/action';

function ProductForm(props) {
    const { handleClose } = props;
    const dispatch = useDispatch()
    const [inputValueForAdd, setInputValueForAdd] = useState({})
    const dairyMasterAddReducer = useSelector(state => state.dairyMasterAddReducer)

    console.log("dairyMasterAddReducer", dairyMasterAddReducer)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValueForAdd({ ...inputValueForAdd, [name]: value })
    };

    useEffect(() => {
        if (dairyMasterAddReducer?.status === "success") {
            setInputValueForAdd({})
            dispatch(getAllDairyMaster())
            dispatch(clearAddDairyMasterError())
            handleClose()
        } else if (dairyMasterAddReducer?.status === "failure") {
            dispatch(clearAddDairyMasterError())
        }
    }, [dairyMasterAddReducer?.status])

    const handleSubmit = (event) => {
        dispatch(addDairyMasterDetails(inputValueForAdd))
    }

    const shiftList = [
        {
            value: 'morning',
            label: 'Morning',
        },
        {
            value: 'evening',
            label: 'Evening',
        },
    ];

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box
                sx={{
                    '& > :not(style)': { m: 3, width: '100ch' },
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    name="shift"
                    value={inputValueForAdd?.shift}
                    onChange={handleChange}
                >
                    {shiftList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField id="outlined-basic" value={inputValueForAdd?.description} name="description" onChange={handleChange} label="Description" variant="outlined" />
                <TextField id="outlined-basic" value={inputValueForAdd?.date} type="date" name="date" onChange={handleChange} label="Date" variant="outlined" />
            </Box>
            <Divider />
            <Item>Item 1</Item>
            <AddMoreDetails getProductDetails={(data) => setInputValueForAdd({ ...inputValueForAdd, ["dairy_to_company_milk"]: data })} />
            <Divider />
            <Item>Item 2</Item>
            <AddMoreDetails getProductDetails={(data) => setInputValueForAdd({ ...inputValueForAdd, ['company_rate']: data })} />
            <Divider />
            <Button onClick={() => handleSubmit()} variant="contained" color="success">
                Submit
            </Button>

        </>
    )
}

export default ProductForm