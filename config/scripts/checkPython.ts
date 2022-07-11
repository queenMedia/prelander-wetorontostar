import { spawnSync as spawn } from "child_process";
import chalk from "chalk";

const pyVersionRequired = "Python 3";
const pyPathVenv = "./config/scripts/.venv";
const pyVersion = spawn("python3", ["--version"], {
  shell: true
});

const versionStatus = pyVersion.status;
const versionError = pyVersion.stderr.toString();
const versionOutput = pyVersion.stdout.toString();

if (versionStatus !== 0 || versionError || !versionOutput.includes(pyVersionRequired)) {
  console.log(chalk.red("Python version 3 or up"));

  process.exit(1);
}

if (versionOutput.includes(pyVersionRequired)) {
  const createVenv = spawn("python3", ["-m", "venv", pyPathVenv], {
    shell: true
  });
  const venvStatus = createVenv.status;
  const venvError = createVenv.stderr.toString();
  const venvOutput = createVenv.stdout.toString();

  if (venvStatus === 0) {
    console.log(chalk.green(`

    python virtual environment created

    `));
  }
}
