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
                name: 'Depositar',
                url: '/',
                key: 'key2',
                icon: 'Savings',
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
                name: 'Extrato da Conta',
                url: '/',
                key: 'key3',
                icon: 'StackedLineChart',
            },
            {
                name: 'Cartões',
                url: '/',
                key: 'key4',
                icon: 'PaymentCard',
            },
            {
              name: 'Emitir Cobrança',
              url: '/',
              key: 'key5',
              icon: 'Money',
            },
            {
              name: 'Gestão de Cobrança',
              url: '/',
              key: 'key6',
              icon: 'BarChartVertical',
            },
            {
              name: 'Transferência',
              url: '/',
              key: 'key7',
              icon: 'SwitcherStartEnd',
            },
            {
              name: 'Pagamento',
              url: '/',
              key: 'key8',
              icon: 'Bank',
            },
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
