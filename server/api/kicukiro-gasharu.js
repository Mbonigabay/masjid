import { createRouter, useBase } from "h3";

const router = createRouter();

const rmc = {
  name: "Masjid Darusalam",
  slug: "kicukiro-gasharu",
  image: "kicukiro-gasharu.png",
  description:
    "Quickly design and customize responsive mobile-first sites withBootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins.",
  team: [
    {
      name: "John Doe",
      title: "Imam",
      image: "kicukiro-gasharu_imam.jpg",
    },
    {
      name: "Kanaka Doe",
      title: "Vice Imam",
      image: "kicukiro-gasharu_vice_imam.jpg",
    },
    {
      name: "Bilal Doe",
      title: "Bilal",
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
    district: "Kicukiro - Kigali",
    streetName: "KK 502st",
    googleLink: "https://www.google.com/search?q=masjid%20darusalam%20kicukiro&oq=masjid+darusalam+kicukiro&aqs=edge.0.69i59j69i60l3j69i64.2344j0j1&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsar6aA0u0MK3LsZqoOib4d48rKEtg:1661085418290&rflfq=1&num=10&rldimm=14146254906832598299&lqi=ChltYXNqaWQgZGFydXNhbGFtIGtpY3VraXJvSJOGiPqMq4CACForEAAQARgAGAEYAiIZbWFzamlkIGRhcnVzYWxhbSBraWN1a2lybyoECAMQAJIBBm1vc3F1ZQ&ved=2ahUKEwj4wrGy-df5AhU6QUEAHTu3AZQQvS56BAgPEAE&sa=X&rlst=f#rlfi=hd:;si:14146254906832598299,l,ChltYXNqaWQgZGFydXNhbGFtIGtpY3VraXJvSJOGiPqMq4CACForEAAQARgAGAEYAiIZbWFzamlkIGRhcnVzYWxhbSBraWN1a2lybyoECAMQAJIBBm1vc3F1ZQ;mv:[[-1.9691994,30.1001595],[-1.9721868999999999,30.0972125]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2"
  },
  contact: {
    email: "darusalam@masjid.rw",
    phone: "+250781607680",
    twitter: "islamrwanda",
    facebook: "RMC.Islamrwanda",
    youtube: "rusabdi"
  }
};

router.get("/", () => rmc);

export default useBase("/api/kicukiro-gasharu", router.handler);
