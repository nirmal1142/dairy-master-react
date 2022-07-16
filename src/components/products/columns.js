import { Button } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export const columns = [
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'shift', headerName: 'Shift', width: 130 },
    {
        field: 'profit',
        headerName: 'Profit',
        type: 'number',
        width: 90,
    },
    {
        headerName: 'Action',
        width: 130,
        renderCell: (rowData) => {
            return (
                <>
                    <div style={{marginLeft: "15px"}}>
                        <InfoIcon />
                    </div>

                </>
            );
        }
    }
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];