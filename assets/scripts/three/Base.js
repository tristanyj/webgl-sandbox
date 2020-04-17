import * as THREE from 'three'
const OrbitControls = require('three-orbit-controls')(THREE)

export default class Base {
	constructor(opts = {}) {
		this.DOM = opts.DOM || {}
		this.isControl = opts.isControl || false

		this.size = {
			width: window.innerWidth,
			height: window.innerHeight
		}

		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera(75, this.size.width / this.size.height, 0.1, 1000)
		if(this.isControl) this.controls = new OrbitControls(this.camera)

		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
		this.renderer.setPixelRatio(window.devicePixelRatio)
		this.renderer.setSize(this.size.width, this.size.height)
		this.renderer.sortObjects = false

		this.DOM.container.appendChild(this.renderer.domElement)

		this.cameraDistance = 400
		this.camera.position.set(0, 0, this.cameraDistance)
		this.camera.lookAt(0, 0, 0)
		this.camera.aspect = this.size.width / this.size.height
		this.camera.fov = 2 * Math.atan(this.size.width / this.camera.aspect / (2 * this.cameraDistance)) * (180 / Math.PI)
		this.camera.updateProjectionMatrix()

		// this.customPass.uniforms.resolution.value.y = this.height / this.width;
	}

	render() {
		this.renderer.render(this.scene, this.camera)
	}
}


