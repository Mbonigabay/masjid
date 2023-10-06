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
    name: "Quran School for Children",
    masjid: "kicukiro-gasharu",
    image: "quran_school.jpg",
    preview: "Quran School for Children",
    reoccurence: "Every weekend",
    time: "14:00-17:00",
    description: {
      en: readAFile("kicukiro-gasharu_quran_school.en.md"),
      kin: readAFile("kicukiro-gasharu_quran_school.kin.md"),
    },
  },
  {
    name: "Quran School for Women",
    masjid: "kicukiro-gasharu",
    image: "quran_school_women.jpg",
    preview: "Quran School for Women",
    reoccurence: "Every Monday and Wednesday",
    time: "14:00-15:00",
    description: {
      en: readAFile("kicukiro-gasharu_quran_school_women.en.md"),
      kin: readAFile("kicukiro-gasharu_quran_school_women.kin.md"),
    },
  },
  {
    name: "Women gathering",
    masjid: "kicukiro-gasharu",
    image: "women_gathering.jpg",
    preview: "Masjid Women Community Gathering.",
    reoccurence: "Every Friday",
    time: "14:00-15:00",
    description: {
      en: readAFile("kicukiro-gasharu_women_gathering.en.md"),
      kin: readAFile("kicukiro-gasharu_women_gathering.kin.md"),
    },
  },
  {
    name: "Youth gathering",
    masjid: "kicukiro-gasharu",
    image: "youth_gathering.jpg",
    preview: "Youth Women community Gathering",
    reoccurence: "Every Sunday",
    time: "16:00-17:00",
    description: {
      en: readAFile("kicukiro-gasharu_women_gathering.en.md"),
      kin: readAFile("kicukiro-gasharu_women_gathering.kin.md"),
    },
  },
];

router.get("/", () => programs);

export default useBase("/api/programs", router.handler);
