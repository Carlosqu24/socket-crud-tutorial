const socket = io.connect();

const $notesGrid = document.querySelector("#notes-grid")

export const saveNote = (note) => {
      socket.emit('client:newnote', note);
};

export const loadNotes = () => {
      socket.on('server:loadnotes', data => {
            console.log(data)

            let html = "";

            data.forEach(note => {
                  html += `
                        <div class="card">
                              <h2>${note.title}</h2>
                              <p>${note.description}</p>
                              <button data--note-id="${note._id}">Delete</button>
                        </div>
                  `
            });

            $notesGrid.innerHTML = html
      })
};

export const deleteNote = (noteId) => {
      socket.emit("client:deletenote", noteId)
}