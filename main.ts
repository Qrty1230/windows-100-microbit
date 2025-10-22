input.onPinPressed(TouchPin.P0, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))
})
input.onGesture(Gesture.LogoUp, function () {
    display.rotateTo(display.Direction.Normal)
})
input.onGesture(Gesture.TiltLeft, function () {
    display.rotateTo(display.Direction.LogoToLeft)
})
function Snowflake () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
}
function Breathe () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
input.onGesture(Gesture.TiltRight, function () {
    display.rotateTo(display.Direction.LogoToRight)
})
input.onGesture(Gesture.LogoDown, function () {
    display.rotateTo(display.Direction.UpsideDown)
})
serial.writeLine("Starting...")
basic.showLeds(`
    . # . . .
    . # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # . . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . # #
    . . . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . # .
    . . . # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
serial.writeLine("Breatheing...")
Breathe()
serial.writeLine("Snowflake...")
Snowflake()
serial.writeLine("Ready!")
basic.clearScreen()
music.setVolume(30)
music.play(music.stringPlayable("E B C5 A B G A F ", 150), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("E E - - - - - - ", 150), music.PlaybackMode.UntilDone)
