import gl from "../context"

class Mesh {
	constructor(name) {
		const mesh = require(`../../resources/mesh/${name}.json`)
        this.vbo = gl.createBuffer()
		this.ibo = gl.createBuffer()

		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo)
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.vertices), gl.STATIC_DRAW)

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo)
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.indices), gl.STATIC_DRAW)

		gl.vertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 3 * Float32Array.BYTES_PER_ELEMENT, 0)
		gl.enableVertexAttribArray(0)

		this.indicesCount = mesh.indices.length
	}

	draw() {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo)
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo)
		gl.drawElements(gl.TRIANGLES, this.indicesCount, gl.UNSIGNED_SHORT, 0)
	}
}

export default Mesh