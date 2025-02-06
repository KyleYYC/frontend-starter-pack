import CodeIcon from '@mui/icons-material/Code'
import WebIcon from '@mui/icons-material/Web'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import GeniusConfiguration from './config'
import { Layers, Star, StorageOutlined, CheckBox } from '@mui/icons-material'
import React from 'react'

const {
  isToolsPageDisplayed,
  isServicesPageDisplayed,
  isProductsPageDisplayed,
  isPricingPageDisplayed,
  isMoreSubNavDisplayed,
  isBlogPageDisplayed
} = GeniusConfiguration.navigation

export const ourServices = [
  {
    name: 'Software Development',
    description: 'Create custom software tailored to your business needs.',
    link: '/services/software-development',
    icon: CodeIcon,
  },
  {
    name: 'Process Automation',
    description:
      'Automate repetitive tasks to increase efficiency and reduce costs.',
    link: '/services/process-automation',
    icon: CheckBox,
  },
  {
    name: 'Website Development',
    description: 'Build responsive, engaging websites for your audience.',
    link: '/services/website-development',
    icon: WebIcon,
  },
  {
    name: 'AI / ML',
    description:
      'Implement intelligent systems to elevate your business operations.',
    link: '/services/artificial-intelligence',
    icon: SmartToyIcon,
  },
  {
    name: 'Consulting Services',
    description: 'Get expert advice to improve and streamline your projects.',
    link: '/services/consulting',
    icon: SupportAgentIcon,
  },
  {
    name: 'Mobile Application Development',
    description: 'Develop powerful mobile apps for iOS and Android.',
    link: '/services/mobile-application-development',
    icon: PhoneIphoneIcon,
  },
]

export const ourServicesNavigationLinks = [
  { label: 'Software Development', href: '/services/software-development' },
  { label: 'Process Automation', href: '/services/process-automation' },
  { label: 'Website Development', href: '/services/website-development' },
  { label: 'AI / ML', href: '/services/artificial-intelligence' },
  { label: 'Consulting Services', href: '/services/consulting' },
  {
    label: 'Mobile Application Development',
    href: '/services/mobile-application-development',
  },
]

export const headerNavigationLinks = [
  { id: 'home', label: 'Home', href: '/' },
  ...(isToolsPageDisplayed
    ? [
      {
        id: 'tools',
        label: 'Tools',
        href: '/',
        subLinks: [
          { id: 'submenu1', label: 'Sub Menu 1', href: '/submenu1' },
          { id: 'submenu2', label: 'Sub Menu 2', href: '/submenu2' },
        ],
      },
    ]
    : []),
  ...(isServicesPageDisplayed
    ? [
      {
        id: 'our-services',
        label: 'Our Services',
        href: '/',
        subLinks: ourServicesNavigationLinks.map((link, index) => ({
          id: `service-${index}`,
          ...link,
        })),
      },
    ]
    : []),
  ...(isProductsPageDisplayed
    ? [{ id: 'products', label: 'Products', href: '/products' }]
    : []),
  ...(isPricingPageDisplayed
    ? [{ id: 'pricing', label: 'Pricing', href: '/pricing' }]
    : []),
  ...(isBlogPageDisplayed
    ? [{ id: 'blog', label: 'Blog', href: '/blog' }]
    : []
  ),
  ...(isMoreSubNavDisplayed
    ? [
      {
        id: 'more',
        label: 'More',
        href: '/',
        subLinks: [
          { id: 'submenu1', label: 'Sub Menu 1', href: '/submenu1' },
          { id: 'submenu2', label: 'Sub Menu 2', href: '/submenu2' },
        ],
      },
    ]
    : []),
]

export const homepageFeatures = [
  {
    icon: React.createElement(Layers, {
      sx: { fontSize: 40, color: '#00FF00' },
    }),
    title: 'Streamline your workflows',
    description:
      'Unleash the power of AI to streamline your workflows, automate tasks, and focus on what truly matters. Our solutions seamlessly integrate into your existing processes, eliminating time-consuming tasks and boosting productivity to new heights.',
  },
  {
    icon: React.createElement(StorageOutlined, {
      sx: { fontSize: 40, color: '#00FF00' },
    }),
    title: 'Unleash Innovation with ease',
    description:
      'Embrace innovation effortlessly with our user-friendly AI tools. No technical expertise is required. Tap into limitless possibilities, automate tasks, and gain actionable insights that drive growth and propel your business forward.',
  },
  {
    icon: React.createElement(Star, { sx: { fontSize: 40, color: '#00FF00' } }),
    title: 'Unleash Your Creativity',
    description:
      'Ignite your creativity with AI as your ultimate collaborator. Explore image recognition, natural language processing, and more to create stunning visuals, generate personalized content, and deliver engaging user experiences.',
  },
]

export const softwareDevelopmentFeatures = [
  {
    icon: React.createElement(Layers, {
      sx: { fontSize: 40, color: '#00FF00' },
    }),
    title: 'Streamline your workflows',
    description:
      'Unleash the power of AI to streamline your workflows, automate tasks, and focus on what truly matters. Our solutions seamlessly integrate into your existing processes, eliminating time-consuming tasks and boosting productivity to new heights.',
  },
  {
    icon: React.createElement(StorageOutlined, {
      sx: { fontSize: 40, color: '#00FF00' },
    }),
    title: 'Unleash Innovation with ease',
    description:
      'Embrace innovation effortlessly with our user-friendly AI tools. No technical expertise is required. Tap into limitless possibilities, automate tasks, and gain actionable insights that drive growth and propel your business forward.',
  },
  {
    icon: React.createElement(Star, { sx: { fontSize: 40, color: '#00FF00' } }),
    title: 'Unleash Your Creativity',
    description:
      'Ignite your creativity with AI as your ultimate collaborator. Explore image recognition, natural language processing, and more to create stunning visuals, generate personalized content, and deliver engaging user experiences.',
  },
]