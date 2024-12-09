import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: {
				800: '#0c0e18',
				DEFAULT: '#000000'
			},
			'm-violet': '#545fa7',
			'm-orange': {
				DEFAULT: '#ff6633',
				600: '#ef2907',
				700: '#c61908'
			},
			'm-beige': {
				50: '#f7f7ef',
				DEFAULT: '#efefdf',
			}, 
			'm-blue': {
				600: '#313467',
				800: '#3b4374',
				DEFAULT: '#131525',
			},
			'm-gray': {
				100: '#f0f0f0',
				200: '#e6e6e6',
				300: '#c2c2c2',
				400: '#d3d3d3',
				500: '#8e8e8e',
				600: '#2c2c2c',
				700: '#050505'
			},
			'm-gray-dark': {
				100: '#d6d6d7',
				200: '#a4a4a7',
				300: '#86868a',
				400: '#7c7c80',
				500: '#424244',
				600: '#252526',
				700: '#1b1b1c'
			}
		},
		container: {
			center: true,
			padding: '1rem'
		},
		fontFamily: {
			sans: ['geomanist', ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			xs: ['0.79rem', '1.75'],
			sm: ['0.889rem', '1.6'],
			base: ['1rem', '1.45'],
			l: ['1.125rem', '1.45'],
			xl: ['1.266rem', '1.45rem'],
			'2xl': ['1.424rem', '1.3'],
			'3xl': ['1.602rem', '1.3'],
			'4xl': ['1.802rem', '1.3'],
			'5xl': ['2.027rem', '1.1'],
			'6xl': ['2.281rem', '1.1'],
			'7xl': ['2.565rem', '1.1'],
			'8xl': ['2.885rem', '1.1'],
			'9xl': ['3.247rem', '1.1'],
			'10xl': ['3.653rem', '1'],
			'11xl': ['4.11rem', '1'],
			'12xl': ['4.623rem', '1'],
			'13xl': ['5.202rem', '1'],
			'14xl': ['5.852rem', '1'],
			'15xl': ['6.583rem', '.9'],
			'16xl': ['7.406rem', '.9'],
			'17xl': ['8.332rem', '.9'],
			'18xl': ['9.373rem', '.9'],
			'19xl': ['10.545rem', '.9'],
			'20xl': ['11.863rem', '.9'],
		},
		extend: {
			spacing: {
				'112': '26rem',
				'128': '28rem',
				'144': '30rem',
				'160': '32rem'
			}
		}
	},
	plugins: []
}
