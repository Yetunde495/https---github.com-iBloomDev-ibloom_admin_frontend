import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '../src/css/dependencies.css';
import '../src/css/components.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppLoader, { globalLoadingRef } from './components/Loader.tsx';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
      <AppLoader ref={globalLoadingRef} />
  </React.StrictMode>,
)
