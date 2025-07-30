import axios from 'axios';

// Use GitHub Search API for advanced search queries
export async function fetchUsers(query) {
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=10`;
  const response = await axios.get(url);
  const users = response.data.items;

  // Fetch detailed info (location, repos count) for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const detailResp = await axios.get(user.url);
      return detailResp.data;
    })
  );

  return { items: detailedUsers };
}

