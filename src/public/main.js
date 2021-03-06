import { deleteNote, loadNotes, saveNote } from "./sockets.js";

const $form = document.querySelector("#form");
const $notesGrid = document.querySelector("#notes-grid")



$form.addEventListener('submit', e => {
      e.preventDefault();
      
      const { title, description } = e.target;
     
      saveNote({ 
            title: title.value, 
            description: description.value,
            start_date: new Date().getTime(),
            end_date: new Date("2023-02-13").getTime()
      });
});

document.addEventListener('DOMContentLoaded', e => {
      loadNotes()

      // const $deleteNoteButtons = document.querySelectorAll("[data-noteid]")
      // const $deleteNoteButtons = document.querySelectorAll(".delete-button")
     
})

