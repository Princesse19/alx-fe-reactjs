import axios from 'axios';

/**
 * Fetch a GitHub user by username
 * @param {string} username - GitHub username to fetch
 * @returns {Object} - User object with details
 */
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
}
