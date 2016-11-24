let gl;

try {
    const canvas = document.getElementById("app");
    canvas.width = window.innerWidth-5;
    canvas.height = window.innerHeight-5;
    gl = canvas.getContext("experimental-webgl", {antialias: true});
} catch (e) {
    alert("Your web browser does not support WebGL :(");
}

export default gl;