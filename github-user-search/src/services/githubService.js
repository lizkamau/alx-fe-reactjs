import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const url = `https://api.github.com/search/users?${query}`;

    const response = await axios.get(url);
    return response.data.items; // returns an array of users
  } catch (error) {
    throw new Error("Advanced search failed");
  }
};
