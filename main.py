@namespace
class SpriteKind:
    Goal = SpriteKind.create()
    Ball = SpriteKind.create()
    hidden = SpriteKind.create()
    field = SpriteKind.create()
    Bar = SpriteKind.create()
    selector = SpriteKind.create()
    Feild2 = SpriteKind.create()
    Field3 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    game.set_game_over_effect(False, effects.slash)
    game.set_game_over_message(False, "OH WELL...")
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.Field3, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    game.set_game_over_effect(True, effects.confetti)
    game.set_game_over_message(True, "NICE SHOT!")
    game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.Feild2, on_on_overlap2)

kick3 = 0
kick2 = 0
mySprite12: Sprite = None
mySprite11: Sprite = None
mySprite10: Sprite = None
mySprite9: Sprite = None
mySprite8: Sprite = None
myDart2: Dart = None
mySprite7: Sprite = None
mySprite2 = sprites.create(assets.image("""
    myImage
"""), SpriteKind.field)
mySprite2.set_scale(10, ScaleAnchor.MIDDLE)
mySprite3 = sprites.create(assets.image("""
    Goal0
"""), SpriteKind.Goal)
mySprite3.set_position(148, 59)
mySprite5 = sprites.create(assets.image("""
    Goal2
"""), SpriteKind.Goal)
mySprite5.set_position(148, 59)
mySprite = sprites.create(assets.image("""
    fieldGoal
"""), SpriteKind.Goal)
mySprite.set_position(148, 59)
mySprite4 = sprites.create(assets.image("""
    myImage1
"""), SpriteKind.Ball)
mySprite4.set_position(55, 60)
mySprite = sprites.create(assets.image("""
    Goal1
"""), SpriteKind.Goal)
mySprite.set_position(148, 59)
mySprite6 = sprites.create(assets.image("""
    footballPlayer1
"""), SpriteKind.player)
controller.move_sprite(mySprite6, 41, 41)
mySprite6.set_stay_in_screen(True)
mySprite6.set_position(21, 56)
game.set_dialog_cursor(assets.image("""
    myImage0
"""))
game.splash("Press \"B\" to kick ball")
kick = 1

def on_forever():
    global kick, mySprite7, myDart2, mySprite8, mySprite9, mySprite10, mySprite11, mySprite12, kick2
    if controller.B.is_pressed() and kick == 1:
        kick = 0
        sprites.destroy_all_sprites_of_kind(SpriteKind.player)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Goal)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Ball)
        sprites.destroy_all_sprites_of_kind(SpriteKind.field)
        pause(1000)
        scene.set_background_image(assets.image("""
            myImage3
        """))
        mySprite7 = sprites.create(assets.image("""
            myImage14
        """), SpriteKind.Goal)
        mySprite7.change_scale(-0.5, ScaleAnchor.MIDDLE)
        mySprite7.set_position(80, 15)
        myDart2 = darts.create(assets.image("""
                myImage1
            """),
            SpriteKind.player,
            randint(10, 150),
            110)
        myDart2.control_with_arrow_keys(True)
        myDart2.set_trace(True)
        mySprite8 = sprites.create(assets.image("""
            myImage13
        """), SpriteKind.Goal)
        mySprite8.change_scale(-0.5, ScaleAnchor.MIDDLE)
        mySprite8.set_position(80, 15)
        mySprite9 = sprites.create(assets.image("""
            myImage2
        """), SpriteKind.Goal)
        mySprite9.change_scale(-0.5, ScaleAnchor.MIDDLE)
        mySprite9.set_position(80, 15)
        mySprite10 = sprites.create(assets.image("""
            myImage15
        """), SpriteKind.Feild2)
        mySprite10.set_position(80, 1)
        mySprite11 = sprites.create(assets.image("""
            myImage16
        """), SpriteKind.Field3)
        mySprite11.set_position(34, 1)
        mySprite11.set_scale(2, ScaleAnchor.MIDDLE)
        mySprite12 = sprites.create(assets.image("""
            myImage16
        """), SpriteKind.Field3)
        mySprite12.set_position(126, 1)
        mySprite12.set_scale(2, ScaleAnchor.MIDDLE)
        kick2 = 1
forever(on_forever)

def on_forever2():
    global kick2, kick3
    if kick2 == 1 and controller.B.is_pressed():
        kick2 = 0
        myDart2.throw_dart()
        kick3 = 1
forever(on_forever2)

def on_forever3():
    global kick3
    if kick3 == 1 and controller.A.is_pressed():
        kick3 = 0
forever(on_forever3)
