function number (from, to) {
    let start = from;
    let timerId = setInterval(function() {
        alert(start);
        if (start == to) {
            clearInterval (timerId);
        }
        start++;
    }, 1000);
}
number(5,15)