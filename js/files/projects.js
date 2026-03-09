import { carregarJSON } from "./main.js";

export async function getRepositoriesList() {
    const url = "https://api.github.com/users/Slot148/repos";
    const repositories = await carregarJSON(url);
    const ignore = await carregarJSON('../js/data/ignore_repo.json')
    const list = document.getElementById('container-projects');

    let str = "";
    for (let repo of repositories) {
        if (ignore.map(i => i.toLowerCase()).includes(repo.name.toLowerCase())) continue;
        if (repo.description === null) {
            str += `<div class="project-element" ><a href="${repo.html_url}" target="_blank"><h4>${repo.name}</h4></a></div>`;
        } else {
            str += `<div class="project-element" ><a href="${repo.html_url}" target="_blank"><h4>${repo.name}</h4><p>${repo.description}</p></a></div>`;
        }

    }
    list.innerHTML = str;
}