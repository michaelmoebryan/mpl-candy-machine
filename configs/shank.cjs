const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "anchor",
  programName: "candy_machine_core",
  programId: "6kvQ9WtATMR4dMuJNCS87w1YhJdGT2zpPzDnD9uUye2w",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "candy-machine-core", "program"),
  rustbin: {
    locked: true,
    versionRangeFallback: "0.27.0",
  },
});

generateIdl({
  generator: "anchor",
  programName: "candy_guard",
  programId: "9e1qb9pQYoGBeeJxYfGUwGcoMyLteKedd1XzVYgsPvS9",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "candy-guard", "program"),
  rustbin: {
    locked: true,
    versionRangeFallback: "0.27.0",
  },
});
