import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import './navItem.scss'

export default function NavItem({ item }) {
    const [navItem, setNavItem] = useState(false);
    const showNavItem = () => {
        console.log(navItem);
        setNavItem(!navItem);
    }

    return (
        <>
            <Link className='navItem' to={item.path} onClick={item.subMenu && showNavItem}>
                <div>
                    <span>{item.title}</span>
                </div>
                <div>
                    {item.subMenu && navItem
                        ? item.iconOpened
                        : item.subMenu
                            ? item.iconClosed
                            : null}
                </div>
            </Link >
            <ul className='navItem__submenu'>
                {navItem &&
                    item.subMenu.map((item, index) => {
                        return (
                            <Link to={item.path} key={index} className='navItem__submenu'>
                                <span>{item.title}</span>
                            </Link>
                        );
                    })
                }
            </ul>

        </>
    )
}
