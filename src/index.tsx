import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MapCharts from './MapsCharts';

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
    <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
