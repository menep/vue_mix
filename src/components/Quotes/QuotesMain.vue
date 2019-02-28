<template>
  <section class="quotes">
    <blockquote class="quotes__text" v-html="quote"></blockquote>
    <hr class="quotes__separator">
    <cite class="quotes__author" v-html="author"></cite>
    <button class="quotes__btn" @click="fetchQuote">&#x21bb;</button>
  </section>
</template>

<script>
export default {
  name: "quotes-main",
  data() {
    return {
      quote: "",
      author: "",
      footerNote:
        'Quotes by <a href="https://quotesondesign.com/">Quotes on Design</a>'
    };
  },
  methods: {
    fetchQuote() {
      fetch(
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        { cache: "no-store" }
      )
        .then(response => response.json())
        .then(resObject => {
          const { content: quote, title: author } = resObject[0];
          this.quote = quote;
          this.author = author;
        });
    }
  },
  created() {
    this.fetchQuote();
    this.$emit("upd", this.footerNote);
  }
};
</script>

<style lang="scss" scoped>
.quotes {
  min-width: 80%;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;

  &__text {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__separator {
    color: inherit;
    width: 100%;
  }

  &__author {
    display: block;
    font-size: 1.8rem;
    font-weight: 300;
    font-style: italic;
    margin-top: 1rem;
  }

  &__btn {
    color: #d2d2d2;
    cursor: pointer;
    margin-top: 2rem;
    height: 4rem;
    width: 8rem;
    font-size: 2.5rem;
    border: none;
    background-color: var(--font-color-primary);
  }

  &__btn:active,
  &__btn:hover {
    background-color: #eee;
  }
}
</style>
