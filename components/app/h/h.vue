<script>
export default {
  props: {
    /* Уровень заголовка */
    level: {
      type: String,
      required: true,
      min: 1,
      max: 6,
      validator(value) {
        return +value > 0 && +value <= 6
      },
    },
  },
  /*
   * Рендер компонента
   * @param {Object} createElement Функция создания элемента
   */
  render(createElement) {
    return createElement(
      'h' + this.level, // имя тега
      {
        on: {
          click: event => this.$emit('click', event),
        },
        attrs: {
          // указание аттрибутов
          // class: this.classes, // классы
        },
      },
      this.$slots.default, // массив дочерних элементов
    )
  },
}
</script>

<style>
  h6,
  .h6,
  h5,
  .h5,
  h4,
  .h4,
  h3,
  .h3,
  h2,
  .h2,
  h1,
  .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--bs-heading-color);
  }

  h1,
  .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  @media (min-width: 1200px) {
    h1,
    .h1 {
      font-size: 2.5rem;
    }
  }

  h2,
  .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  @media (min-width: 1200px) {
    h2,
    .h2 {
      font-size: 2rem;
    }
  }

  h3,
  .h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  @media (min-width: 1200px) {
    h3,
    .h3 {
      font-size: 1.75rem;
    }
  }

  h4,
  .h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4,
    .h4 {
      font-size: 1.5rem;
    }
  }

  h5,
  .h5 {
    font-size: 1.25rem;
  }

  h6,
  .h6 {
    font-size: 1rem;
  }
</style>
