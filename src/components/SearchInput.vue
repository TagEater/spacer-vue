<template>
  <div class="search-wrapper">
    <div class="search">
      <input
        id="search"
        type="text"
        name="search"
        v-model="searchValue"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  padding: 15px;

  input {
    background: none;
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
  }
}
</style>