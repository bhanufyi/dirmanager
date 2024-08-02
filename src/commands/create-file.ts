import { open } from "node:fs/promises";
export const createFile = async (filepath: string) => {
  await open(filepath, "w");
  console.log(`File ${filepath} created successfully`);
};
