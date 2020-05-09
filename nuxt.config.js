require('dotenv').config()

const logger = require('consola').withScope('nuxt')

const config = async () => {
	const meta = [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: 'Sandbox for WebGL and GLSL experiments' }
	]

	const link = [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
		{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
		{ rel: 'manifest', href: '/site.webmanifest' },
		{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
	]

	const script = [
		{ src: 'https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js' }
	]

	return {
		mode: 'universal',

		head: {
			title: 'WebGL Sandbox', meta, link, script
		},

		/*
		 ** Customize the progress-bar color
		 */
		loading: { color: '#ffffff' },

		/*
		 ** Global CSS
		 */
		css: [
			'~/assets/styles/core/fonts.css',
			'~/assets/styles/core/tailwind.css',
			'~/assets/styles/core/global.css'
		],

		/*
		 ** Global variables & mixins
		 */
		styleResources: {
			stylus: ['~/assets/styles/mixins/index.styl']
		},

		/*
		 ** Tailwind configuration
		 */
		tailwindcss: {
			configPath: '../tailwind.config.js',
			cssPath: '~/assets/styles/core/tailwind.css',
			exposeConfig: true
		},

		/*
		 ** Color mode configuration
		 */
		colorMode: {
			preference: 'system',
			fallback: 'dark',
			componentName: 'color-scheme'
		},

		/*
		 ** Plugins to load before mounting the App
		 */
		plugins: [
			{ src: '~/plugins/vuex-persist', mode: 'client' }
		],

		/*
		 ** Nuxt.js modules
		 */
		modules: [
			'@nuxtjs/robots',
			'@nuxtjs/device',
		],

		/*
		 ** Nuxt.js build modules
		 */
		buildModules: [
			'@aceforth/nuxt-optimized-images',
			'@aceforth/nuxt-netlify',
			'@teamnovu/nuxt-breaky',
			'@nuxtjs/sitemap',
			'@nuxtjs/style-resources',
			'@nuxtjs/tailwindcss',
			'@nuxtjs/color-mode',
			'@nuxtjs/global-components',
			'@nuxtjs/gtm',
		],

		/*
		 ** Nuxt.js image optimization configuration
		 */
		optimizedImages: {
			optimizeImages: true
		},

		/*
		 ** Netlify headers and redirects
		 */
		netlify: {
			header: {},
			redirects: []
		},

		/*
		 ** Google tag manager configuration
		 */
		gtm: {
			dev: process.env.NODE_ENV !== 'development',
			pageTracking: true,
			id: process.env.GTM_ID
		},

		/*
		 ** Sitemap generation configuration
		 */
		sitemap: {
			hostname: process.env.SITE_URL,
			gzip: true
		},

		/*
		 ** Source directory
		 */
		srcDir: 'src/',

		/*
		 ** Production base directory
		 */
		router: {
			base: '/'
		},

		/*
		 ** Build configuration
		 */
		build: {
			/*
			 ** You can extend webpack config here
			 */
			extend(config, ctx) {
				config.resolve.alias['vue'] = 'vue/dist/vue.common'
			}
		},

		/*
		 ** Generate configuration
		 */
		generate: {
			fallback: true
			// Netlify reads a 404.html, Nuxt will load as an SPA
			// fallback: '404.html'
		}
	}
}

export default config
