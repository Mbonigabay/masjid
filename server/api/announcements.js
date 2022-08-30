import * as fs from 'fs';
import { createRouter, useBase } from 'h3';

const router = createRouter();


function readAFile(fileName){
   return  fs.readFileSync(process.cwd() + "/" +  "public/markdown/announcements/"+fileName).toString()
}

const announcements = [{
    name: "Zakat ul Mal",
    imagePreview: "rmc.png",
    category: "zakat",
    masjid: "rmc",
    dateAdded: "2022-08-20 19:40",
    deadline: "2022-10-25 19:40",
    preview: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins.",
    description: readAFile("rmc_zakatulmal_20082106.md"),
    lang: 'en'
},
{
    name: "Muhazara",
    imagePreview: "kicukiro-gasharu.png",
    category: "muhazara",
    masjid: "kicukiro-gasharu",
    dateAdded: "2022-08-20 19:40",
    deadline: "2022-10-25 19:40",
    preview: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins.",
    description: readAFile("kicukiro_gasharu_muhazara_zakatulmal_20082106.md" ),
    lang: 'en'
}
]

router.get('/', () => announcements);

export default useBase('/api/announcements', router.handler);