import { lstat, readdir } from "node:fs/promises";
import path from "node:path";
export const listDirContents = async (filepath: string) => {
  try {
    console.log({ filepath });
    const files = await readdir(filepath);
    console.log({ files });
    const detailedFilesPromises = files.map(async (file: string) => {
      let fileDetails = await lstat(path.resolve(filepath, file));
      const { size, birthtime } = fileDetails;
      return { filename: file, "size(KB)": size, created_at: birthtime };
    });
    const detailedFiles = await Promise.all(detailedFilesPromises);
    return detailedFiles;
  } catch (err) {
    console.error(err);
  }
};
