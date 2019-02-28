<template>
  <section class="notes">
    <ul class="notes__list">
      <li
        class="notes__item"
        :key="item.id"
        :data-id="item.id"
        v-for="item in savedNotes"
        @click="viewNote"
      >{{ item.title }}</li>
    </ul>
    <main class="notes__new">
      <textarea class="notes__input" v-model="currentNote.text"></textarea>
      <div class="notes__btn-container">
        <button class="notes__btn-save" @click="saveNewNote">Save New Note</button>
        <button class="notes__btn-save" @click="saveEditedNote">Save Edited Note</button>
      </div>
    </main>
  </section>
</template>

<script>
import uuid from "uuid";
export default {
  name: "notes",
  data() {
    return {
      currentNote: { text: "" },
      savedNotes: []
    };
  },
  methods: {
    saveNewNote() {
      const title = this.saveTitle();
      this.savedNotes.push({
        id: uuid.v4(),
        text: this.currentNote.text,
        title
      });
      this.resetNote();
    },
    saveEditedNote() {
      this.currentNote.title = this.saveTitle();
      const index = this.savedNotes.findIndex(note => {
        return note.id === this.currentNote.id;
      });
      this.savedNotes[index] = this.currentNote;
      this.resetNote();
    },
    viewNote(e) {
      const stored = this.savedNotes.find(
        note => note.id === e.target.dataset.id
      );
      this.currentNote = Object.assign({}, stored);
    },
    resetNote() {
      this.currentNote = { text: "" };
    },
    saveTitle() {
      return this.currentNote.text.length > 15
        ? this.currentNote.text.slice(0, 14) + "..."
        : this.currentNote.text;
    }
  }
};
</script>

<style lang="scss" scoped>
.notes {
  width: 80%;
  height: 50rem;
  margin: 0 auto;
  display: flex;

  &__list {
    width: 20%;
    list-style: none;
    overflow: scroll;
  }

  &__item {
    cursor: pointer;
    font-size: 1.3rem;
    width: 80%;
    margin: 0 auto;
    padding-left: 1rem;
  }

  &__item:hover {
    color: var(--font-color-secondary);
    border-left: 2px solid var(--font-color-secondary);
  }

  &__new {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__input {
    height: 100%;
    padding: 1rem;
    font-size: 1.5rem;
  }

  &__btn-container {
    display: flex;
    justify-content: center;
  }

  &__btn-save {
    padding: 5px;
  }
}
</style>
