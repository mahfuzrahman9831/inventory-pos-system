import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#131b2e",
        "secondary-container": "#0566d9",
        "primary-fixed-dim": "#4ae176",
        "on-primary-fixed": "#002109",
        "surface": "#0b1326",
        "inverse-surface": "#dae2fd",
        "background": "#0b1326",
        "on-tertiary-container": "#5c3800",
        "surface-container": "#171f33",
        "secondary-fixed-dim": "#adc6ff",
        "tertiary-fixed-dim": "#ffb95f",
        "surface-container-high": "#222a3d",
        "on-surface": "#dae2fd",
        "surface-container-highest": "#2d3449",
        "secondary-fixed": "#d8e2ff",
        "inverse-primary": "#006e2f",
        "on-surface-variant": "#bccbb9",
        "on-primary": "#003915",
        "on-secondary": "#002e6a",
        "primary": "#4be277",
        "on-secondary-fixed": "#001a42",
        "on-error-container": "#ffdad6",
        "surface-dim": "#0b1326",
        "tertiary": "#ffba61",
        "surface-tint": "#4ae176",
        "outline-variant": "#3d4a3d",
        "tertiary-container": "#ef9900",
        "on-tertiary-fixed-variant": "#653e00",
        "surface-bright": "#31394d",
        "primary-container": "#22c55e",
        "on-primary-fixed-variant": "#005321",
        "surface-variant": "#2d3449",
        "on-secondary-container": "#e6ecff",
        "error": "#ffb4ab",
        "on-tertiary": "#472a00",
        "outline": "#869585",
        "tertiary-fixed": "#ffddb8",
        "on-secondary-fixed-variant": "#004395",
        "primary-fixed": "#6bff8f",
        "inverse-on-surface": "#283044",
        "on-primary-container": "#004b1e",
        "surface-container-lowest": "#060e20",
        "on-error": "#690005",
        "on-tertiary-fixed": "#2a1700",
        "error-container": "#93000a",
        "on-background": "#dae2fd",
        "secondary": "#adc6ff",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1326",
        surface: "#171f33",
        primary: "#22c55e",
        "primary-container": "#4ae176",
      },
    },
  },
  plugins: [],
};

export default config;