async function run() {
  const { execa } = await import("execa");

  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Building...");

    await execa("npm", ["run", "build"]);

    await execa("git", ["--work-tree", "dist", "add", "--all"]);
    await execa("git", ["--work-tree", "dist", "commit", "-m", "gh-pages build"]);

    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);

    console.log("Remove dist directory");
    await execa("rm", ["-r", "dist"]);
    await execa("git", ["checkout", "-f", "master"]);

    console.log("Remove gh-pages branch");
    await execa("git", ["branch", "-D", "gh-pages"]);

    console.log("Successfully deployed");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

run();
