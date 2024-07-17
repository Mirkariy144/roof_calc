import { roofLayers } from './../NewRoofModal/roofLayers';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

// API к проектам
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

export const axiosEditProject = async (name: string, projectId?: number) => {
  const response = await instance.put(`projects/${projectId}`, { name });
  return response.data;
};

// Api к очередям

export const axiosGetQueues = async (projectId: number) => {
  const response = await instance.get(`projectqueue/${projectId}`);
  return response.data;
};

export const axiosNewQueue = async (name: string, projectId?: number) => {
  const response = await instance.post(`projectqueue`, { name, projectId });
  return response.data;
};
export const axiosDeleteQueue = async (queueId: number) => {
  const response = await instance.delete(`projectqueue/${queueId}`);
  return response.data;
};
export const axiosEditQueue = async (name: string, queueId?: number) => {
  const response = await instance.put(`projectqueue/${queueId}`, { name });
  return response.data;
};

// API к секциям

export const axiosGetSections = async (sectionId: number) => {
  const response = await instance.get(`section/${sectionId}`);
  return response.data;
};

export const axiosNewSection = async (
  name: string,
  projectId?: number,
  queueId?: number
) => {
  const response = await instance.post(`section`, { name, projectId, queueId });
  return response.data;
};
export const axiosDeleteSection = async (sectionId: number) => {
  const response = await instance.delete(`section/${sectionId}`);
  return response.data;
};
export const axiosEditSection = async (name: string, sectionId?: number) => {
  const response = await instance.put(`section/${sectionId}`, { name });
  return response.data;
};

// API к типам кровли

export const axiosGetRoofTypes = async (roofTypeId: number) => {
  const response = await instance.get(`rooflist/${roofTypeId}`);
  return response.data;
};

export const axiosNewRoofType = async (
  name: string,
  projectId?: number,
  queueId?: number,
  sectionId?: number,
  roofLayers?: any,
  squareMeters?: number,
  upperPoint?: number,
  lowerPoint?: number
) => {
  const response = await instance.post(`rooflist`, {
    name,
    projectId,
    queueId,
    sectionId,
    roofLayers,
    squareMeters,
    upperPoint,
    lowerPoint,
  });
  debugger;
  return response.data;
};

export const axiosDeleteRoofType = async (roofTypeId: number) => {
  const response = await instance.delete(`rooflist/${roofTypeId}`);
  return response.data;
};
export const axiosEditRoofType = async (
  name: string,
  projectId?: number,
  queueId?: number,
  sectionId?: number,
  roofLayers?: any,
  squareMeters?: number,
  upperPoint?: number,
  lowerPoint?: number,
  roofId?: number
) => {
  debugger;
  const response = await instance.put(`rooflist/${roofId}`, {
    name,
    projectId,
    queueId,
    sectionId,
    roofLayers,
    squareMeters,
    upperPoint,
    lowerPoint,
    roofId,
  });
  return response.data;
};
