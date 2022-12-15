import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAperture,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Ambientes',
    href: '/',
    icon: <CIcon icon={cilAperture} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Operação',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    href: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cadastro de Atividades',
    href: '/activities',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Cadastros',
  },
  {
    component: CNavGroup,
    name: 'Cadastros',
    href: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tipos de atividades',
        href: '/activities-types',
      },
      {
        component: CNavItem,
        name: 'Modelos de formulários',
        href: '/form-model',
      },
      {
        component: CNavItem,
        name: 'Usuários Móveis',
        href: '/usuarios-moveis',
      },
      {
        component: CNavItem,
        name: 'Campos de formulários',
        href: '/form-fields',
      },
      {
        component: CNavItem,
        name: 'Áreas do Mapa',
        href: '/map-areas',
      },
      {
        component: CNavItem,
        name: 'Atividades Frequentes',
        href: '/suppliers',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Relatórios',
  },
  {
    component: CNavGroup,
    name: 'Relatórios',
    href: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Produtividade da equipe',
        href: '/team-productivity',
      },
      {
        component: CNavItem,
        name: 'Roteiros e atividades',
        href: '/itineraries',
      },
    ],
  }
]

export default _nav
