<template>
  <header class="header">
    <h1 class="header__heading"><router-link to="/">Vue Mix</router-link></h1>
    <nav class="header__nav">
      <ul class="header__linkList">
        <li class="header__link"><router-link to="/quotes">Quotes</router-link></li>
        <li class="header__link"><router-link to="/notes">Notes</router-link></li>
        <li class="header__link"><router-link to="/pomdoro">Pomodoro</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);

  &__heading {
    font-weight: 200;
    margin-left: 5rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
  }

  &__linkList {
    margin-right: 5rem;
    display: flex;
    list-style: none;
  }

  &__link {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
}
</style>
