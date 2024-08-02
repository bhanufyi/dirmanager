import esbuild from "esbuild";

const start = process.hrtime.bigint();

const [entryPoint] = process.argv.slice(2);

(async () => {
  try {
    // Bundle JavaScript with esbuild
    const result = await esbuild.build({
      entryPoints: [entryPoint],
      bundle: true,
      minify: true,
      platform: "node",
      target: "es2020",
      format: "esm",
      tsconfig: "./tsconfig.json",
      outdir: "dist",
    });

    for (const error of result.errors) {
      console.warn(error);
    }

    for (const warning of result.warnings) {
      console.warn(warning);
    }
  } catch (error) {
    console.error("Build generation failed:", error);
  }

  const end = process.hrtime.bigint();
  console.info(`Build complete in ${(end - start) / BigInt(1e6)}ms`);
})();
