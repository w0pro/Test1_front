<script setup lang="ts">

</script>

<template>
  <div class="auth__card">
    <div class="auth__card_wrapper content__block_wrapper">
      <h1>
        Авторизация
      </h1>
      <form class="form_wrapper">
        <div class="input_wrapper">
          <label for="login">Введите логин</label>
          <input type="text" id="login" name="login">
        </div>
        <div class="input_wrapper">
          <label for="password">Введите пароль</label>
          <input type="password" id="password" name="password">
        </div>
        <div class="input_wrapper">
          div.
        </div>

      </form>

    </div>
  </div>

</template>

<style scoped lang="scss">
.auth__card_wrapper {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

</style>
