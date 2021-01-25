export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-warning'
  },
  {
    path: '/user/enrollment-my-journey',
    title: 'Enrollment & My Journey',
    type: 'link',
    icontype: 'fas fa-route text-pink'
  },
  {
    path: '/user/my-journey',
    title: 'My Journey',
    type: 'sub',
    icontype: 'fas fa-map-marker-alt text-blue',
    collapse: 'getting-there',
    isCollapsed: true,
    children: [
      { path: 'getting-there', title: 'Getting There', type: 'link' },
      { path: 'transportation-booking', title: 'Transportation Booking', type: 'link' },
      { path: 'parking-management', title: 'Parking Management', type: 'link' }
    ]
  },
  {
    path: '/user/ecommerce',
    title: 'Ecommerce',
    type: 'sub',
    icontype: 'fas fa-shopping-cart text-indigo',
    collapse: 'ecommerce',
    isCollapsed: true,
    children: [
      { path: 'fashion', title: 'Fashion', type: 'link' },
      { path: 'food-and-beverage', title: 'Food and Beverage', type: 'link' },
      { path: 'hotel-room-booking', title: 'Hotel Room Booking', type: 'link' }
    ]
  },
  {
    path: '/user/payment-method',
    title: 'Payment',
    type: 'link',
    icontype: 'fas fa-money-bill text-cyan'
  },
  {
    path: '/user/baggage-drop',
    title: 'Baggage Drop',
    type: 'link',
    icontype: 'fas fa-luggage-cart text-purple'
  },
  {
    path: '/user/real-time-queue-info',
    title: 'Real Time Queue Info',
    type: 'link',
    icontype: '	fas fa-info text-red'
  },
  {
    path: '/user/feedback',
    title: 'Feedback',
    type: 'link',
    icontype: 'far fa-file text-green'
  },
  // {
  //   path: '/helpdesk',
  //   title: 'Helpdesk',
  //   type: 'link',
  //   icontype: 'fas fa-life-ring text-blue'
  // },
  // {
  //   path: '/audit',
  //   title: 'Audit Trail',
  //   type: 'link',
  //   icontype: 'fas fa-braille text-indigo'
  // },
  // {
  //   path: '/maintenance',
  //   title: 'Maintenance',
  //   type: 'link',
  //   icontype: 'fas fa-cogs text-orange'
  // },
  // {
  //   path: '/settings',
  //   title: 'Settings',
  //   type: 'link',
  //   icontype: 'fas fa-sliders-h text-blue'
  // }
];