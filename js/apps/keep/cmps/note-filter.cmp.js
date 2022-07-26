import { eventBus } from "../../../services/eventBus-service.js";
export default {
  // props: [""],
  template: `
        <section>
          <div class="search-notes flex justify-center">
            <input @keyup="searchNotes" v-model="val" type="text" placeholder="Search in notes">
            <button @click="searchNotes" style="line-height: 0; margin: 0 0 0 0.5rem;">Search</button>
          </div>
        </section>
    `,
  components: {},
  created() {},
  data() {
    return {
      val: ''
    }
  },
  methods: {
    searchNotes() {
      eventBus.emit('filterNotes', this.val)
    },
  },
  computed: {},
  unmounted() {},
}