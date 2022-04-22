import Note from "./models/Note.js";

export default (io) => {
      io.on('connection', (socket) => {
            console.log("New socket connected");

            const emitNotes = async () => {
                  const notes = await Note.find();
                  socket.emit("server:loadnotes", notes);
            };
            emitNotes();

            socket.on('client:newnote', async (data) => {
                  const newNote = new Note(data);
                  const savedNote = await newNote.save();
                  io.emit('server:newnote', savedNote);
            });

            socket.on('client:deletenote', async (noteId) => {
                  await Note.findByIdAndDelete(noteId);
                  emitNotes();
            });

            socket.on('client:getnote', async (noteId) => {
                  const note = await Note.findById(noteId);
                  socket.emit('server:selectednote', note);
            });

            socket.on('client:updatenote', async (updateNote) => {
                  const { _id, title, description } = updateNote;

                  await Note.findByIdAndUpdate(_id, {
                        title, description
                  });
                  emitNotes();
            });

            socket.on('disconnect', () => {
                  console.log(socket.id, "disconnected");
            });
      });
};