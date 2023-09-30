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
    await watchSections(sections);
    await watchSnippets(snippets);

    // console.log("section", sectionFiles);
    return { sections, snippets };
  } catch (err) {
    console.error(err); // depending on your application, this `catch` block (as-is) may be inappropriate; consider instead, either not-catching and/or re-throwing a new Error with the previous err attached.
  }
}

async function watchSections(sections) {
  sections.forEach((section) => {
    var mySubString = section.substring(
      section.lastIndexOf("/") + 1,
      section.lastIndexOf(".")
    );

    watch(
      `${import.meta.dir}/${section}/${mySubString.toLowerCase()}.liquid`,
      (event) => {
        if (event === "change") {
          updateSectionFiles(section, mySubString);
        }
      }
    );
  });
}
async function watchSnippets(snippets) {
  snippets.forEach((snippet) => {
    var mySubString = snippet.substring(
      snippet.lastIndexOf("/") + 1,
      snippet.lastIndexOf(".")
    );

    watch(
      `${import.meta.dir}/${snippet}/${mySubString.toLowerCase()}.liquid`,
      (event) => {
        if (event === "change") {
          updateSnippetFiles(snippet, mySubString);
        }
      }
    );
  });
}

async function updateSectionFiles(section, mySubString) {
  let file = Bun.file(`./${section}/${mySubString.toLowerCase()}.liquid`);

  Bun.write(`./sections/${mySubString.toLowerCase()}.liquid`, file);

  console.log(`${section}/${mySubString.toLowerCase()}.liquid file modified:`);
  console.log(`sections/${mySubString.toLowerCase()}.liquid file created:`);
}

async function updateSnippetFiles(snippet, mySubString) {
  let file = Bun.file(`./${snippet}/${mySubString.toLowerCase()}.liquid`);

  Bun.write(`./snippets/${mySubString.toLowerCase()}.liquid`, file);

  console.log(`${snippet}/${mySubString.toLowerCase()}.liquid file modified:`);
  console.log(`snippets/${mySubString.toLowerCase()}.liquid file created:`);
}

console.log("initScripts server.js", await initScripts());
