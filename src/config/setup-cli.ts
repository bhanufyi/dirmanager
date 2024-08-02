import { Command } from "commander";

export const setupCLI = () => {
  const program = new Command();
  return program
    .version("0.0.1")
    .usage("<command> [options]")
    .description("An Example CLI for managing directories")
    .option("-l, --ls [directory]", "List all files in the directory")
    .option("-m, --mkdir <directory>", "Create a directory")
    .option("-t, --touch <file>", "Create a file")
    .parse(process.argv);
};
