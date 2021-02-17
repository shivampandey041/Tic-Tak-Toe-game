var count = 1;

function fill(control) {

    if (count <= 9) {

        if (count % 2 != 0) {
            document.getElementById(control.id).innerHTML = "X";
        } else {
            document.getElementById(control.id).innerHTML = "O";
        }
        count++;
        if (checkWin()) {
            alert("Winer");
            reset();
        }
    } else {
        alert("Match Drow");
        reset();
    }
}

function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('div' + i).innerHTML = "";
    }
    count = 1;
}

function checkWin() {
    if (checkcondition('div1', 'div2', 'div3') || checkcondition('div1', 'div5', 'div9') || checkcondition('div1', 'div4', 'div7') || checkcondition('div3', 'div5', 'div7') || checkcondition('div4', 'div5', 'div6') || checkcondition('div7', 'div8', 'div9') || checkcondition('div2', 'div5', 'div8') || checkcondition('div3', 'div6', 'div9')) {

        return true;
    }
}

function checkcondition(div1, div2, div3) {
    if (getData(div1) != "" && getData(div2) != "" && getData(div3) != "" && getData(div1) == getData(div2) && getData(div2) == getData(div3)) {
        return true;
    }
}

function getData(div) {
    return document.getElementById(div).innerHTML;
}