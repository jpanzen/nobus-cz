/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
				rubik: ["Rubik", "sans-serif"]
			},
			colors: {
				dark: "#2F2F2F",
				darkLight: "#2f2f2f33",
				darkMedium: "#2f2f2f80",
				starColor: "#ffd700",
				mediumBlue: "#347FB6",
				lightBlue: "#ABDBFF",
				darkBlue: "#194584",
				mediumWhite: "#ffffff80",
				lightestWhite: "#ffffff33",
				textGradient: "radial-gradient(ellipse at top, rgba(255,255,255,1) 0%, rgba(171,219,255,1) 100%);"
			},
			backgroundImage: {
				headerGradient: "radial-gradient(circle at top, rgba(52,127,182,1) 0%, rgba(25,69,132,1) 100%);",
				buttonGradient: "radial-gradient(ellipse at top, rgba(109,133,151,1) 0%, rgba(47,47,47,1) 60%);",
				notificationGradient: "linear-gradient(0deg, rgba(47,47,47,1) 0%, rgba(47,47,47,0.85) 100%)",
				contactGradient: "radial-gradient(circle at top, rgba(171,219,255,0.5) 0%, rgba(255,255,255,1) 100%)"
			}
    },
  },
  plugins: [],
}

