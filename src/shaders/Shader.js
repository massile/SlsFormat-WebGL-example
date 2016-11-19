import gl from "../context"


class Shader {
    constructor(name) {
        const vertPath = require(`../../resources/shaders/${name}.vert.glsl`)
        const fragPath = require(`../../resources/shaders/${name}.frag.glsl`)

        const vertShader = this.load(vertPath, gl.VERTEX_SHADER)
        const fragShader = this.load(fragPath, gl.FRAGMENT_SHADER)

        this.id = gl.createProgram()
        gl.attachShader(this.id, vertShader)
        gl.attachShader(this.id, fragShader)
        gl.linkProgram(this.id)
    }

    load(source, type) {
        let shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)
        if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.log("Could not compile shader " + gl.getShaderInfoLog(shader))
            return 0
        }
        return shader
    }

    use() {
        gl.useProgram(this.id)
    }
}

export default Shader