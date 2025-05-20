import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";

import store from "./store.jsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  throw new Error('Root element with id "root" not found');
}
