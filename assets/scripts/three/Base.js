import * as THREE from 'three'
const OrbitControls = require('three-orbit-controls')(THREE)

export default class Base {
	constructor(opts = {}) {
		this.DOM = opts.DOM ? opts.DOM : {}
		this.fullscreen = opts.fullscreen

		this.size = {
			width: this.fullscreen ? window.innerWidth : this.DOM.container.getBoundingClientRect().width,
			height: this.fullscreen ? window.innerHeight : this.DOM.container.getBoundingClientRect().height
		}

		this.init()
	}

	init() {
		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera(75, this.size.width / this.size.height, 0.1, 1000)
		this.controls = new OrbitControls(this.camera)

		this.renderer = new THREE.WebGLRenderer()
		this.renderer.setSize(this.size.width, this.size.height)
		this.DOM.container.appendChild(this.renderer.domElement)

		this.geometry = new THREE.BoxGeometry(1, 1, 1)
		this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
		this.cube = new THREE.Mesh(this.geometry, this.material)
		this.scene.add(this.cube)

		this.camera.position.z = 5

		this.render()
	}

	render() {
		window.requestAnimationFrame(() => { this.render() })

		this.cube.rotation.x += 0.01
		this.cube.rotation.y += 0.01

		this.renderer.render(this.scene, this.camera)
	}
}


