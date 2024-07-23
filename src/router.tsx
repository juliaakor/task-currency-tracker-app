import { ROUTES } from '@constants/routes';
import { ErrorPage, HomePage, NotFoundPage, BankCardPage, ContactPage, TimelinePage } from '@pages/index';

export const router = [
  {
    Component: NotFoundPage,
    path: ROUTES.NOT_FOUND,
  },
  {
    Component: BankCardPage,
    path: ROUTES.BANK_CARD,
  },
  {
    Component: ContactPage,
    path: ROUTES.CONTACT,
  },
  {
    Component: ErrorPage,
    path: ROUTES.ERROR_OCCURRED,
  },
  {
    Component: HomePage,
    path: ROUTES.HOME,
  },
  {
    Component: TimelinePage,
    path: ROUTES.TIMELINE,
  },
];
