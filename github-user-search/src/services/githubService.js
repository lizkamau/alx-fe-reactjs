// src/services/githubService.js
import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : undefined,
  },
});

// Advanced search function
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await githubApi.get(`/search/users?q=${encodeURIComponent(query)}`);
    return response.data; // GitHub returns { items: [...] }
  } catch (error) {
    console.error("GitHub API error:", error);
    return { items: [] };
  }
};
