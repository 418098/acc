input.onGesture(Gesture.LogoUp, function () {
    sprite.set(LedSpriteProperty.Direction, 0)
    sprite.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.set(LedSpriteProperty.Direction, 180)
    sprite.move(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.set(LedSpriteProperty.Direction, 270)
    sprite.move(1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.set(LedSpriteProperty.Direction, 90)
    sprite.move(1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(randint(0, 4), randint(0, 4))
let led2 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (sprite.isTouching(led2)) {
        game.addScore(1)
        led2.delete()
        sprite.delete()
        sprite = game.createSprite(randint(0, 4), randint(0, 4))
        led2 = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
