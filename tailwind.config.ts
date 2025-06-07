import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".fa-sun-cloud": {
          "--fa": '"\\f763"',
          "--fa--fa": '"\\f763\\f763"'
        },
        ".fa-sm": {
          fontSize: ".875em",
          lineHeight: ".07143em",
          verticalAlign: ".05357em"
        }
      };
      
      addUtilities(newUtilities, ["dark"]);
    })
  ]
};

export default config;
