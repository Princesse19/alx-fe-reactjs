export async function fetchGitHubUsers(query, minRepos = 0) {
  const response = await fetch(`https://api.github.com/search/users?q=${query}+repos:>=${minRepos}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return data.items || [];
}

