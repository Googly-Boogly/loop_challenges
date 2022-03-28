function odds() {
    var x = 0
    while (x <= 20) {
        if (x % 2 != 0) {
            console.log(x)
        }
        x = x + 1
    }
}
function decrease() {
    var x = 100
    while (x > 0) {
        if (x % 3 == 0) {
            console.log(x)
        }
        x = x - 1
    }
}
function decrease2() {
    var x = 4
    while (x > -4) {
        console.log(x)
        x = x - 1.5
    }
}
function sigma() {
    var x = 1
    var sum = 0
    while (x <= 100) {
        sum = sum + x
        x = x + 1
    }
    console.log(sum)
}
function factorial() {
    var x = 1
    var product = 1
    while (x <= 12) {
        product = product * x
        x = x + 1
    }
    console.log(product)
}