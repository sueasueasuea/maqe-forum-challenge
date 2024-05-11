import authors from "../data/authors.json";

export type Author = (typeof authors)[number];

export const AuthorsMap = authors.reduce(
  (map: { [key: number]: Author }, author: Author) => {
    map[author.id] = author;
    return map;
  },
  {}
);
