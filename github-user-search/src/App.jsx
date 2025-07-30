import React, { useState } from "react";
import Search from "./components/Search";
import { fetchGitHubUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  // handleSearch now takes both query and location
  const handleSearch = async (query, location) => {
    try {
      const result = await fetchGitHubUsers(query, location, 5); // minRepos = 5
      setUsers(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <ul className="mt-6 space-y-4">
        {users.length === 0 && (
          <p>No users found. Try searching for a GitHub username.</p>
        )}
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-4 p-3 border rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                {user.login}
              </a>
              <p className="text-sm text-gray-600">
                {/* We can't get location directly here unless we fetch user details */}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

