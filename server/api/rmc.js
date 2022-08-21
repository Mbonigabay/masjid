import { createRouter, useBase } from 'h3';

const router = createRouter();

const rmc = {
    name: "RMC - Rwanda Muslim Community",
    slug: "rmc",
    image: "rmc.png",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins.",
    team: [
        {
          name: "John Doe",
          title: "Mufti",
          image: "kicukiro-gasharu_imam.jpg",
        },
        {
          name: "Kanaka Doe",
          title: "Vice Mufti",
          image: "kicukiro-gasharu_vice_imam.jpg",
        },
        {
          name: "Bilal Doe",
          title: "Dawa",
          image: "kicukiro-gasharu_bilal.jpg",
        },
        {
          name: "Youth Doe",
          title: "Youth",
          image: "kicukiro-gasharu_youth.jpg",
        },
        {
          name: "John Doe",
          title: "Treasury",
          image: "kicukiro-gasharu_treasury.jpg",
        },
      ],
      location: {
        district: "Gasabo - Kigali",
        streetName: "KG 550st",
        googleLink: "https://www.google.com/maps/place/Rwanda+Muslim+Community/@-1.9350453,30.0811391,15z/data=!4m5!3m4!1s0x0:0x399f05562aaf5ec2!8m2!3d-1.9350527!4d30.0811342"
      },
      contact: {
        email: "rmc@masjid.rw",
        phone: "+250781607680",
        twitter: "islamrwanda",
        facebook: "RMC.Islamrwanda",
        youtube: "rusabdi"
      }
}

router.get('/', () => rmc);

export default useBase('/api/rmc', router.handler);