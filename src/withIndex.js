import { component1 } from "./components";

document.body.innerText = component1;

window.doStuff = () =>
  import("./components").then(
    ({ component2 }) => (document.body.innerText += component2)
  );
