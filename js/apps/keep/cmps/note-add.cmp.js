import { noteService } from "../services/note.service.js";
import { eventBus } from "../../../services/eventBus-service.js"

export default {
  // props: [""],
  template: `
        <section>
          <div class="add-notes flex justify-center align-center">
            <div class="add-note-container flex space-between align-center">
              <div class="flex col long-input-container">
                <input v-model="title" @keyup.enter="addNote" type="text" class="add-input-title add-input" placeholder="Title">
                <input v-model="val" @keyup.enter="addNote" type="text" class="add-input long-input" :placeholder="holder">
                <p>Press Enter to add note</p>
              </div>
              <div class="flex gap-5">
                <i @click="setType('text')" title="Text note" class="fas fa-font fa-lg note-icons"></i>
                <i @click="setType('todos')" title="List note" class="fas fa-list fa-lg note-icons"></i>
                <i @click="setType('img')" title="Image note" class="far fa-image fa-lg note-icons"></i>
                <i @click="setType('video')" title="Video note" class="fab fa-youtube fa-lg note-icons"></i>
              </div>
            </div>
          </div>
        </section>
    `,
  components: {},
  created() {
    eventBus.on('editNote', this.editNote)
  },
  data() {
    return {
      val: null,
      noteType: "text",
      title: "",
    };
  },
  methods: {
    addNote() {
      if(!this.val) return
      if (this.noteType === "text"){
        if (!this.title.length) this.title = "New note";
        noteService.createTxtNote(this.title, this.val);
      } else if(this.noteType === 'img'){
        if (!this.title.length) this.title = "New image";
        noteService.createImgNote(this.title, this.val)
      } else if(this.noteType === 'todos'){
        if (!this.title.length) this.title = "New list";
        noteService.createTodoNote(this.title, this.val)
      } else if(this.noteType === 'video'){
        if (!this.title.length) this.title = "New video";
        noteService.createVideoNote(this.title, this.val)
      } 
      this.val = null;
      this.title = "";
      this.noteType = "text";
      setTimeout(() => {
        eventBus.emit('updateByBus')
        eventBus.emit('show-msg', {txt: 'Added Succesfully!', type:'success'})
      }, 500);
    },
    setType(type) {
      this.noteType = type
    },
  },
  computed: {
    holder() {
      if (this.noteType === "text") return "Note here";
      else if (this.noteType === "img") return "Enter image URL";
      else if (this.noteType === "todos") return "Write comma seperated list";
      else if (this.noteType === "video") return "Enter video URL";
    },
  },
  unmounted() {},
};
