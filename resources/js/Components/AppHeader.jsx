// OLD: import { NavLink } from 'react-router-dom'

import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler, CNavItem, CNavLink
} from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import { logo } from '../../assets/brand/logo';
import { AppHeaderDropdown } from './header/index';
import LayoutToggleButtons from './HeaderToggleButtons';

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
          {/* TODO: add logo para o mobile removido temporariamente */}
          {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
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
