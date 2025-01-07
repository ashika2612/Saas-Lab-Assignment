const API_URL =
  'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

export const fetchProjects = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.status === 200) {
      throw new Error('Failed to fetch projects!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
