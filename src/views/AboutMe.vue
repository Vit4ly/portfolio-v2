<template>
  <!--  <div class="container">-->
  <div class="about-me">
    <div class="about-me__card">
      <!--      <img src="../assets/home.jpg" alt="about-me" class="about-me__img" />-->
      <div class="about-me__info">
        <h1 class="about-me__title">Привет!</h1>
        <div class="about-me__info__inner">
          <p class="about-me__info__text">Меня зовут Киселев Виталий.</p>
          <p class="about-me__info__text">
            Я начинающий <span>Frontend</span> разработчик из Санкт-Петербурга.
          </p>
          <p class="about-me__info__text">
            Мне <span>{{ getDate }}</span> года, большую часть времени
            проработал в продажах, в разработке я не так давно, но уже успел
            получить хороший опыт при прохождении курсов, выполнении как
            практических проектов так и решение задач в реальных.
          </p>
          <p class="about-me__info__text">
            К выбору <span>Frontend</span> подошел осознанно, одна из причин:
            нравится создавать что-то настраивать взамодействие, работать с UI и
            вдыхать жизнь в проекты.
          </p>
          <p class="about-me__info__text">
            Полноценно обучение начал с января <span>2020</span>.
          </p>
          <p class="about-me__info__text">
            У меня достаточно строгий распорядок дня
          </p>
          <p class="about-me__info__text">
            Для меня утро начинается в <span>5</span>.
          </p>
          <p class="about-me__info__text">
            В среднем обучение по времени от <span>6</span> до
            <span>10</span> часов в день(<span>7</span> дней в неделю).
          </p>
          <p class="about-me__info__text">
            В первую очередь практика, а не только чтение про код. В каждой
            задаче стараюсь избегать простого копирования кода и разбираюсь
            самостоятельно, по необходимости ищу ответы по интересующим вопросам
            на <span>Stackoverflow</span> и на других подобных ресурсах.
          </p>
          <p class="about-me__info__text">
            На этом этапе уже приобретенных навыков и знаний я не останавливаюсь
            и продолжаю обучение. На данный момент, в поиске команды, в которой
            смогу принять участие в разработке, применять и улучшать свои уже
            полученные знания на практике, конечно же опыт и дальнейшего
            развития как разработчика. Цель в будущем стать
            <span>Senior Frontend</span>. В свободное время пишу код, посещение
            фитнес зала, изучение английского языка,много читаю(чаще это
            техническая литература) и статьи, люблю музыку, а так
            <span>HTML, CSS, JS, VUE</span> нет у меня другого хобби! я задрот
            <span>:)</span>
          </p>
          <p class="about-me__info__text">
            <b>P.s:</b> 'Развиваешься значительно быстрей, если занимаешься тем
            что нравится.'
          </p>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      date: new Date(1988, 10, 3),
    };
  },
  computed: {
    getDate() {
      if (this.date.getMonth() > new Date().getMonth()) {
        return new Date().getFullYear() - this.date.getFullYear() - 1;
      }
      return new Date().getFullYear() - this.date.getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
.about-me {
  //width: 70vw;
  //border: 1px solid rgba(0, 0, 0, 0.1);
  //border-radius: 10px;
  height: auto;

  &__card {
    max-width: 50vw;
    //display: grid;
    //grid-template-columns: 0.6fr 1fr;
    //grid-gap: 10px;
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }

  &__info {
    padding: 10px 15px 10px 10px;
    display: flex;
    flex-direction: column;

    &__text {
      color: #000;
      font-size: calc(14px + 0.4vw);
    }
  }

  &__title {
    //temp
    text-align: center;
    padding-bottom: 20px;
  }

  &__inner {
  }
}
</style>
