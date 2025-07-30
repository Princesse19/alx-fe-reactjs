/**
 * Fetch GitHub users filtered by username query, location, and minRepos
 * @param {string} query - Username or keywords to search
 * @param {string} location - Location to filter users by (optional)
 * @param {number} minRepos - Minimum number of public repositories (default 0)
 * @returns {Array} - Array of user objects
 */
export async function fetchGitHubUsers(query, location = "", minRepos = 0) {
  try {
    // Build query parts
    let q = `${query} repos:>=${minRepos}`;
    if (location.trim() !== "") {
      q += ` location:${location}`;
    }

    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(q)}`);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
}

