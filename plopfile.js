module.exports = function (plop) {
	plop.setGenerator('page', {
		description: 'Create New Page',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Page Name'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{ dashCase name }}.vue',
				templateFile: 'plop-templates/page.vue',
				abortOnFail: true
			},
			{
				type: 'append',
				path: 'src/store/index.js',
				pattern: /sketches: \[/,
				templateFile: 'plop-templates/append-store.js'
			}
		]
	})
}
