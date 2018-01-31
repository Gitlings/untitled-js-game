function Game(canvas) {
    const game = this;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const fieldColor = '#4c002f';
    const squareColor = '#3e01bf';

    let squareX = 20;
    let squareY = 20;
    let squareSpeed = 5;

    this.draw = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = fieldColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = squareColor;
        ctx.fillRect(squareX, squareY, 50, 50);
    };

    this.keyDown = function(event) {
        const keyCode = event.keyCode;
        switch (keyCode) {
            case 37:
                squareX -= squareSpeed;
                break;
            case 38:
                squareY -= squareSpeed;
                break;
            case 39:
                squareX += squareSpeed;
                break;
            case 40:
                squareY += squareSpeed;
                break;
        }

        game.draw();
    };
}

const game = new Game(document.getElementById('canvas'));
game.draw();
document.body.addEventListener('keydown', game.keyDown);
