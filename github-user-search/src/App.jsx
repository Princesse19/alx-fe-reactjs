import { useState } from "react";
import Search from "./components/Search";
import { fetchGitHubUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const result = await fetchGitHubUsers(query, 5); // minRepos = 5
      setUsers(result);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <ul className="mt-6">
        {users.length === 0 && <p>No users found.</p>}
        {users.map((user) => (
          <li key={user.id} className="mb-4 flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg font-semibold"
              >
                {user.login}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

