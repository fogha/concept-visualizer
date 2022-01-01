import { CaretUp, CaretDown } from 'react-bootstrap-icons';

export const navData = [
    {
        title: 'Variables',
        path: '/',
    },
    {
        title: 'Control Structures',
        path: '/control-structures',
        iconOpened: <CaretDown />,
        iconClosed: <CaretUp />,
        subMenu: [
            {
                title: 'If/Else statements',
                path: '/if-else-statements',
            },
            {
                title: 'While statements',
                path: '/while-statements',
            },
            {
                title: 'Switch statements',
                path: '/switch-statements',
            },
        ]
    },


]

