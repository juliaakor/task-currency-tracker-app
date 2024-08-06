import React from 'react';

import { ErrorLayout } from '@components/index';

export const NotFoundPage = () => {
  return <ErrorLayout title="404 - Page Not Found" message="Sorry, the page you are looking for does not exist." />;
};
