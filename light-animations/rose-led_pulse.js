var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function () {
    var led = new five.Led(3);

    led.pulse({
        easing: "linear",
        duration: 3000,
        cuePoints: [0, 0.25, 0.5, 0.75, 1],
        keyFrames: [50, 126, 255, 126, 50],
        onstop() {
            console.log("Animation stopped");
        }
    });






    // board.wait(10000, () => {

    //     // stop() terminates the interval
    //     // off() shuts the led off
    //     led.stop().off();
    // });
});