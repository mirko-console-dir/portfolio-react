import { technologies } from "@/constants/tech";

export const fetchSearchTechStack = async (search: string) => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

  return technologies.filter((tech) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  );
};
