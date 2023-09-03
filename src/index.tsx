import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MapCharts from './MapsCharts';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "map&chart",
    element: <MapCharts/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
