import axios from "axios";

const REACT_APP_API_BASE = process.env.REACT_APP_API_BASE; // || "http://localhost:4000/api";

const COURSES_URL = REACT_APP_API_BASE + "/courses";
const MODULES_URL = REACT_APP_API_BASE + "/modules";

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const updateModule = async (moduleId, module) => {
  const response = await axios.put(`${MODULES_URL}/${moduleId}`, module);
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
