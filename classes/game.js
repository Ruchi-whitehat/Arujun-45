class Game {
  constructor() {
    this.button = createButton("RESET")
      .position(width / 2 + 400, height / 2 + -200)
      .class("customButton");

    this.wall = Bodies.rectangle(width / 2, height / 2, width, height, {
      isStatic: true,
    });

    this.ballCreated = false;
    this.shot = false;
  }

  trackState() {
    var stateRef = firebase.ref("gameState");
    stateRef.on("value", (data) => {
      gameState = data.val();
    });
  }

  initializeGame() {
    player = new Player();
    this.trackState();
    player.trackPlayerCount();

    if (playerCount < 2) {
      form = new Form();
      form.buttonClicked();
    } else {
      var sorryMessage = createElement("h6")
        .html(
          `Sorry, two players have already joined the session</br>
                    please join the session later`
        )
        .position(width / 2 - 500, height / 2 - 100)
        .class("greeting");
    }

    // setup references before entering form
  }

  gameStart() {
    console.log(player.index);
    //  player.hideMessage();
    form.greeting.hide();

    if (player.index == 1) {
      castle1 = createSprite(player.positionX + 60, height - 195);
      castle1.addImage(castle1Broken_Img);
      castle1.scale = 0.37;

      castleDP_1 = createSprite(player.positionX + 182.5, height - 101.5);
      castleDP_1.addImage(castle1DP_Img);
      castleDP_1.scale = 0.37;

      castleMP_1 = createSprite(player.positionX + 148, height - 244.5);
      castleMP_1.addImage(castle1MP_Img);
      castleMP_1.scale = 0.37;

      castleUP_1 = createSprite(player.positionX + 83.1, height - 314.8);
      castleUP_1.addImage(castle1UP_Img);
      castleUP_1.scale = 0.37;

      cannonKart1 = createSprite(player.positionX, height - 40);
      cannonKart1.addImage(cannonKart1_Img);
      cannonKart1.scale = 0.085;

      cannonLauncher1 = createSprite(player.positionX, height - 70);
      cannonLauncher1.addImage(cannonLauncher1_Img);
      cannonLauncher1.scale = 0.085;

      castle2 = createSprite(width - 185, height - 195);
      castle2.addImage(castle2Broken_Img);
      castle2.scale = 0.37;

      castleDP_2 = createSprite(width - 307, height - 101.75);
      castleDP_2.addImage(castle2DP_Img);
      castleDP_2.scale = 0.37;

      castleMP_2 = createSprite(width - 273, height - 245);
      castleMP_2.addImage(castle2MP_Img);
      castleMP_2.scale = 0.37;

      castleUP_2 = createSprite(width - 208.1, height - 314.8);
      castleUP_2.addImage(castle2UP_Img);
      castleUP_2.scale = 0.37;

      cannonKart2 = createSprite(width - 160, height - 40);
      cannonKart2.addImage(cannonKart2_Img);
      cannonKart2.scale = 0.085;

      cannonLauncher2 = createSprite(width - 160, height - 70);
      cannonLauncher2.addImage(cannonLauncher2_Img);
      cannonLauncher2.scale = 0.085;
    } else {
      castle2 = createSprite(player.positionX - 25, height - 195);
      castle2.addImage(castle2Broken_Img);
      castle2.scale = 0.37;

      castleDP_2 = createSprite(player.positionX - 147, height - 101.75);
      castleDP_2.addImage(castle2DP_Img);
      castleDP_2.scale = 0.37;

      castleMP_2 = createSprite(player.positionX - 113, height - 245);
      castleMP_2.addImage(castle2MP_Img);
      castleMP_2.scale = 0.37;

      castleUP_2 = createSprite(player.positionX - 48.1, height - 314.8);
      castleUP_2.addImage(castle2UP_Img);
      castleUP_2.scale = 0.37;

      cannonKart2 = createSprite(player.positionX, height - 40);
      cannonKart2.addImage(cannonKart2_Img);
      cannonKart2.scale = 0.085;

      cannonLauncher2 = createSprite(player.positionX, height - 70);
      cannonLauncher2.addImage(cannonLauncher2_Img);
      cannonLauncher2.scale = 0.085;

      var castlePx = Math.round(width / 3 - 300);

      castle1 = createSprite(castlePx + 60, height - 195);
      castle1.addImage(castle1Broken_Img);
      castle1.scale = 0.37;

      castleDP_1 = createSprite(castlePx + 182.5, height - 101.5);
      castleDP_1.addImage(castle1DP_Img);
      castleDP_1.scale = 0.37;

      castleMP_1 = createSprite(castlePx + 148, height - 244.5);
      castleMP_1.addImage(castle1MP_Img);
      castleMP_1.scale = 0.37;

      castleUP_1 = createSprite(castlePx + 83.1, height - 314.8);
      castleUP_1.addImage(castle1UP_Img);
      castleUP_1.scale = 0.37;

      cannonKart1 = createSprite(castlePx, height - 40);
      cannonKart1.addImage(cannonKart1_Img);
      cannonKart1.scale = 0.085;

      cannonLauncher1 = createSprite(castlePx, height - 70);
      cannonLauncher1.addImage(cannonLauncher1_Img);
      cannonLauncher1.scale = 0.085;
    }
    //cannonBall = new CannonBall();
  }

  play() {
    imageMode(CENTER);
    image(testBackground_1Img, width / 2, height / 2, width, height);

    if (player.index == 1) {
      if (!keyDown("space")) {
        if (keyDown(RIGHT_ARROW)) {
          cannonKart1.position.x += 1;
          cannonLauncher1.position.x += 1;

          if (cannonKart1.position.x > width / 2) {
            cannonKart1.position.x -= 50;
            cannonLauncher1.position.x -= 50;
          }
        } else if (keyDown(LEFT_ARROW)) {
          cannonKart1.position.x -= 1;
          cannonLauncher1.position.x -= 1;

          if (cannonKart1.position.x < 0) {
            cannonKart1.position.x += 50;
            cannonLauncher1.position.x += 50;
          }
        }

        player.positionX = cannonKart1.position.x;
        this.writePosition();
        this.readPosition(cannonKart2, cannonLauncher2);

        if (keyDown(UP_ARROW) && cannonLauncher1.rotation > -45) {
          cannonLauncher1.rotation -= 2;
        } else if (keyDown(DOWN_ARROW) && cannonLauncher1.rotation < 45) {
          cannonLauncher1.rotation += 2;
        }

        this.writeAngle(cannonLauncher1.rotation);
        this.readAngle(cannonLauncher2);
      } else if (keyDown("space")) {
        if (!this.ballCreated) {
          //cannonBall.createBall();
          cannonBall = new CannonBall();
          this.ballCreated = true;
        }
        if (!this.shot) {
          cannonBall.shoot(cannonLauncher1);
          console.log(cannonBall.ball.velocity);
          this.shot = true;
        }
      }

      if (this.ballCreated) {
        cannonBall.displayBall();
      }
    } else if (player.index == 2) {
      if (!keyDown("space")) {
        if (keyDown(RIGHT_ARROW)) {
          cannonKart2.position.x += 1;
          cannonLauncher2.position.x += 1;

          if (cannonKart2.position.x > width) {
            cannonKart2.position.x -= 50;
            cannonLauncher2.position.x -= 50;
          }
        } else if (keyDown(LEFT_ARROW)) {
          cannonKart2.position.x -= 1;
          cannonLauncher2.position.x -= 1;

          if (cannonKart2.position.x < width / 2) {
            cannonKart2.position.x += 50;
            cannonLauncher2.position.x += 50;
          }
        }

        player.positionX = cannonKart2.position.x;
        this.writePosition();
        this.readPosition(cannonKart1, cannonLauncher1);

        if (keyDown(UP_ARROW) && cannonLauncher2.rotation < 45) {
          cannonLauncher2.rotation += 2;
        } else if (keyDown(DOWN_ARROW) && cannonLauncher2.rotation > -45) {
          cannonLauncher2.rotation -= 2;
        }

        this.writeAngle(cannonLauncher2.rotation);
        this.readAngle(cannonLauncher1);
      }
    }
  }

  writePosition() {
    firebase.ref(`players/player${player.index}`).update({
      positionX: player.positionX,
    });
  }

  readPosition(kart, launcher) {
    firebase
      .ref(`players/player${player.opponentIndex}/positionX`)
      .on("value", (data) => {
        kart.position.x = data.val();
        launcher.position.x = data.val();
      });
  }

  writeAngle(angle) {
    firebase.ref(`players/player${player.index}`).update({
      angle: angle,
    });
  }

  readAngle(launcher) {
    firebase
      .ref(`players/player${player.opponentIndex}/angle`)
      .on("value", (data) => {
        launcher.rotation = data.val();
      });
  }

  reset() {
    this.button.mouseClicked(() => {
      firebase.ref("/").set({
        players: {},
        playerCount: 0,
        gameState: 0,
        messages: {},
      });
      window.location.reload();
    });
  }
}
