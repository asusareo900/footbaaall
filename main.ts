namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const hidden = SpriteKind.create()
    export const field = SpriteKind.create()
    export const Bar = SpriteKind.create()
    export const selector = SpriteKind.create()
}
/**
 * use the overlap triggers to make the power bar work
 */
let kick5 = 0
let mySprite12: Sprite = null
let kick4 = 0
let red: Sprite = null
let orange: Sprite = null
let yellow: Sprite = null
let green: Sprite = null
let kick3 = 0
let kick2 = 0
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite7: Sprite = null
let mySprite8: Sprite = null
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
        mySprite8 = sprites.create(assets.image`myImage3`, SpriteKind.field)
        mySprite8.changeScale(10, ScaleAnchor.Middle)
        mySprite7 = sprites.create(assets.image`myImage2`, SpriteKind.Goal)
        mySprite7.changeScale(-0.5, ScaleAnchor.Middle)
        mySprite7.setPosition(80, 15)
        mySprite9 = sprites.create(assets.image`myImage1`, SpriteKind.Ball)
        mySprite9.setPosition(80, 103)
        mySprite10 = sprites.create(assets.image`myImage4`, SpriteKind.Bar)
        mySprite10.setPosition(80, 78)
        mySprite10.setScale(4.8, ScaleAnchor.Middle)
        pause(100)
        mySprite9.setVelocity(100, 0)
        mySprite9.setBounceOnWall(true)
        kick2 = 1
    }
})
forever(function () {
    if (controller.B.isPressed() && kick2 == 1) {
        kick2 = 0
        mySprite9.setVelocity(0, 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Bar)
        kick3 = 1
    }
})
forever(function () {
    if (controller.B.isPressed() && kick3 == 1) {
        kick3 = 0
        green = sprites.create(assets.image`myImage7`, SpriteKind.Bar)
        green.setScale(4.3, ScaleAnchor.Middle)
        green.setPosition(13, 60)
        yellow = sprites.create(assets.image`myImage8`, SpriteKind.Bar)
        yellow.setScale(4.3, ScaleAnchor.Middle)
        yellow.setPosition(13, 60)
        orange = sprites.create(assets.image`myImage9`, SpriteKind.Bar)
        orange.setScale(4.3, ScaleAnchor.Middle)
        orange.setPosition(13, 60)
        red = sprites.create(assets.image`myImage10`, SpriteKind.Bar)
        red.setScale(4.3, ScaleAnchor.Middle)
        red.setPosition(13, 60)
        kick4 = 1
    }
    if (controller.B.isPressed() && kick4 == 1) {
        kick4 = 0
        mySprite12 = sprites.create(assets.image`myImage6`, SpriteKind.selector)
        mySprite12.setScale(0.5, ScaleAnchor.Middle)
        mySprite12.setPosition(13, 60)
        mySprite12.setVelocity(0, 100)
        mySprite12.setBounceOnWall(true)
        kick5 = 1
    }
    pause(100)
    if (controller.B.isPressed() && kick5 == 1) {
        kick5 = 0
        mySprite12.setVelocity(0, 0)
    }
})
