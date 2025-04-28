// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import { appStore } from "./app/store.js";
// import { ThemeProvider } from "./components/ui/ThemeProvider";
// import { BrowserRouter } from "react-router-dom"; // Add this import
// import "./index.css";
// import { Toaster } from "./components/ui/sonner";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={appStore}>
//         <App />
//         <Toaster/>
//     </Provider>
//   </React.StrictMode>
// );
import React from "react"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Toaster } from "./components/ui/sonner";
import { useLoadUserQuery } from "./features/api/authApi";
import LoadingSpinner from "./components/LoadingSpinner";

const Custom = ({ children }) => {
  const { isLoading } = useLoadUserQuery();
  return <>{isLoading ? <LoadingSpinner/> : <>{children}</>}</>;
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Custom>
        <App />
        <Toaster />
      </Custom>
    </Provider>
  </React.StrictMode>
);