import { createRouter, useBase } from "h3";

const router = createRouter();

const books = [
  {
    id: "book-0001",
    title: "Forty Encounters with the Beloved Prophet",
    author: "Dr. Adel ibn ‘Ali al-Shiddy",
    publisher: "",
    publicationDate: "",
    pages: 160,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1OL2V19VXlMJ41VE2-pd-_FiyLm_ez_Sk/view?usp=drive_link",
    cover: "book-0001.png",
  },
  {
    id: "book-0002",
    title: "Prohibitions That Are Taken Too Lightly",
    author: "Sheikh Muhammed Salih Al-Munajjid",
    publisher: "Islamic Propagation Office in Rabwah, Riyadh",
    publicationDate: "2008",
    pages: 53,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1wcTf2IWSoc2hYmN5N2QSaI8axR7fX_wE/view?usp=drive_link",
    cover: "book-0002.png",
  },
  {
    id: "book-0003",
    title: "Useful Ways of Leading a Happy Life",
    author: "Sheikh Abdurrahman Bin Nasir Al-Si'idy",
    publisher: "Ministry of Islamic Affair",
    publicationDate: "2008",
    pages: 40,
    isbn: "9960293998",
    description: "",
    link: "https://drive.google.com/file/d/1OTSj19rM8rXRohyOIqJ4LraJPRGL5mcB/view?usp=drive_link",
    cover: "book-0003.png",
  },
  {
    id: "book-0004",
    title: "The Islamic Faith - A Simplified Presentation",
    author: "Prof Ahmad ibn Abd al-Rahman al-Qadi",
    publisher: "Cooperative Office for Islamic Propagation in Rabwah",
    publicationDate: "2017",
    pages: 93,
    isbn: "978-603-8229-21-7",
    description: "",
    link: "https://drive.google.com/file/d/1X7COrjUyV_blbypq14Apxo6UW8KDRLUX/view?usp=drive_link",
    cover: "book-0004.png",
  },
  {
    id: "book-0005",
    title: "This is my Lord",
    author: "Khalid Al-Khelaiwi",
    publisher: "Islamic Content Service Association in Languages",
    publicationDate: "2022",
    pages: 189,
    isbn: "978-603-04-2475-7",
    description: "",
    link: "https://drive.google.com/file/d/1598kpLNA6QBOSTHt3bIiv3JZyYYp7ZSn/view?usp=drive_link",
    cover: "book-0005.png",
  },
  {
    id: "book-0006",
    title: "Islam",
    author: "Muhammad ibn Abdullah as-Saheem",
    publisher: "Islamic Content Service Association in Languages",
    publicationDate: "2021",
    pages: 98,
    isbn: "978-603-8329-46-7",
    description: "",
    link: "https://drive.google.com/file/d/1OPEDMwvxeunAPzojzSLASXnm6PcE5smG/view?usp=drive_link",
    cover: "book-0006.png",
  },
  {
    id: "book-0007",
    title: "Islam",
    author: "Muhammad ibn Abdullah as-Saheem",
    publisher: "Islamic Content Service Association in Languages",
    publicationDate: "2023",
    pages: 12,
    isbn: "978-603-8402-60-3",
    description: "",
    link: "https://drive.google.com/file/d/1uy_9sT4pjI-3TFnj92UJqUF6O4Ajf2mr/view?usp=drive_link",
    cover: "book-0007.png",
  },
  {
    id: "book-0008",
    title: "New Muslim Guideline",
    author: "Muhammad al-Shahri",
    publisher: "",
    publicationDate: "",
    pages: 129,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1sU0yENkGhZiTp6eStk9UM3QxkyrX0g9J/view?usp=drive_link",
    cover: "book-0008.png",
  },
  {
    id: "book-0009",
    title: "Explanation of the Meanings of The Noble Quran in the English Language",
    author: "Muhammad ibn Abdullah as-Saheem",
    publisher: "Cooperative Office for Islamic Propagation in Rabwah",
    publicationDate: "2020",
    pages: 897,
    isbn: "978-603-8323-03-8",
    description: "",
    link: "https://drive.google.com/file/d/1YPQ7flqblNPzfccsciZ0r5SkkNPmyEf7/view?usp=drive_link",
    cover: "book-0009.png",
  },
  {
    id: "book-0010",
    title: "Explanation of the Important Lessons for Every Muslim",
    author: "Imam Abdul Aziz Ibn Baaz",
    publisher: "Faatimah bint Jaylaalee ibn Fareehah",
    publicationDate: "",
    pages: 194,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1GUw4axM2nvtVHK-2nA1tT-vv_NeGgkbl/view?usp=drive_link",
    cover: "book-0010.png",
  },
  {
    id: "book-0011",
    title: "AGATABO : UBURYO BWO KWISUKURA,ISENGESHO N'UBUSABE",
    author: "Sheikh Sibomana Mahmud",
    publisher: "",
    publicationDate: "",
    pages: 17,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1hTWlDnUyJsZAjcjM7k5x769mzhoyFxFb/view?usp=drive_link",
    cover: "book-0011.png",
  },
  {
    id: "book-0012",
    title: "IMYEMERERE YA ISLAM KURI YESU NA MARIA",
    author: "Sheikh Issa Ayubu",
    publisher: "",
    publicationDate: "",
    pages: 6,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1lObRw-7rHFF8DvHT8B6sGwPi9Z8iwd-4/view?usp=drive_link",
    cover: "book-0012.png",
  },
  {
    id: "book-0013",
    title: "inzira zifite inyungu kubuzima bushimishije",
    author: "",
    publisher: "",
    publicationDate: "",
    pages: 10,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1bcp992FQlSckeHXwF8GROJntSR8TBeMo/view?usp=drive_link",
    cover: "book-0013.png",
  },
  {
    id: "book-0014",
    title: "Ibisobanuro By'Inyandiko Y'Amasomo Ya Ngombwa Kuri Buri Muyisilamu",
    author: "Sheikh Imamu: ABDUL AZIZ MWENE ABDALLAH MWENE BAZI",
    publisher: "",
    publicationDate: "",
    pages: 129,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1b2O0_AT8rDEA9FxcitDcsFEmK1cUmmuz/view?usp=drive_link",
    cover: "book-0014.png",
  },
  {
    id: "book-0015",
    title: "Inshamake ngirakamaro y'amateka y'intumwa Muhamadi",
    author: "Sheikh Twagiramungu Mudathir",
    publisher: "",
    publicationDate: "",
    pages: 53,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/13betgo_FnICVepcJVlq1ngdfR7NkX54f/view?usp=drive_link",
    cover: "book-0015.png",
  },
  {
    id: "book-0016",
    title: "Kugabanya Ibidafite Akamaro mu Mvugo Z'Ingenzi",
    author: "Sheikh Twagiramungu Mudathir",
    publisher: "",
    publicationDate: "",
    pages: 236,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1xvxpSpBBISGObjFNLJvEJKTxktvPBkzs/view?usp=drive_link",
    cover: "book-0016.png",
  },
  {
    id: "book-0017",
    title: "Ibisobanuro By'Ibintu Bitatu By'Ingenzi",
    author: "Sheikh Twagiramungu Mudathir",
    publisher: "",
    publicationDate: "",
    pages: 108,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1dDA8PlUnelPC7ypUC-fIDbRWpR7xQvMq/view?usp=drive_link",
    cover: "book-0017.png",
  },
  {
    id: "book-0018",
    title: "Ibyo abana badakwiye kuyoberwa",
    author: "",
    publisher: "",
    publicationDate: "",
    pages: 183,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1-9BicjXSEc-Jy8Ex5SElMoL2KJl-lJGq/view?usp=drive_link",
    cover: "book-0018.png",
  },
  {
    id: "book-0019",
    title: "Njye Ndi Umusilamu",
    author: "",
    publisher: "",
    publicationDate: "",
    pages: 5,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1kVQUhb7fcwNsYADjGlXkvsRsi-HmUYLx/view?usp=drive_link",
    cover: "book-0019.png",
  },
  {
    id: "book-0020",
    title: "Itegeko mu gushyira mu bikorwa imigenzo y' intumwa y'imana",
    author: "Abdul Aziz mwene Abdallah mwene Baaz",
    publisher: "",
    publicationDate: "",
    pages: 18,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1nQTKQIvUk-q5Jkr1O2Io_07OeiTp5bSg/view?usp=drive_link",
    cover: "book-0020.png",
  },
  {
    id: "book-0021",
    title: "Isomo rya Tauhid",
    author: "Sheikh Twagiramungu Mudathir",
    publisher: "",
    publicationDate: "",
    pages: 88,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1ga_WnHkDAG_41vPaxuUebTC64vO6J7KZ/view?usp=drive_link",
    cover: "book-0021.png",
  },
  {
    id: "book-0022",
    title: "Isomo rya Hadith",
    author: "Sheikh Twagiramungu Mudathir",
    publisher: "",
    publicationDate: "",
    pages: 63,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/18YGXg7Zx5twrV_f1iEFL_32QkHJ03vl0/view?usp=drive_link",
    cover: "book-0022.png",
  },
  {
    id: "book-0023",
    title: "Isomo rya Fiqh",
    author: "Sheikh Twagiramungu Mudathir",
    publisher: "",
    publicationDate: "",
    pages: 118,
    isbn: "",
    description: "",
    link: "https://drive.google.com/file/d/1RsOzrp9Y9a-3oEwnZ-5ajK7AksP0d3Mm/view?usp=drive_link",
    cover: "book-0023.png",
  },
];

router.get("/", () => books);

export default useBase("/api/library", router.handler);