import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        define: {
            __VUE_I18N_FULL_INSTALL__: true,
            __VUE_I18N_LEGACY_API__: true,
            __INTLIFY_PROD_DEVTOOLS__: false
        }
    }
});
