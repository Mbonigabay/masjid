import { createRouter, useBase } from "h3";

const router = createRouter();

const rmc = {
  name: "Masjid Darusalam",
  slug: "kicukiro-gasharu",
  image: "kicukiro-gasharu.jpg",
  description: {
    en: "The Daru salam Mosque was constructed in 1991 and upgraded in 2016.The building measures approximately 18 m by 15 m (on 270 to 350 sqm), covering an area of 542 sqm (plot size), including exterior landscape. The main axis of the building is rotated about 22° north to east, aligning it in the direction of the Kaaba in Mecca, Saudi Arabia.",
    kin: "Umusigiti wa Daru salam wubatswe mu 1991 kandi uzamurwa mu 2016. Iyi nyubako ipima metero 18 kuri metero 15 (kuri 270 kugeza kuri 350 sqm), ifite ubuso bwa sqm 542 (ubunini bwikibanza), harimo n’imiterere y’inyuma. Inzira nyamukuru yinyubako izunguruka nka 22 ° mumajyaruguru ugana iburasirazuba, ikayihuza yerekeza mu cyerekezo cya Kaaba i Maka, muri Arabiya Sawudite.",
  },
  team: [
    {
      name: "Muhammed Africa",
      title: "Imam",
      image: "kicukiro-gasharu_imam.jpg",
    },
    {
      name: "Saidi Abdoul-Rahman",
      title: "Vice Imam",
      image: "kicukiro-gasharu_vice_imam.jpg",
    },
    {
      name: "Shaffiq Kabarisa",
      title: "Good Governance",
      image: "kicukiro-gasharu_good_governance_.jpg",
    },
    {
      name: "Adam Nshimiyimana",
      title: "Youth",
      image: "kicukiro-gasharu_youth.jpg",
    },
    {
      name: "Issa Ngirinshuti",
      title: "Secretary",
      image: "kicukiro-gasharu_secretary.jpg",
    },
    {
      name: "Hussein Mulisa",
      title: "Accountant",
      image: "kicukiro-gasharu_accountant.jpg",
    },
  ],
  location: {
    district: "Kicukiro - Kigali",
    streetName: "KK51 ave",
    googleLink:
      "https://www.google.com/search?q=masjid%20darusalam%20kicukiro&oq=masjid+darusalam+kicukiro&aqs=edge.0.69i59j69i60l3j69i64.2344j0j1&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsar6aA0u0MK3LsZqoOib4d48rKEtg:1661085418290&rflfq=1&num=10&rldimm=14146254906832598299&lqi=ChltYXNqaWQgZGFydXNhbGFtIGtpY3VraXJvSJOGiPqMq4CACForEAAQARgAGAEYAiIZbWFzamlkIGRhcnVzYWxhbSBraWN1a2lybyoECAMQAJIBBm1vc3F1ZQ&ved=2ahUKEwj4wrGy-df5AhU6QUEAHTu3AZQQvS56BAgPEAE&sa=X&rlst=f#rlfi=hd:;si:14146254906832598299,l,ChltYXNqaWQgZGFydXNhbGFtIGtpY3VraXJvSJOGiPqMq4CACForEAAQARgAGAEYAiIZbWFzamlkIGRhcnVzYWxhbSBraWN1a2lybyoECAMQAJIBBm1vc3F1ZQ;mv:[[-1.9691994,30.1001595],[-1.9721868999999999,30.0972125]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2",
  },
  contact: {
    email: "Masdjiddarusalam@gmail.com",
    phone: "+250788701081",
    youtube: "masdjidgasharu",
    instagram: "masdjid.rw",
    tiktok: "masdjid.rw"
  },
};

router.get("/", () => rmc);

export default useBase("/api/masjids/kicukiro-gasharu", router.handler);
