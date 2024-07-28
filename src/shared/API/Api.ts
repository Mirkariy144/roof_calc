import Userfront from '@userfront/toolkit';
import { roofLayers } from './../NewRoofModal/roofLayers';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const instance = axios.create({
  // withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  baseURL: 'http://localhost:3001/',
});

// API к логинизации и регистрации

export const axiosLogin = async (email: string, password: string) => {
  const response = await instance.post('auth/login', { email, password });
  const data = response.data;
  const token = jwt.sign(
    { userId: data.userId },
    'Пошёл ты на хуй мусор, я драм энд бэйс продюссер'
  );
  localStorage.setItem('token', token);
};
export const axiosRegistration = async (email: string, password: string) => {
  const response = await instance.post('auth/registration', {
    email,
    password,
  });
  const data = response.data;
  const token = jwt.sign(
    { userId: data.userId },
    'Пошёл ты на хуй мусор, я драм энд бэйс продюссер'
  );
  localStorage.setItem('token', token);
};

export const axiosLogout = async () => {
  const response = await instance.delete('auth/logout');
  return response;
};

// API к проектам
export const axiosNewProject = async (name: string) => {
  const response = await instance.post('projects', { name });
  return response;
};

export const axiosGetProjects = async () => {
  const response = await instance.get('projects');
  return response;
};

export const axiosDeleteProject = async (projectId: number) => {
  const response = await instance.delete(`projects/${projectId}`);
  return response;
};

export const axiosEditProject = async (name: string, projectId?: number) => {
  const response = await instance.put(`projects/${projectId}`, { name });
  return response;
};

// Api к очередям

export const axiosGetQueues = async (projectId: number) => {
  const response = await instance.get(`projectqueue/${projectId}`);
  return response;
};

export const axiosNewQueue = async (name: string, projectId?: number) => {
  const response = await instance.post(`projectqueue`, { name, projectId });
  return response;
};
export const axiosDeleteQueue = async (queueId: number) => {
  const response = await instance.delete(`projectqueue/${queueId}`);
  return response;
};
export const axiosEditQueue = async (name: string, queueId?: number) => {
  const response = await instance.put(`projectqueue/${queueId}`, { name });
  return response;
};

// API к секциям

export const axiosGetSections = async (sectionId: number) => {
  const response = await instance.get(`section/${sectionId}`);
  return response;
};

export const axiosNewSection = async (
  name: string,
  projectId?: number,
  queueId?: number
) => {
  const response = await instance.post(`section`, { name, projectId, queueId });
  return response;
};
export const axiosDeleteSection = async (sectionId: number) => {
  const response = await instance.delete(`section/${sectionId}`);
  return response;
};
export const axiosEditSection = async (name: string, sectionId?: number) => {
  const response = await instance.put(`section/${sectionId}`, { name });
  return response;
};

// API к типам кровли

export const axiosGetRoofTypes = async (roofTypeId: number) => {
  const response = await instance.get(`rooflist/${roofTypeId}`);
  return response;
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
  console.log(response);
  console.log(response.data);
  return response;
};

export const axiosDeleteRoofType = async (roofTypeId: number) => {
  const response = await instance.delete(`rooflist/${roofTypeId}`);
  return response;
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
  console.log(response);
  console.log(response.data);
  return response;
};
