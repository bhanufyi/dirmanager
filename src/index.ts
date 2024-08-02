import { listDirContents } from "./commands/list-dirs";
import { createDir } from "./commands/create-dir";
import { createFile } from "./commands/create-file";
import { printBanner } from "./utils/print-banner";
import { setupCLI } from "./config/setup-cli";

const main = async () => {
  printBanner();
  const program = setupCLI();
  const options = program.opts();

  if (options.ls != null) {
    await listDirContents(options.ls);
  } else if (options.mkdir != null) {
    await createDir(options.mkdir);
  } else if (options.touch != null) {
    await createFile(options.touch);
  } else {
    console.log("No command provided.");
    program.help();
  }
};

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
});
