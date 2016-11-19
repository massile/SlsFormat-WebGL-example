attribute vec3 position;

uniform mat4 pr_matrix;
uniform mat4 vw_matrix;

void main()
{
    gl_Position = pr_matrix * vw_matrix * vec4(position, 1.0);
}