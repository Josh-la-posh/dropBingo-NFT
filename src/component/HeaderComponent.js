import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';


class Header extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Navbar expand='md' dark>
                    <div>
                        <div className='header'>
                            <NavbarBrand className='mr-auto' href='/'>
                                <img className='header-logo' src='./asset/images/logo.png' alt='Logo'/>
                            </NavbarBrand>
                            <Collapse navbar>
                                <Nav navbar className='list-unstyled header-nav'>
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