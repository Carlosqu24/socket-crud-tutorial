import { cleanFormUI, renderNotesUI } from "./ui.js";

const socket = io.connect();

export const saveNote = (note) => {
      socket.emit('client:newnote', note);
      cleanFormUI()
};

export const loadNotes = () => {
      socket.on('server:loadnotes', data => {
            console.log(data);

            renderNotesUI(data);
      });
};

export const deleteNote = (noteId) => {
      socket.emit("client:deletenote", noteId)
}