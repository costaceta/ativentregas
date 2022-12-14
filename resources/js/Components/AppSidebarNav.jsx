import React from 'react'

// OLD: import { NavLink, useLocation } from 'react-router-dom'

// TODO: pesquisar a melhor forma de setar o link ativo
// TODO: Consertar o roteamento

import { Link as NavLink } from '@inertiajs/inertia-react';

import PropTypes from 'prop-types'

import { CBadge } from '@coreui/react'

export const AppSidebarNav = ({ items }) => {
  const location = route().current()

  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component

    return (
      <Component
        {...(rest.href &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }

  const navGroup = (item, index) => {
    const { component, name, icon, href, ...rest } = item
    const Component = component
    return (
      // TODO: resolve startsWith
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        // visible={location.startsWith(href)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>
      { items && items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index))) }
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
