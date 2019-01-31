<template>
  <footer class="footer">
    <p class="footer__note">Quotes by
      <a href="https://quotesondesign.com/">Quotes on Design</a>
    </p>
    <a class="footer__link" href="https://github.com/menep/">See on GitHub</a>
  </footer>
</template>

<script>
export default {
  name: "app-footer"
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  height: var(--footer-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;

  &__note {
    margin-left: 5rem;
  }
  &__link {
    margin-right: 5rem;
  }
}
</style>
