import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import kin from '../locales/kin.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'kin',
    messages: {
      en,
      kin
    }
  })

  vueApp.use(i18n)
})