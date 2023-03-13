import { defineMermaidSetup } from "@slidev/types";

export default defineMermaidSetup(() => {
  return {
    theme: "base",
    themeVariables: {
      //fontFamily: "Helvetica Neue",
      primaryBorderColor: "#444450",

      nodeBorder: "#444450",

      actorBkg: "#0E131F",
      actorBorder: "#444450",
      actorTextColor: "#F3EFF5",
      actorLineColor: "#F3EFF5",
      signalColor: "#F3EFF5",
      signalTextColor: "#F3EFF5",
    },
  };
});
