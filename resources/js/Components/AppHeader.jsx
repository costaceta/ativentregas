import React from 'react'
// OLD: import { NavLink } from 'react-router-dom'

import { Link as NavLink} from '@inertiajs/inertia-react';

import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CButtonGroup,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from '../../assets/brand/logo'
import LayoutToggleButtons from './HeaderToggleButtons';
import { useEffect } from 'react';
import { useState } from 'react';

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [isDashbord, setIsDashboard] = useState(false)

  useEffect( () => {
    if(route().current() === 'dashboard') {
      setIsDashboard(true)
    }
  })

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            {/* <CNavLink> */}
              {/* <NavLink className='nav-link' href='/dashboard' >
                Dashboard
              </NavLink> */}
            {/* </CNavLink> */}
          </CNavItem>
          <CNavItem>
            {/* <CNavLink href="#">Users</CNavLink> */}
            {/* <NavLink className='nav-link' href='/coreui' >
                Profile
            </NavLink> */}
          </CNavItem>
          <CNavItem>
            {/* <CNavLink href="#">Settings</CNavLink> */}
            {/* <NavLink className='nav-link' href='/coreui' >
                Coreui
            </NavLink> */}
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        {/* <AppBreadcrumb /> */}
        { isDashbord && (
          <LayoutToggleButtons />
        )}
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
