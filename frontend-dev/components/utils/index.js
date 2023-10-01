import { Liquid } from "liquidjs";

export default engine = new Liquid({
  root: path.resolve(__dirname, "components"), // root for layouts/includes lookup
  extname: ".liquid", // used for layouts/includes, defaults ""
});
engine
  .renderFile("hello", { name: "alice" }) // will read and render `views/hello.liquid`
  .then(console.log);
