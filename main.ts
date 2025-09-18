controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(100, 100)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 1 3 3 3 3 3 1 2 . . . . 
    . . . 2 f 3 3 3 3 3 f 2 . . . . 
    . . . 2 3 3 3 3 3 3 3 2 . . . . 
    . . . 2 3 3 f f f 3 3 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 50
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(9)
