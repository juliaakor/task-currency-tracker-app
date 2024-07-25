export const ROUTES = {
  BANK_CARD: 'bank-card',
  CONTACT: 'contact',
  ERROR_OCCURRED: 'error-occurred',
  HOME: '/',
  NOT_FOUND: '*',
  TIMELINE: 'timeline',
};

interface RouteProps {
  linkLabel: string;
  link: string;
}

interface FooterRoutesProps {
  label: string;
  section: Array<RouteProps>;
}

export const FOOTER_ROUTES: FooterRoutesProps[] = [
  {
    label: 'General',
    section: [
      { link: '', linkLabel: 'Market' },
      { link: '', linkLabel: 'Service' },
    ],
  },
  {
    label: 'Product',
    section: [
      { link: '', linkLabel: 'Sparks' },
      { link: '', linkLabel: 'Snaps' },
    ],
  },
  {
    label: 'Community',
    section: [
      { link: '', linkLabel: 'Ideas' },
      { link: '', linkLabel: 'Streams' },
    ],
  },
];

export const NAV_ROUTES = [
  ['Home', ROUTES.HOME],
  ['Timeline', ROUTES.TIMELINE],
  ['Bank card', ROUTES.BANK_CARD],
  ['Contact', ROUTES.CONTACT],
];
