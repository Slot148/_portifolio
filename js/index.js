import * as home from "./files/home.js";
import * as main from "./files/main.js";
import * as projects from './files/projects.js'; // ← nome correto

main.loadAudio();
main.slowRedirect();
projects.getRepositoriesList();

home.renderLog();
home.renderTODO();