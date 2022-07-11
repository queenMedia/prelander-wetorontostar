import fs from "fs";

const pathPort = `${__dirname}/texts/port.txt`;

export default function getPort() {
  try {
    const file = fs.readFileSync(pathPort, {
      encoding: "utf8",
      flag: "r"
    });

    return parseInt(file.toString(), 10);
  } catch (error) {
    throw new Error("port not available :(");
  }
}
