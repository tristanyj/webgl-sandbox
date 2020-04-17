import Base from '../Base'

import * as THREE from 'three'

export default class Scene extends Base {
	constructor(opts = {}) {
		super(opts)

		this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
		this.geometry = new THREE.PlaneBufferGeometry(1, 1, 80, 80)
	}

	createMesh(opts) {
		let mesh = new THREE.Mesh(this.geometry, this.material)
		mesh.scale.set(opts.width, opts.height, opts.width / 2)

		return mesh
	}
}