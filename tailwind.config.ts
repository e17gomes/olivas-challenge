import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Ybutton: "rgba(198, 185, 45, 1)",
        menu_gray: "rgba(127, 127, 127, 1)",
        title_gray: "rgba(93, 93, 93, 1)",
        icons_color:"rgba(106, 15, 101, 1)",
        circle_session: "rgba(159, 147, 22, 1)"

      },
      
    },
  },
  plugins: [
  ],
};
export default config;
