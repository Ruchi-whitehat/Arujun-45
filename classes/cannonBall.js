class CannonBall {
  constructor() {
    this.ball = Bodies.circle(
      player.positionX,
      cannonLauncher1.position.y,
      40,
      { isStatic: true }
    );
    World.add(world, this.ball);
  }

  // createBall () {
  //     this.ball = Bodies.circle (
  //         player.positionX,
  //         cannonLauncher1.position.y,
  //         40,
  //         {isStatic: true}
  //     );
  //     World.add(world, this.ball);
  // }

  displayBall() {
    var ballPos = this.ball.position;
    ellipse(ballPos.x, ballPos.y, 40);
  }

  shoot(launcher) {
    var newAngle = launcher.rotation - 28;
    newAngle = newAngle * (3.14 / 180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Body.setStatic(this.ball, false);
    Body.setVelocity(this.ball, {
      x: velocity.x * (180 / 3.14),
      y: velocity.y * (180 / 3.14),
    });
  }
}
