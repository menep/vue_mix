<template>
  <section class="home">
    <p class="home__text">Choose a section in the nav on the top right</p>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      footerNote: "An app by Menep"
    };
  },
  created() {
    this.$emit("upd", this.footerNote);
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;

  &__text {
    font-size: 3rem;
    border-bottom: 2px solid var(--font-color-primary);
  }
}
</style>
