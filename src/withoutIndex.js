import { component1 } from "./components/component1";

document.body.innerText = component1;

window.doStuff = () =>
  import("./components/component2").then(
    ({ component2 }) => (document.body.innerText += component2)
  );
