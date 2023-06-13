class Player {
    constructor(props) {
        this.width = props.width;
        this.height = props.height;
        this.speed = props.speed;
        this.color = props.color;
        this.position = {
            x: props.position.x,
            y: props.position.y
        }
        this.velocity ={
            x : 0,
            y : 0
        }
        this.heightJump = 100
        this.gravity = 0.5
    }
    
    // AGAR LONCAT KRYBOARD ARROW UP
    //kinematic equaction physic
    //heightjump = vi ^ / (2*gravitasi)
    //vi = sqrt(2*g*h)

    // movement(direction) {
    //     // switch (direction) {
    //     //     case "ArrowUp":
    //     //         // console.log("keatas")
    //     //         this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump); //rumus agar loncat
    //     //         break;
    //     //     case "ArrowLeft":
    //     //         // console.log("ke kiri")
    //     //         this.velocity.x = -1 * this.speed
    //     //         break
    //     //     case "ArrowRight":
    //     //         // console.log("kekanan");
    //     //         this.velocity.x = 1 * this.speed
    //     //         break;

    //     //     default:
    //     //         break;
    //     }
    // }

    jump(){
        this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump)
    }
    moveLeft(){
        this.velocity.x = -1 * this.speed
    }
    moveRight(){
        this.velocity.x = 1 * this.speed
    }
    update() {

        const ground = canvas.height - this.height
        const rigtWall = canvas.width - this.width

        this.velocity.y += this.gravity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(player.position.y > ground){
            this.position.y = ground
            this.jump()
        }

        if(this.position.x < 0){
            this.velocity.x *= -1
        }

        if(this.position.x > rigtWall){
            this.velocity.x += -1
        }
    }

    create() {
        board.fillStyle = this.color;
        board.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}