import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';


class Header extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className='header'>
                        <div className='header-content'>
                            <NavbarBrand href='/'>
                                <img className='header-logo' src='./asset/images/logo.png' alt='Logo'/>
                            </NavbarBrand>
                            <Collapse navbar id='collapse'>
                                <Nav className='list-unstyled header-nav'>
                                    <NavItem>
                                        <NavLink to='/home' className='header-nav__link'><h6><strong>Home</strong></h6></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/pricing' className='header-nav__link'><h6><strong>Pricing</strong></h6></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/doc' className='header-nav__link'><h6><strong>Doc</strong></h6></NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;