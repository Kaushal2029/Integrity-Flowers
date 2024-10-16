import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useParams as useParamsRouter, // Rename to avoid conflict
} from "react-router-dom";
import Sign from "./Components/Sign";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Register from "./Components/Register";
// import Number from "./Components/Number";
// import Information from "./Components/Information";
// import Checkout from "./Components/Checkout";
// import CheckoutPage from "./Components/CheckoutPage";

function CheckoutWrapper() {
  const { step } = useParamsRouter();
  return <CheckoutPage step={step} />;
}

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <Sign />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/number",
  //   element: <Number />,
  // },
  // {
  //   path: "/information",
  //   element: <Information />,
  // },
  // {
  //   path: "/checkout",
  //   element: <Checkout />,
  // },
  // {
  //   path: "/checkout/:step",
  //   element: <CheckoutWrapper />,
  // },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
