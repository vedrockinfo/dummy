import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuickDesign from './pages/QuickDesign';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "quickdesign",
    element: <QuickDesign />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);
