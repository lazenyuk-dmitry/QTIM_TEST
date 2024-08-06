<template>
  <div class="wrapper">
    <AppHeader class="header" />
    <main class="content">
      <NuxtPage />
    </main>
    <AppFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
}
</style>
