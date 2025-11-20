// src/services/githubService.js
import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : undefined,
  },
});

// Fetch multiple users using GitHub search
export const fetchUsers = async (username) => {
  try {
    const response = await githubApi.get(`/search/users?q=${encodeURIComponent(username)}`);
    return response.data.items; // returns an array of users
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
};
