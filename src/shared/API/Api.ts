import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const axiosNewProject = async (name: string) => {
  const response = await instance.post('projects', { name });
  return response.data;
};

export const axiosGetProjects = async () => {
  const response = await instance.get('projects');
  return response.data;
};

export const axiosDeleteProject = async (projectId: number) => {
  const response = await instance.delete(`projects/${projectId}`);
  return response.data;
};
