scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (invincible_time == 0) {
        info.changeLifeBy(-1)
    }
    invincible_time = 15
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (invincible_time == 0) {
        info.changeLifeBy(-3)
    }
    invincible_time = 15
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -300
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(true, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (invincible_time == 0) {
        info.changeLifeBy(-3)
    }
    invincible_time = 15
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (invincible_time == 0) {
        info.changeLifeBy(-3)
    }
    invincible_time = 15
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.setLife(4)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (invincible_time == 0) {
        info.changeLifeBy(-3)
    }
    invincible_time = 15
})
let invincible_time = 0
let mySprite: Sprite = null
info.setLife(4)
mySprite = sprites.create(img`
    e e e e . . . . . . . . e e e e 
    e d d d e e e e e e e e d d d e 
    e d d d d d d d d d d d d d d e 
    e d d d d d d d d d d d d d d e 
    . e d d d d d d d d d d d d e . 
    . e d d d f d d d d f d d d e . 
    . e d d d d d d d d d d d d e . 
    . e d d d d d d d d d d d d e . 
    . e d d d d d d d d d d d d e . 
    . e d d f d d d d d d f d d e . 
    . e d d d f f f f f f d d d e . 
    . e d d d d d d d d d d d d e . 
    . e d d d d d d d d d d d d e . 
    . e d d d d d d d d d d d d e . 
    . e d d d d d d d d d d d d e . 
    . e e e e e e e e e e e e e e . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 500
game.onUpdate(function () {
    if (invincible_time > 0) {
        invincible_time += -1
    }
})
game.onUpdate(function () {
    if (mySprite.vx > 0 && !(controller.right.isPressed())) {
        mySprite.vx += -15
    } else if (mySprite.vx < 0 && !(controller.left.isPressed())) {
        mySprite.vx += 15
    }
})
