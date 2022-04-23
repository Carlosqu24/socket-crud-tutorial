import { deleteNote } from "./sockets.js";

const $notesGrid = document.querySelector("#notes-grid")
const $form = document.querySelector("#form");

export const cleanFormUI = () => {
      const $formInputs = $form.querySelectorAll('[name]');

      $formInputs.forEach(input => input.value = "");
};

export const createNoteUI = ({ title, description, _id }) => 
      `
            <div class="card">
                  <h2>${title}</h2>
                  <p>${description}</p>
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
