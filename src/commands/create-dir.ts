import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
export const createDir = async (filepath: string) => {
  if (!existsSync(filepath)) {
    await mkdir(filepath);
    console.log(`Directory ${filepath} created successfully`);
  }
};
