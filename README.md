# Best Shopify Theme Toolkit

With this toolkit, you can:

- Have the best Shopify theme development experience!
- Generate fully editable boilerplate Shopify theme.
- Locally develop themes with live reloading for instant updates.

## Technologies Used

- [Javascript/Node](https://nodejs.org/en)
- [Bun](https://bun.sh)
- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)
- [Shopify Liquid](https://shopify.dev/docs/api/liquid)
- [Scss](https://sass-lang.com/install)

## Installing Dependencies

1. Install the "LTS" version of [Node](https://nodejs.org/en)
2. If using macOS, you can install [Homebrew](https://brew.sh); Open terminal and run command below.

```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Download latest version of [Ruby](https://www.ruby-lang.org/en)
4. Install [Git](https://git-scm.com/downloads); MacOS can install with [Homebrew](https://brew.sh):

```console
brew install git
```

5. Install [Shopify CLI](https://shopify.dev/docs/themes/getting-started/create#step-1-install-shopify-cli)

**macOS (Homebrew):**

```console
brew tap shopify/shopify
brew install shopify-cli
```

**Windows and Linux (npm):**

```console
npm install -g @shopify/cli @shopify/theme
```

6. Install [Bun](https://bun.sh)

```console
curl -fsSL https://bun.sh/install | bash
```

## Folder Structure

```md
├── assets
├── cli
│   ├── .gitignore
│   ├── .npmignore
│   ├── index.js
│   ├── package.json
│   ├── README.md
├── config
├── frontend-dev
│   ├── components
│       ├── Customer-Login.Template
│       ├── Footer.Section
│       ├── Header.Section
│       ├── Hero.Section
│       ├── Test-Page.Page
│       ├── Test.Section
│       ├── Test.Snippet
│       ├── _components.scss
│   ├── entrypoints
│   ├── public
│   ├── utils
├── layout
├── locales
├── sections
├── snippets
├── templates
└── .gitignore
└── .shopifyignore
└── bun.lockb
└── index.html
└── jsconfig.json
└── package.json
└── README.md
└── scripts.js
└── vite.config.js
```
- Just create a Section, Snippet, Template or Page named folder inside of `frontend-dev/components/` ex. `File-Name.Page` or `File-Name.Template` or `File-Name.Snippet` or `File-Name.Section`.

- When you create and update a `file-name.liquid` file inside of the folder, [Bun](https://bun.sh) will automatically watch and write the files to the correct Shopify directory. 

## Get toolkit running locally

> Open your terminal and enter the following commands:

- `git clone https://github.com/kevinjmosley93/the-best-shopify-theme-toolkit .`
- `npm i`
- Open the `package.json` file, find the `start:dev` and `deploy:dev` scripts and replace content in inside of `{}`with your Store. ex. `your-store` or `your-store.myshopify.com`
***DO NOT FORGET TO REMOVE THE `{}` BEFORE SAVING THE `package.json` FILE!!**
- `npm run start:dev`
- Let the toolkit start up then navigate to [127.0.0.1:9292](http://127.0.0.1:9292) in your browser to view live theme changes


## Deploy dev theme to admin

```console
npm run deploy:dev
```

## Generate theme files from cli

```console
npm i best-shopify-theme-toolkit-cli
```

```console
touch index.js
```

```javascript
import { init } from "best-shopify-theme-toolkit-cli";

init()
  .catch((err) => console.error("Error!!", err));

```

```console
node index.js
```
