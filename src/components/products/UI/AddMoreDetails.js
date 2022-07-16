import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';

const AddMoreDetails = (props) => {

    const initialDetails = [
        {
            "milk_type": "cow",
            "rate": "",
            "liter": "",
            "fat": "",
        }
    ]

    const [todaysDetails, setTodaysDetails] = useState([...initialDetails])


    useEffect(() => {
        props.getProductDetails(todaysDetails)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todaysDetails])

    const handleChangeDetails = (index, value, name) => {
        setTodaysDetails((prevState) => {
            const newState = prevState[index];
            newState[name] = value;
            return [...prevState]
        })
    }

    const handleAddMoreDetails = () => {
        setTodaysDetails((prevState) => {
            const initialDetails = {
                "milk_type": "cow",
                "rate": "",
                "liter": "",
                "fat": "",
            }
            return [...prevState, initialDetails]
        })
    }

    const handleRemoveDetails = (index) => {
        setTodaysDetails((prevState) => {
            const newState = prevState.filter((item, i) => i !== index)
            return [...newState];
        })
    }
    return (
        <>
            {todaysDetails.map((detail, index) => {
                return (

                    <RanderAddMoreDetails
                        todaysDetail={detail}
                        index={index}
                        handleChangeDetails={handleChangeDetails}
                        handleAddMoreDetails={handleAddMoreDetails}
                        totalLength={todaysDetails.length}
                        handleRemoveDetails={handleRemoveDetails}
                    />
                )
            })}
        </>
    )
}


const RanderAddMoreDetails = ({
    todaysDetail,
    index,
    handleChangeDetails,
    handleAddMoreDetails,
    totalLength,
    handleRemoveDetails
}) => {
    const [todaysDetails, setTodaysDetails] = useState(todaysDetail)


    useEffect(() => {
        handleSetTodaysDetails(todaysDetail)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todaysDetail])

    const handleSetTodaysDetails = (data) => {
        setTodaysDetails(data)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        handleChangeDetails(index, value, name)
    };

    const shiftList = [
        {
            value: 'cow',
            label: 'Cow',
        },
        {
            value: 'buffalo',
            label: 'Buffalo',
        }
    ];


    return (
        <>
            <Box
                sx={{
                    '& > :not(style)': { m: 2, width: '40ch' },
                    width: '100%',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField select onChange={handleChange} name="milk_type" value={todaysDetails.milk_type} id="outlined-select-currency" label="Description" >
                    {shiftList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField onChange={handleChange} name="rate" id="outlined-basic" label="rate" variant="outlined" />
                <TextField onChange={handleChange} name="liter" id="outlined-basic" label="liter" variant="outlined" />
                <TextField onChange={handleChange} name="fat" id="outlined-basic" label="fat" variant="outlined" />
                {totalLength - 1 === index && <Button onClick={() => handleAddMoreDetails()} variant="contained" color="success">
                    Add More
                </Button>}
                {totalLength - 1 !== index && <Button onClick={() => handleRemoveDetails(index)} variant="contained" color="error">
                    Remove
                </Button>}
            </Box>
        </>
    )
}


export default AddMoreDetails
