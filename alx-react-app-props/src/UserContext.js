// UserContext.js
// Context to share user data across components

import { createContext } from "react";

// Initialize the context with a default value
const UserContext = createContext({
  name: "No Name",
  email: "No Email",
});

export default UserContext;

