import * as fs from 'fs';
import { createRouter, useBase } from 'h3';

const router = createRouter();


function readAFile(fileName){
   return  fs.readFileSync(process.cwd() + "/" +  "public/markdown/announcements/"+fileName).toString()
}

const announcements = [
{
    name: "New Mosque Project",
    imagePreview: "new-building-1.jpg",
    category: "fundraising",
    masjid: "kicukiro-gasharu",
    dateAdded: "2022-10-20 21:40",
    deadline: "2028-10-20 19:40",
    preview: "The project was renovated in 2016 and completed in 2017 with 320 users as capacity of our masdjid today, found and all donations to complete that works is  from muslim community. Today we are thinking about how we can upgrade to receive 1200 users and above as capacity with gallery, quran school, administration office, women and men mosque, shopping rooms and an office for rent.",
    description: readAFile("kicukiro_gasharu_new_mosque_project_en_20221020.md" ),
    lang: 'en'
},
{
    name: "New Mosque Project",
    imagePreview: "new-building-1.jpg",
    category: "fundraising",
    masjid: "kicukiro-gasharu",
    dateAdded: "2022-10-20 21:40",
    deadline: "2028-10-20 19:40",
    preview: "The project was renovated in 2016 and completed in 2017 with 320 users as capacity of our masdjid today, found and all donations to complete that works is  from muslim community. Today we are thinking about how we can upgrade to receive 1200 users and above as capacity with gallery, quran school, administration office, women and men mosque, shopping rooms and an office for rent.",
    description: readAFile("kicukiro_gasharu_new_mosque_project_kin_20221020.md" ),
    lang: 'kin'
}
]

router.get('/', () => announcements);

export default useBase('/api/announcements', router.handler);