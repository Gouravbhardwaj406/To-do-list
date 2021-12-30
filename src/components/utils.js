import { MESSAGES,STATUS,TYPE,ACTIONS } from "./Constants";
export const projects = [];

export const validateProject = function (project) {
  let message = [];
  if (!project.name) {
    message.push(MESSAGES.PROJECT_NAME_NOT_PROVIDED);
  } else if (!project.technology) {
    message.push(MESSAGES.TECHNOLOGY_USED_NOT_PROVIDED);
  } else {
    message.push(MESSAGES.PROJECT_ADDED);
    return { isValid: true, message };
  }
  return { isValid: false, message };

};

export const addProject = function (project) {
    projects.push({ ...project, status: STATUS.INPROGRESS });
  };
