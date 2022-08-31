import * as fs from "fs";
import { createRouter, useBase } from "h3";

const router = createRouter();

function readAFile(fileName) {
  return fs
    .readFileSync(process.cwd() + "/" + "public/markdown/programs/" + fileName)
    .toString();
}

const programs = [
  {
    name: "Quran School",
    masjid: "kicukiro-gasharu",
    image: "quran_school.jpg",
    preview: "Quran school for children",
    reoccurence: "Every weekend",
    time: "9:00-12:00",
    description: {
      en: readAFile("kicukiro-gasharu_quran_school.en.md"),
      kin: readAFile("kicukiro-gasharu_quran_school.kin.md"),
    },
  },
  {
    name: "Amawayiza",
    masjid: "kicukiro-gasharu",
    image: "amawayiza.jpg",
    preview: "Islamic studies on different topic",
    reoccurence: "Everyday",
    time: "15:00-16:00",
    description: readAFile("kicukiro-gasharu_amawayiza.md"),
  },
  {
    name: "Women gathering",
    masjid: "kicukiro-gasharu",
    image: "women_gathering.jpg",
    preview: "Islamic studies for women.",
    reoccurence: "Every Sunday",
    time: "9:00-12:00",
    description: readAFile("kicukiro-gasharu_women_gathering.md"),
  },
];

router.get("/", () => programs);

export default useBase("/api/programs", router.handler);
