import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

import EditUser from "./component/Page/EditUserProfile/EditUser";

const root = createRoot(document.getElementById("root"));
root.render(<EditUser />);
