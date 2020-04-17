let dat
if(process.client) {
	dat = require('dat.gui')
}

export default {
	data() {
		return {
			settings: {
				speed: 1
			}
		}
	},
	mounted() {
		this.gui = new dat.GUI()

		this.gui.add(this.settings, 'speed', -5, 5, 0.01)
	},
	beforeDestroy() {
		this.gui.destroy()
	}
}