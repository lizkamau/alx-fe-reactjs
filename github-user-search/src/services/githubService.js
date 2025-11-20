// src/services/githubService.js
import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : undefined,
  },
});

/**
 * Fetch GitHub users by advanced criteria
 * This must be named `fetchUserData` to satisfy the test
 */
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
    const response = await githubApi.get(url);
    return response.data.items; // array of users
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
};
