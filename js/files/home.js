import { carregarJSON } from "./main.js";

export async function renderLog() {
    const messages = await carregarJSON('./js/data/changelog.json', 0);
    const updateSession = document.getElementById('update-list');
    let str = "";
    for (let message of messages) {
        str += `<b>${message.date}</b> - ${message.message}<br>`;
    }

    updateSession.innerHTML += str;
}

export async function renderTODO() {
    const list = await carregarJSON('./js/data/todo.json', 0);
    const updateSession = document.getElementById('todo-list');
    let str = "";
    for (let task of list) {
        if (task.checked) {
            str += '<input type="checkbox" style="pointer-events: none;" onclick="return false" checked>'
        } else {
            str += '<input type="checkbox" style="pointer-events: none;" onclick="return false">'
        }
        str += ` ${task.message}<br>`
    }
    updateSession.innerHTML += str;
}