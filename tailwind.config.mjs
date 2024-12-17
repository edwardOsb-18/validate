/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {colors:{
			primary:"#ee3c5f",
			
			secundari:"#fedf4c",
			terciario:"#7605f9",
			titulo:"#48255a"
		}},
	},
	plugins: [],
}
