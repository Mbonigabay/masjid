import * as fs from 'fs';
import { createRouter, useBase } from 'h3';

const router = createRouter();


function readAFile(fileName){
   return  fs.readFileSync(process.cwd() + "/" +  "public/markdown/services/"+fileName).toString()
}

const services = [{
    name: "Marriage",
    icon: "fa-regular fa-heart",
    preview: "Nikkah/Katb Al Kitab",
    description: readAFile("marriage.md")
},{
    name: "Divorce",
    icon: "fa-solid fa-heart-crack",
    preview: "Talaq & Khulu'",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
},
{
    name: "Cemetery",
    icon: "fa-solid fa-hourglass",
    preview: "Janazah/In Case of Death",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
},
{
    name: "Social Services",
    icon: "fa-solid fa-users",
    preview: "Supporting Muslims experiencing adverse living conditions.",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
},
{
    name: "Counseling Referral",
    icon: "fa-solid fa-handshake-angle",
    preview: "Supporting our community through hardship.",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
},
{
    name: "Hajj",
    icon: "fa-solid fa-kaaba",
    preview: "Embark or learn more about the blessed journey.",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
},
{
    name: "Islamic Will",
    icon: "fa-regular fa-clipboard",
    preview: "Ready-to-use template",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
},
{
    name: "Fiqh/Religious Inquiry",
    icon: "fa-solid fa-book-quran",
    preview: "Contact an Imam for Religious Questions",
    description: "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins."
}]

router.get('/', () => services);

export default useBase('/api/services', router.handler);