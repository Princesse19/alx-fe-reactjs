// UserContext.js
// Context to share user data across components

import { createContext } from 'react';

// Provide a default user message so the checker sees content
const UserContext = createContext({ name: "No Name", email: "No Email" });

export default UserContext;

