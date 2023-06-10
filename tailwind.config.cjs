const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				theme: {
					light: "#e9e9e9",
					dark: "#030312"
				},
				freeSpeechBlue: {
					50: "#e2d7e8",
					100: "#d7c4e7",
					200: "#b8a1e3",
					300: "#8f7fdc",
					400: "#635fd1",
					500: "#454fbf",
					600: "#3044a6",
					700: "#203786",
					800: "#142862",
					900: "#0b173b",
				},
				carnelianRed: {
					50: "#e7d3ce",
					100: "#e4bdb3",
					200: "#de9282",
					300: "#d56856",
					400: "#c83f32",
					500: "#b61a1a",
					600: "#9d0d1e",
					700: "#7f0927",
					800: "#5d082c",
					900: "#380725",
				},
				springForwardYellow: {
					50: "#e8e7d2",
					100: "#e8e7ba",
					200: "#e0e58d",
					300: "#d5df64",
					400: "#cad441",
					500: "#c2c127",
					600: "#a99517",
					700: "#896210",
					800: "#64330c",
					900: "#3c1108",
				},
				poisonousPesticideGreen: {
					50: "#daebd4",
					100: "#c5edbf",
					200: "#94f098",
					300: "#6bee7e",
					400: "#47e663",
					500: "#2cd540",
					600: "#1fbb1b",
					700: "#349812",
					800: "#446f0d",
					900: "#3d4109",
				},
			},
		},
	},

	plugins: []
};

module.exports = config;
