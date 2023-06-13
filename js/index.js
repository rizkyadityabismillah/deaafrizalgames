const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d")

canvas.width = DISPLAY_PIXEL.WIDTH * ASPEC_RATIO.WIDTH;
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPEC_RATIO.HEIGHT;


const propertyPlayer = {
    width: 50,
    height: 50,
    speed: 6,
    color: "tomato",
    position: {
        x: 0, // jika minus ke kiri jika plus kanan
        y: 0 // minus atas plus ke bawah
    }
}

const enemyPlayer = {
    width: 50,
    height: 50,
    speed: 1,
    color: "black",
    position: {
        x: canvas.width - 50,
        y: canvas.height - 50
    }
}

const ground = new Ground('./src/img/bg.jpg', canvas.width, canvas.height);
const player = new Player(propertyPlayer);
const enemy = new Player(enemyPlayer)


function animate() {
    ground.create();
    player.create();
    enemy.create();


    player.update();

    window.requestAnimationFrame(animate)
}

window.addEventListener("keydown", function (callback) {
    switch (callback.key) {
        case "ArrowUp":
            // console.log("keatas")
            player.jump()
            break;
        case "ArrowLeft":
            // console.log("ke kiri")
            player.moveLeft()
            break
        case "ArrowRight":
           player.moveRight()
            break;

        default:
            break
}
})

animate()