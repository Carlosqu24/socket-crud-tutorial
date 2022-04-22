import { loadNotes, saveNote } from "./sockets.js";

const $form = document.querySelector("#form");
const $notesGrid = document.querySelector("#notes-grid")
const $deleteNoteButtons = document.querySelectorAll("#data--note-id")

$form.addEventListener('submit', e => {
      e.preventDefault();
      
      const { title, description } = e.target;
     
      saveNote({ 
            title: title.value, 
            description: description.value
      });
});

document.addEventListener('DOMContentLoaded', e => {
      loadNotes()
})