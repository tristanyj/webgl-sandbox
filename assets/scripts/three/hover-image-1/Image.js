export default class Image {
	constructor(el, canvas) {
		this.DOM = { el }
		this.src = el.src
		// this.animated = false
		// this.isBeingAnimatedNow = false
		// this.shouldRollBack = false
		// this.shouldUnRoll = false
		// this.positions = []
		this.getSize()



		const options = {
			width: this.width,
			height: this.height,
			src: this.src,
			image: this.DOM.el,
			iWidth: this.DOM.el.width,
			iHeight: this.DOM.el.height
		}
		this.mesh = canvas.createMesh(options)
		canvas.scene.add(this.mesh)





		// this.intersectionRatio
		// let options = {
		// 	root: null,
		// 	rootMargin: "0px",
		// 	threshold: [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
		// };
		// this.observer = new IntersectionObserver(entries => {
		// 	entries.forEach(entry => {
		// 	this.positions.push(entry.boundingClientRect.y);
		// 	let compareArray = this.positions.slice(
		// 		this.positions.length - 2,
		// 		this.positions.length
		// 	);
		// 	let down = compareArray[0] > compareArray[1] ? true : false;

		// 	this.isVisible = entry.intersectionRatio > 0.0;

		// 	this.shouldRollBack = false;
		// 	this.shouldUnRoll = false;
		// 	if (
		// 		entry.intersectionRatio < 0.5 &&
		// 		entry.boundingClientRect.y > 0 &&
		// 		this.isVisible &&
		// 		!down
		// 	) {
		// 		this.shouldRollBack = true;
		// 	}

		// 	if (
		// 		entry.intersectionRatio > 0.5 &&
		// 		entry.boundingClientRect.y > 0 &&
		// 		this.isVisible
		// 	) {
		// 		this.shouldUnRoll = true;
		// 	}
		// 	console.log(this.isVisible,'vis');
		// 	this.mesh.visible = this.isVisible;
		// 	})
		// }, options)
		// this.observer.observe(this.DOM.el)

		this.winsize = {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}

	getSize() {
		const rect = this.DOM.el.getBoundingClientRect()

		const withoutHeight = rect.top - window.innerHeight
		const withHeight = rect.top + rect.height

		this.insideTop = withoutHeight - window.scrollY
		this.insideRealTop = rect.top + window.scrollY
		this.insideBottom = withHeight - window.scrollY + 50

		this.width = rect.width
		this.height = rect.height
		this.left = rect.left
	}


	render() {
	  this.mesh.position.y = window.scrollY + this.winsize.height / 2 - this.insideRealTop - this.height / 2
	  this.mesh.position.x = 0 - this.winsize.width / 2 + this.left + this.width / 2
	}
}