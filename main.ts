namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const hidden = SpriteKind.create()
    export const field = SpriteKind.create()
    export const Bar = SpriteKind.create()
    export const selector = SpriteKind.create()
    export const Feild2 = SpriteKind.create()
    export const Field3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Field3, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.slash)
    game.setGameOverMessage(false, "OH WELL...")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Feild2, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "NICE SHOT!")
    game.gameOver(true)
})
let kick3 = 0
let kick2 = 0
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let myDart2: Dart = null
let mySprite7: Sprite = null
let mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.field)
mySprite2.setScale(10, ScaleAnchor.Middle)
let mySprite3 = sprites.create(assets.image`Goal0`, SpriteKind.Goal)
mySprite3.setPosition(148, 59)
let mySprite5 = sprites.create(assets.image`Goal2`, SpriteKind.Goal)
mySprite5.setPosition(148, 59)
let mySprite = sprites.create(assets.image`fieldGoal`, SpriteKind.Goal)
mySprite.setPosition(148, 59)
let mySprite4 = sprites.create(assets.image`myImage1`, SpriteKind.Ball)
mySprite4.setPosition(55, 60)
mySprite = sprites.create(assets.image`Goal1`, SpriteKind.Goal)
mySprite.setPosition(148, 59)
let mySprite6 = sprites.create(assets.image`footballPlayer1`, SpriteKind.Player)
controller.moveSprite(mySprite6, 0, 100)
mySprite6.setStayInScreen(true)
mySprite6.setPosition(40, 56)
game.setDialogCursor(assets.image`myImage0`)
game.splash("Press \"B\" to kick ball")
let kick = 1
forever(function () {
    if (controller.B.isPressed() && kick == 1) {
        kick = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Goal)
        sprites.destroyAllSpritesOfKind(SpriteKind.Ball)
        sprites.destroyAllSpritesOfKind(SpriteKind.field)
        pause(1000)
        scene.setBackgroundImage(assets.image`myImage3`)
        mySprite7 = sprites.create(assets.image`myImage14`, SpriteKind.Goal)
        mySprite7.changeScale(-0.5, ScaleAnchor.Middle)
        mySprite7.setPosition(80, 15)
        myDart2 = darts.create(assets.image`myImage1`, SpriteKind.Player, randint(10, 150), 110)
        myDart2.controlWithArrowKeys(true)
        myDart2.setTrace(true)
        mySprite8 = sprites.create(assets.image`myImage13`, SpriteKind.Goal)
        mySprite8.changeScale(-0.5, ScaleAnchor.Middle)
        mySprite8.setPosition(80, 15)
        mySprite9 = sprites.create(assets.image`myImage2`, SpriteKind.Goal)
        mySprite9.changeScale(-0.5, ScaleAnchor.Middle)
        mySprite9.setPosition(80, 15)
        mySprite10 = sprites.create(assets.image`myImage15`, SpriteKind.Feild2)
        mySprite10.setPosition(80, 1)
        mySprite11 = sprites.create(assets.image`myImage16`, SpriteKind.Field3)
        mySprite11.setPosition(34, 1)
        mySprite11.setScale(2, ScaleAnchor.Middle)
        mySprite12 = sprites.create(assets.image`myImage16`, SpriteKind.Field3)
        mySprite12.setPosition(126, 1)
        mySprite12.setScale(2, ScaleAnchor.Middle)
        kick2 = 1
    }
})
forever(function () {
    if (kick2 == 1 && controller.B.isPressed()) {
        kick2 = 0
        myDart2.throwDart()
        kick3 = 1
    }
})
forever(function () {
    if (kick3 == 1 && controller.A.isPressed()) {
        kick3 = 0
    }
})
