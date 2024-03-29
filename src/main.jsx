
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(

<Auth0Provider
    domain="dev-8dnrptcnp3zl8fah.us.auth0.com"
    clientId="cTdpGKeATS5QaBuG8FtMjcKosEEEKpya"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  );
