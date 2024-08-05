<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink class="header__logo" to="/">
        <img src="@/assets/logo.svg" width="84" height="25"/>
      </NuxtLink>

      <nav class="header__nav">
        <NuxtLink to="/works">Works</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>

      <div class="header__actions">
        <button class="header__lang-toggle" type="button">
          <AppIcon icon="uk"/>
        </button>
        <AppButton>
          Let’s work
        </AppButton>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {}

.header__container {
  max-width: 1440px;
  padding: 35px 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  display: inline-block;
  margin: 0 20px 0 0;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 0 48px;
  margin: 0 85px 0 auto;

  a {
    display: inline-block;
    color: #101010;
    text-decoration: none;
    padding: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0 16px;
}

.header__lang-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 12px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.102)
}
</style>
