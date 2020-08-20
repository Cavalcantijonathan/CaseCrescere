import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';


const links  = [
    {
        links: [
            {
                name: 'Dashboard',
                url: '/',
                key: 'key1',
                iconsProps: {
                    iconName: 'Home',
                    styles: {
                        root:{
                            fontSize: 20,
                            color: '#45B54A', 
                        }
                    }
                }
            },
            {
                name: 'Cartões',
                url: '/',
                key: 'key2',
                iconsProps: {
                    iconName: 'PlayerSettings',
                    styles: {
                        root:{
                            fontSize: 20,
                            color: '#45B54A', 
                        }
                    }
                }
            },
            {
                name: 'Transferencia',
                url: '/',
                key: 'key3',
                iconsProps: {
                    iconName: 'SwitcherStartEnd',
                    styles: {
                        root:{
                            fontSize: 20,
                            color: '#45B54A', 
                        }
                    }
                }
            },
            {
                name: 'Saldo',
                url: '/',
                key: 'key4',
                iconsProps: {
                    iconName: 'StackedLineChart',
                    styles: {
                        root:{
                            fontSize: 20,
                            color: '#45B54A', 
                        }
                    }
                }
            }
        ]
    }
]

const navigationStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
        paddingTop: '10vh',
    }
}

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