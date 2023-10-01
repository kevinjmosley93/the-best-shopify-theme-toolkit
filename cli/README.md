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
