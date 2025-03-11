import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import '@mantine/core/styles.css';
import { notifications, Notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import { AppProvider } from './context/AppStore.jsx';
import { StoreProvider } from './store/Context.jsx';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error('error', error);
      console.log('query', query);
      notifications.show({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
        color: 'red',
      });
    },
  }),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <StoreProvider>
        <AppProvider>
          <Notifications position="top-right" />
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </QueryClientProvider>
        </AppProvider>
      </StoreProvider>
    </MantineProvider>
  </StrictMode>
);
