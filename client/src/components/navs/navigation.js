import React from 'react';
import {Link, Route} from 'react-router-dom';
import Users from '../Users';
import Posts from '../Posts';
import Logo from '../../images/cheburashka-64.png';
import {Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import UserPage from '../UserPage';

const Navigation = () =>{
        const lastPosition = useHistory();
        const url = window.location.href;

        return (
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand>
                <img src={Logo}/>
              </NavbarBrand>
              <Nav>
                <Link to="/">User Page</Link>
                <Link to="/posts">Posts</Link>
              </Nav>
          
            </Navbar>
          </div>
        );
}

export default Navigation;