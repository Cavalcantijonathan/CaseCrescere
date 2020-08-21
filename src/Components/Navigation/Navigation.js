import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';
import navigationStyles from './style';

// const iconStyle = {
//     root: { color: "#45B54A" },
//     rootHovered: {
//       color: "#36873A",
//       selectors: {
//         ":hover": {
//           selectors: {
//             ".ms-Button-icon": { color: "#36873A" }
//           }
//         }
//       }
//     }
// };

const links  = [
    {
        links: [
            {
                name: 'Inicio',
                url: '/',
                key: 'key1',                
                icon: 'Home',      
            },
            {
                name: 'Cartões',
                url: '/',
                key: 'key2',
                icon: 'PaymentCard',
                // iconsProps: {
                //     iconName:'PlayerSettings',
                //     styles: {
                //         root:{
                //             fontSize: 20,
                //             color: '#45B54A', 
                //         }
                //     }
                // }
            },
            {
                name: 'Transferencia',
                url: '/',
                key: 'key3',
                icon: 'SwitcherStartEnd',
            },
            {
                name: 'Saldo',
                url: '/',
                key: 'key4',
                icon: 'StackedLineChart',
            }
        ]
    }
]

const Navigation = () => {
    initializeIcons();
    return (
        <Nav 
            groups = {links}
            selectedKey="key1"
            styles={navigationStyles}
        />
    )       
}

export default Navigation;