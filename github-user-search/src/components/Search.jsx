import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query, location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Search GitHub username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Location (optional)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default Search;

