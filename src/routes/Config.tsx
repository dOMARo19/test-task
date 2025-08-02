import React from 'react'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import FAQ from '../pages/FAQ'
import AboutUs from '../pages/AboutUs'
import Contacts from '../pages/Contacts'
import ThankYou from '../pages/ThankYou'


interface RouteConfig {
  path: string
  element: React.ReactNode
  label: string
  showInMenu: boolean
}

export const routes: RouteConfig[] = [
    {
        path: '/',
        element: <Home />,
        label: 'Home',
        showInMenu: true,
    },
    {
        path: '/blog',
        element: <Blog />,
        label: 'Blog',
        showInMenu: true,
    },
    {
        path: '/faq',
        element: <FAQ />,
        label: 'FAQ',
        showInMenu: true,
    },
    {
        path: '/about-us',
        element: <AboutUs />,
        label: 'About Us',
        showInMenu: true,
    },
    {
        path: '/contact',
        element: <Contacts />,
        label: 'Contact',
        showInMenu: true,
    },
    {
        path: '/thank-you',
        element: <ThankYou />,
        label: 'Thank You',
        showInMenu: false,
    },
]
