/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./src/**/*.{ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				'custom-blue-dark': '#1E6F9F',
				'custom-blue': '#4EA8DE',
				'custom-purple-dark': '#5E60CE',
				'custom-purple': '#8284FA',

				'custom-gray-900': '#0D0D0D',
				'custom-gray-800': '#1A1A1A',
				'custom-gray-700': '#262626',
				'custom-gray-600': '#333333',
				'custom-gray-500': '#808080',
				'custom-gray-400': '#D9D9D9',
				'custom-gray-300': '#F2F2F2',
				'custom-gray-200': '#F2F2F2',
				'custom-gray-100': '#F2F2F2',

				'custom-danger': '#E25858',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
