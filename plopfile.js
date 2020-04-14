module.exports = function (plop) {
	plop.setGenerator('page', {
		description: 'Create New Page',
		prompts: [
			{
				name: 'name',
				message: 'Page Name'
			},
			{
				type: 'confirm',
				name: 'full',
				message: 'Full Page'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'pages/{{ dashCase name }}.vue',
				templateFile: 'plop-templates/page.vue',
				abortOnFail: true
			},
			{
				type: 'append',
				path: 'store/index.js',
				pattern: /sketches: \[/,
				templateFile: 'plop-templates/append-store.js'
			}
		]
	})
}
