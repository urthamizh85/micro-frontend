import React from 'react';
import { navigateToUrl } from 'single-spa';
import { SideNav, SideNavItem, Button } from 'react-materialize';

const NavBar = () => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <a href="/" onClick={navigateToUrl} className="brand-logo">single-spa</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/" onClick={navigateToUrl}>Home</a></li>
          <li><a href="/angular" onClick={navigateToUrl}>Angular</a></li>
        </ul>
      </div>
    </nav>


    <SideNav
      options={{
        closeOnClick: true,
        fixed: true
      }}
      isOpen={true}
      isFixed={true}
    >
      <SideNavItem
        user={{
          background: 'https://placeimg.com/640/480/tech',
          email: 'jdandturk@gmail.com',
          image: 'static/media/react-materialize-logo.824c6ea3.svg',
          name: 'John Doe'
        }}
        userView
      />
      <SideNavItem
        href="#"
        waves
      >
        DashBoard
    </SideNavItem>
      <SideNavItem
        href="#"
        waves
      >
        Web Automation
    </SideNavItem>
      <SideNavItem
        href="#"
        waves
      >
        Mobile Automation
    </SideNavItem>
      <SideNavItem
        href="#"
        waves
      >
        API Automation
    </SideNavItem>
      <SideNavItem
        href="#"
        waves
      >
        Settings
    </SideNavItem>
    </SideNav>
  </div>
)
export default NavBar