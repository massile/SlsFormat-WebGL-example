import Shader from "shaders/Shader"
import gl from "./context"
import Mesh from "graphics/Mesh"

const shader = new Shader("shader")
const plane = new Mesh("plane")

shader.use()

gl.clearColor(0, 0, 0, 1)
const render = () => {
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

	plane.draw()	

	gl.flush()
	window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)