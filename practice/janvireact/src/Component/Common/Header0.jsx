import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              {/* <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink> */}
              <Link className='nav-link' to="/">Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/Login">Login</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/about">About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/contact">Contact</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/examples">Examples</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/ReactQA">ReactQA</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to="/api">Api</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}