// src/services/githubService.js
import axios from "axios"; // <-- must include "axios"

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : undefined,
  },
});

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    return null;
  }
};

export default githubApi;
