import chalk from "chalk";
import fs from "fs/promises";
import path from "path";

// Function to validate the existence of base, publicDir, and config.json
const validateDevelopment = async (): Promise<void> => {
  let hasFileError = false;

  const checkFile = async (
    filePath: string,
    entityName: string
  ): Promise<void> => {
    try {
      const stat = await fs.stat(filePath);
      const isNotFile = !stat.isFile();
      if (isNotFile) {
        hasFileError = true;
        console.error(
          `${chalk.red("✖")} ${chalk.bold.red(
            "[Build] Error:"
          )} ${chalk.magenta(entityName)} is not a file at: ${chalk.underline.gray(
            filePath
          )}`
        );
      } else {
        console.info(
          `${chalk.green("✔")} ${chalk.bold.green("[Build]")} ${chalk.bold.magenta(entityName)} ${chalk.gray("file checked.")}`
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      hasFileError = true;
      if (error.code === "ENOENT") {
        console.error(
          `${chalk.red("✖")} ${chalk.bold.red(
            "[Build]"
          )} ${chalk.magenta(entityName)} file not found at: ${chalk.underline.gray(
            filePath
          )}`
        );
      } else {
        console.error(
          `${chalk.red("✖")} ${chalk.bold.red(
            "[Build] Error accessing ${entityName} file:"
          )} ${error}`
        );
      }
    }
  };

  // Check files for the errors
  await checkFile(path.join(process.cwd(), ".env.dev"), ".env.dev");

  if (hasFileError) {
    console.error(
      chalk.bold.red(
        "\nOne or more file errors were found. Please fix them and try again."
      )
    );
    process.exit(1);
  }
};

export default validateDevelopment;
