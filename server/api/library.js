import { createRouter, useBase } from "h3";

const router = createRouter();

const books = [
  {
    id: "book-0001",
    title: "Inkingi za Islam",
    author: "Mualim",
    publisher: "Unknown",
    publicationDate: "Unknown",
    pages: 123,
    isbn: 123,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, quos pariatur? Facilis assumenda distinctio velit ipsum. Sapiente at deleniti modi voluptatibus possimus. Officiis, hic nostrum. Eveniet non labore soluta provident.",
    link: "https://drive.google.com/file/d/1fdUtRAjQ0As5P6aLp4mcMUoz3uPwLeXu/view?usp=sharing",
    cover: "book-0001.jpg",
  },
  {
    id: "book-0002",
    title: "Inkingi za Islam part 2",
    author: "Mualim",
    publisher: "Unknown",
    publicationDate: "Unknown",
    pages: 123,
    isbn: 123,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, quos pariatur? Facilis assumenda distinctio velit ipsum. Sapiente at deleniti modi voluptatibus possimus. Officiis, hic nostrum. Eveniet non labore soluta provident.",
    link: "https://drive.google.com/file/d/1fdUtRAjQ0As5P6aLp4mcMUoz3uPwLeXu/view?usp=sharing",
    cover: "book-0001.jpg",
  },
];

router.get("/", () => books);

export default useBase("/api/library", router.handler);
