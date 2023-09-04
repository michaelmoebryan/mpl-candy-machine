const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "anchor",
  programName: "candy_machine_core",
  programId: "8MTRsiiN9Sc8eEiG7NM1qxQpoDUXLLRGwq8nzG3tbdwF",
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
  programId: "6aFdZ1MGb5b8rXpBpPXe3SKr3zxY84JRWWoA3jeAzaZF",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "candy-guard", "program"),
  rustbin: {
    locked: true,
    versionRangeFallback: "0.27.0",
  },
});
