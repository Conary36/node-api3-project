import React from 'react';
import {Link, Route} from 'react-router-dom';
import Users from '../Users';
import Posts from '../Posts';
import Logo from '../../images/cheburashka-64.png';
import {Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import { useHistory } from 'react-router-dom';

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
                <Link to="/">Users</Link>
                <Link to="/posts">Posts</Link>
              </Nav>
              <div>
                <Route exact path="/" component={Users}/>
                <Route path="/posts" component={Posts}/>
              
              </div>
            </Navbar>
          </div>
        );
}

export default Navigation;