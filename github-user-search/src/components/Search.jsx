import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchUserData(query, location);
      if (results.length === 0) {
        setError("Looks like we can't find the user.");
      } else {
        setUsers(results);
        onSearch(results);
      }
    } catch {
      setError("Looks like we can't find the user.");
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
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  width="50"
                  height="50"
                />
                <span>{user.login}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;

