import { createRouter, useBase } from 'h3';

const router = createRouter();

const rmc = {
    name: "RMC - Rwanda Muslim Community",
    slug: "rmc",
    image: "rmc.png",
    location: "Nyarugenge - Kigali",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
}

router.get('/', () => rmc);

export default useBase('/api/rmc', router.handler);