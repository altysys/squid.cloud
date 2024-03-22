import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Customer',
        url: '/forms/customer'
      },
      {
        name: 'Vendor',
        url: '/forms/vendor'
      },
      {
        name: 'Product',
        url: '/forms/product'
      },
      {
        name: 'Invoice',
        url: '/forms/invoice'
      }
    ]
  },
  
  
  
  
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      }
    ]
  }
 
];
