import { watch } from "fs";
import { readdir } from "fs/promises";
import { join } from "path";

async function initScripts() {
  try {
    const fileNames = await readdir("./frontend-dev/components"); // returns a JS array of just short/local file-names, not paths.
    const filePaths = fileNames.map((fn) =>
      join("./frontend-dev/components", fn)
    );

    const sections = filePaths.filter((path) => path.includes(".Section"));
    const snippets = filePaths.filter((path) => path.includes(".Snippet"));
    const templates = filePaths.filter((path) => path.includes(".Template"));
    const pages = filePaths.filter((path) => path.includes(".Page"));

    await watchFiles("sections", sections, "");
    await watchFiles("snippets", snippets, "");
    await watchFiles("templates", templates, "-template");
    await watchFiles("pages", pages, "");

    return { sections, snippets, templates, pages };
  } catch (err) {
    console.error(err); // depending on your application, this `catch` block (as-is) may be inappropriate; consider instead, either not-catching and/or re-throwing a new Error with the previous err attached.
  }
}

async function useSubString(filePath) {
  return filePath.substring(
    filePath.lastIndexOf("/") + 1,
    filePath.lastIndexOf(".")
  );
}

async function updateFiles(
  fileFolderName,
  filePath,
  fileSubString,
  alternateName
) {
  let file = Bun.file(
    `./${filePath}/${fileSubString.toLowerCase()}${
      alternateName && alternateName
    }.liquid`
  );

  Bun.write(
    `${
      fileFolderName === "snippets" ? "snippets" : "sections"
    }/${fileSubString.toLowerCase()}${alternateName && alternateName}.liquid`,
    file
  );

  if (fileFolderName === "pages") {
    const json = {
      sections: {
        template: {
          type: `${fileSubString.toLowerCase()}${
            alternateName && alternateName
          }`,
        },
      },
      order: ["template"],
    };

    Bun.write(
      `templates/page.${fileSubString.toLowerCase()}${
        alternateName && alternateName
      }.json`,
      JSON.stringify(json)
    );
  }

  console.log(
    `./${filePath}/${fileSubString.toLowerCase()}${
      alternateName && alternateName
    }.liquid file modified:`
  );
  console.log(
    `${
      fileFolderName === "snippets" ? "snippets" : "sections"
    }/${fileSubString.toLowerCase()}${
      alternateName && alternateName
    }.liquid file created:`
  );

  if (fileFolderName === "pages") {
    console.log(
      `templates/page.${fileSubString.toLowerCase()}${
        alternateName && alternateName
      }.json file created:`
    );
  }
}

async function watchFiles(folderName, filePath, alternateName) {
  filePath.forEach(async (filePath) => {
    let mySubString = await useSubString(filePath);

    watch(
      `${import.meta.dir}/${filePath}/${mySubString.toLowerCase()}${
        alternateName && alternateName
      }.liquid`,
      (event) => {
        if (event === "change") {
          updateFiles(folderName, filePath, mySubString, alternateName);
        }
      }
    );
  });
}

console.log("initScripts server.js", await initScripts());