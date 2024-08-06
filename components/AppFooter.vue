<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__main">
        <div class="footer__big-text big-text">
          <p class="big-text__title">Is there a project?</p>
          <h5 class="big-text__caps">
            Let’s work together
          </h5>
        </div>
        <div class="footer__contacts contacts">
          <div class="contacts__item">
            <h6 class="contacts__title">
              For all questions
            </h6>
            <p>
              <a href="tel:+7920278—00—68">+7 (920) 278—00—68</a><br>
              <a href="mailto:qtim@agency.com">qtim@agency.com</a>
            </p>
          </div>
          <div class="contacts__item">
            <h6 class="contacts__title">
              Office in Russia
            </h6>
            <p>
              139 Ruben Station Lake Drew, NM 52678
            </p>
            <p>
              <AppButton variant="circle">
                <AppIcon icon="triangle"/>
              </AppButton>
            </p>
          </div>
          <div class="contacts__item">
            <h6 class="contacts__title">
              Office in Dubai
            </h6>
            <p>
              139 Ruben Station Lake Drew, NM 52678
            </p>
            <p>
              <AppButton variant="circle">
                <AppIcon icon="triangle"/>
              </AppButton>
            </p>
          </div>
        </div>
      </div>

      <div class="footer__bottom bottom-nav">
        <nav class="bottom-nav__nav">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
        </nav>
        <button class="bottom-nav__go" type="button">
          <span>Go</span>
        </button>
        <nav class="bottom-nav__nav">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  padding: 140px 0 0 0;
  background: #E2BEFF;
}

.footer__main {
  display: flex;
  justify-content: space-between;
}

.footer__big-text {
  max-width: 464px;
}

.big-text {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.01em;
}
.big-text__title {
  margin: 0;
}
.big-text__caps {
  font-size: 112px;
  font-weight: 400;
  line-height: 1;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 13px;
  margin: 55px 0 0 0;
}

.footer__contacts {
  max-width: 152px;
  margin: 90px 230px 0 100px;
}

.contacts {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.01em;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 8px;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
.contacts__item {
  & + & {
    margin-top: 35px;
  }
}
.contacts__title {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  margin: 0 0 12px 0;
}

.footer__bottom {
  margin: 100px 0 0 0;
}

.bottom-nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;
  padding: 40px 0 0 0;
}
.bottom-nav__nav {
  display: flex;
  align-items: center;
  gap: 0 30px;
  font-size: 16px;
  padding-bottom: 30px;

  a {
    color: inherit;
    text-underline-offset: 5px;
  }
}
.bottom-nav__go {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 358px;
  height: 358px;
  background: #101010;
  border-radius: 50%;
  margin-bottom: -180px;
  padding: 20px 20px 90px;
  transition: .25s ease-in-out;

  font-size: 32px;
  font-weight: 400;
  line-height: 1;
  color: #F3F3F3;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
