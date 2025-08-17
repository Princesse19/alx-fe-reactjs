// UserContext.js
// Context to share user data across components in the app

import { createContext } from 'react';

// Create a context with default null value
const UserContext = createContext(null);

// Export the context so other components can import it
export default UserContext;

