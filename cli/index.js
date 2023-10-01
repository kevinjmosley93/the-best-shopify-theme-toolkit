import * as p from "@clack/prompts";
import shell from "shelljs";

export async function init() {
  const group = await p.group(
    {
      name: ({ results }) =>
        p.text({
          message: "What is your name?",
          placeholder: "Kevin J",
        }),
      storeName: ({ results }) =>
        p.text({
          message: `👋🏾, Welcome ${results.name}, What is the name of your store?`,
          placeholder: "`test-theme` or `test-theme.myshopify.com`",
        }),
      themeName: ({ results }) =>
        p.text({
          message: `🤙🏾, Thanks ${results.name}, What is the name of your theme?`,
          placeholder: "First Example Theme",
        }),
      directory: ({ results }) =>
        p.text({
          message: `What directory would you like to install your files?`,
          placeholder:
            "use '.' for current directory or something like './example-folder'",
        }),
      ranScript: async ({ results }) => {
        shell.exec(`
          git clone https://github.com/kevinjmosley93/the-best-shopify-theme-toolkit ${
            results.directory
          }
          ${
            results.directory !== "." ||
            (results.directory !== "./" && "cd " + results.directory)
          }
          npm install --legacy-peer-deps
        `);

        let file = Bun.file(`${results.directory}/package.json`);

        let json = structuredClone(await file.json());

        json.name = results.themeName;

        json.scripts[
          "start:dev"
        ] = `npm run dev -- --store ${results.storeName} --live-reload full-page`;
        json.scripts[
          "deploy:dev"
        ] = `npm run dev -- --store ${results.storeName} --unpublished`;

        Bun.write(`${results.directory}/package.json`, JSON.stringify(json));

        console.log(
          `Your theme files are ready 🥳; ${
            results.directory === "."
              ? "npm run start:dev"
              : "cd " + results.directory + " && npm run start:dev"
          }`
        );
      },
    },
    {
      // On Cancel callback that wraps the group
      // So if the user cancels one of the prompts in the group this function will be called
      onCancel: ({ results }) => {
        p.cancel(
          `🛑, Sorry ${results.name} your operation was cancelled. Please re-run cli tool`
        );
        process.exit(0);
      },
    }
  );
}
await init()