radio.onReceivedNumber(function (receivedNumber) {
    Number2 = receivedNumber
})
let ONOFF = 0
let Number2 = 0
radio.setGroup(777)
/**
 * 1 - вкл
 * 
 * 0 - выкл
 * 
 * 3 - работает
 */
basic.forever(function () {
    if (Number2 == 3) {
        music.playTone(932, music.beat(BeatFraction.Breve))
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        ONOFF = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(0)
        Number2 = 0
        ONOFF = 0
    }
    if (ONOFF == 1) {
        basic.showLeds(`
            . . . . .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
    } else if (ONOFF == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
