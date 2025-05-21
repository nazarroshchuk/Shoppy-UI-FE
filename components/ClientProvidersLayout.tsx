import React from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from '@/app/dark.theme';
import { AuthContextProvider } from '@/context/auth-context';
import authenticated from '@/api/authenticated';

async function ClientProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await authenticated();

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AuthContextProvider isAuthenticated={isAuthenticated}>
          {children}
        </AuthContextProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default ClientProvidersLayout;
