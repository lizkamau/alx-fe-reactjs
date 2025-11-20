// src/services/github.js
import axios from "axios";

// Access the API key from the environment variable
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create an Axios instance for GitHub API requests
const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`, // <-- here we use it
  },
});

// Example function to get a GitHub user by username
export const getUser = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};

export default githubApi;
