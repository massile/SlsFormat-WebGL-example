import Shader from "shaders/Shader"

const shader = new Shader("shader")

shader.use()
shader.uniform1f("test", 0.5)
console.log(shader.uniforms)