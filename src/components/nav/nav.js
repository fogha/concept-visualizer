import React from 'react'
import './nav.scss'
import logo from '../../assets/logo.png'
import { navData } from './navData';
import NavItem from './navItem';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
export default function Nav() {
    console.log(navData);
    return (
        <div className='nav'>
            <div className="nav__header">
                <img src={logo} alt="" className='nav__logo' />
                <h3>Concept Visualizer</h3>
            </div>
            <div className="nav__body">
                <ul className='nav__body-list'>
                    {navData.map((item, index) => {
                        return <NavItem item={item} key={index} />
                    })}
                </ul>
            </div>
        </div>
    )
}
