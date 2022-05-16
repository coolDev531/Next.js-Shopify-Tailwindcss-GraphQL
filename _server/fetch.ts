import { Github } from "_server/_types";
import { createRouter } from "_server/settings/create-router";

export const fetchRouter = createRouter().query("github", {
  resolve: async ({}) => {
    return (
      await fetch("https://api.github.com/repos/FelixTellmann/flext.dev")
    ).json() as Promise<Github>;
  },
});
