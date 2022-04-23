import { deleteNote } from "./sockets.js";

const $notesGrid = document.querySelector("#notes-grid")
const $form = document.querySelector("#form");

const formatDate = (timestamp) => {

      const date = new Date(timestamp)

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();


      // "/"+(date.getMonth()+1)+
      // "/"+date.getFullYear()+
      // " "+date.getHours()+
      // ":"+date.getMinutes()+
      // ":"+date.getSeconds());

      return `
            ${hours}:${minutes}:${seconds} - ${day}/${month}/${year}
      `
}

export const cleanFormUI = () => {
      const $formInputs = $form.querySelectorAll('[name]');

      $formInputs.forEach(input => input.value = "");
};

export const createNoteUI = ({ title, description, start_date, end_date, _id }) => 
      `
            <div class="card">
                  <h2>${title}</h2>
                  <p>${description}</p>
                  <p>Fecha de inicio: ${formatDate(start_date)}</p>
                  <p>Fecha finalización: ${formatDate(end_date)}</p>
                  <button class="delete-button" data-noteid="${_id}">Delete</button>
            </div>
      `;

const deleteNoteUI = () => {
      const $deleteNoteButtons = document.querySelectorAll("[data-noteid]")

      $deleteNoteButtons.forEach(button => {
            button.addEventListener('click', e => {
                  deleteNote(button.dataset.noteid);
            });
      });
};

export const renderNotesUI = (data) => {

      let html = "";

      data.forEach(note => {
            console.log(note);
            html += createNoteUI(note);
      });

      $notesGrid.innerHTML = html;

      deleteNoteUI();
};
