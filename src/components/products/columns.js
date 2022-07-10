export const columns = [
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'shift', headerName: 'Shift', width: 130 },
    {
        field: 'profit',
        headerName: 'Profit',
        type: 'number',
        width: 90,
    },
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