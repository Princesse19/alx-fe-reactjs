import React, { useState } from "react";
import { fetchGitHubUsers } from "../services/githubService";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // async function to handle the search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchGitHubUsers(query);
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(results);
        onSearch(results); // send results to parent if needed
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

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
}

export default Search;

