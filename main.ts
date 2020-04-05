sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    "".charAt(0)
scene.backgroundColor()
othersprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. a a a a . . . . . . . . . . . 
. a 5 5 a 8 8 8 8 8 8 . . . . . 
. a 5 5 4 4 4 2 2 2 8 . . . . . 
. a 5 5 4 4 4 2 2 2 8 . . . . . 
. a 5 5 a 8 8 8 8 8 8 . . . . . 
. a a a a . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    othersprite.destroy()
    info.changeLifeBy(-1)
})
let dart: Sprite = null
let othersprite: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 9 8 2 8 2 8 2 8 2 8 . . 
. . 2 5 9 8 2 8 2 8 2 8 2 8 2 . 
. 2 4 5 9 8 2 8 2 8 2 8 2 8 2 . 
. 2 4 5 9 8 2 8 2 8 2 8 2 8 2 9 
. . 2 5 9 8 2 8 2 8 2 8 2 8 2 . 
. . . 2 9 8 2 8 2 8 2 8 2 8 2 . 
. . . . 9 8 2 8 2 8 2 8 2 8 . . 
. . . . . . . . 5 5 5 5 . . . . 
. . . . . . . . 5 5 5 . . . . . 
. . . . . . . . 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    othersprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 . . . . . . . . . . 
. . 3 3 6 3 3 3 3 3 3 . . . . . 
. . 3 6 6 1 1 5 5 5 3 3 3 3 . . 
. . 3 3 6 1 1 1 5 5 5 5 5 3 . . 
. . . 3 6 1 1 1 5 5 5 5 3 3 . . 
. . . 3 3 5 5 5 5 5 5 3 3 . . . 
. . . . 3 3 5 5 5 3 3 3 . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    othersprite.setVelocity(-100, 0)
    othersprite.setPosition(180, Math.randomRange(0, 120))
})
