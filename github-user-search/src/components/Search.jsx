import React, { useState } from "react";
import { fetchGitHubUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setLoading(true);

    try {
      const results = await fetchGitHubUsers(query, 5); // minRepos = 5
      if (results.length === 0) {
        setError("No users found.");
      }
      setUsers(results);
    } catch (e) {
      setError("Error fetching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show results */}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

