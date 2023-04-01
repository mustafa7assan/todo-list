import taskManager from "./TaskManager";
class Project {
  constructor(title) {
    this.title = title;
    this.tm = new taskManager();
  }
}

export default Project;
