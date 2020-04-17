import Stats from 'stats.js'

export default {
	mounted() {
		this.stats = new Stats()
		this.stats.showPanel(1)
		this.stats.showPanel(2)
		this.stats.showPanel(0)

		this.stats.dom.style.top = 'initial'
		this.stats.dom.style.left = 'initial'
		this.stats.dom.style.right = 0
		this.stats.dom.style.bottom = 0

		Array.from(this.stats.dom.querySelectorAll('canvas')).map(el => {
			el.style.top = 'initial'
			el.style.left = 'initial'
			el.style.right = 0
			el.style.bottom = 0
		})

		document.body.appendChild(this.stats.dom)
	}
}