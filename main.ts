input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 31)
        basic.pause(500)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        basic.pause(100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 31)
        basic.pause(2000)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
})
input.onSound(DetectedSound.Loud, function () {
    Kitronik_Robotics_Board.allOff()
})
led.plot(2, 2)
input.setSoundThreshold(SoundThreshold.Loud, 33)
