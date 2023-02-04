function outputWithDelay(a, b) {
    let beginning = a;

    let intervalId = setInterval(function () {
        if (beginning <= b) {
            console.log(beginning);
            beginning++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

outputWithDelay(5, 15);