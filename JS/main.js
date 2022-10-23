"use strict";


// for refresh button 
const refreshButton = document.querySelector('.refresh-button');
const refreshPage = () => {
    location.reload();
}
refreshButton.addEventListener('click', refreshPage);



var startX, startY, eltName, limit = 50,
    currElt, turn = 'c',
    isVultureOnBoard = 0,
    lastVulturePosName = 0,
    totalCrowsOnBoard = 0;
var crowsCurrentlyOnBoard = [];
var CROW_WINNING_MESSAGE = 'Caw Caw!! Crow won!! ';
var VULTURE_WINNING_MESSAGE = 'Vulture won!! Click ok for new game ';
var currCrow;
var currPos;



var logstring = "";

function makelogs(st, id, x, y) {

    if (x === 0) {
        x = "Initial Stage";
    }
    if (id == 'v1') {

        var msg = `Vulture moved from ${x} to ${y}`;
        logstring = logstring + msg + '\n';
    } else {

        var msg = `Crow moved from ${x} to ${y}`;
        logstring = logstring + msg + '\n';
    }
    if (st == 1) {

        var msg = "Crow is killed by Vulture";

        logstring = logstring + msg + '\n';
    }



}

const initial = {
    // coordinates for intersection point of star
    1: {
        x: 250,
        y: 70,
        occupied: 0,
        id: "po1",
        prev: 0
    },
    2: {
        x: 70,
        y: 206,
        occupied: 0,
        id: "po2",
        prev: 0
    },
    3: {
        x: 206.596,
        y: 206,
        occupied: 0,
        id: "po3",
        prev: 0
    },
    4: {
        x: 293.404,
        y: 206,
        occupied: 0,
        id: "po4",
        prev: 0
    },
    5: {
        x: 430,
        y: 206,
        occupied: 0,
        id: "po5",
        prev: 0
    },
    6: {
        x: 178.814,
        y: 293.051,
        occupied: 0,
        id: "po6",
        prev: 0
    },
    7: {
        x: 250,
        y: 350,
        occupied: 0,
        id: "po7",
        prev: 0
    },
    8: {
        x: 321.186,
        y: 293.051,
        occupied: 0,
        id: "po8",
        prev: 0
    },
    9: {
        x: 130,
        y: 446,
        occupied: 0,
        id: "po9",
        prev: 0
    },
    10: {
        x: 370,
        y: 446,
        occupied: 0,
        id: "po10",
        prev: 0
    },

}
var deletepointer = 1;
const end = {
    // coordinates for intersection point of star
    1: {
        x: 620,
        y: 370
    },
    2: {
        x: 650,
        y: 370
    },
    3: {
        x: 680,
        y: 370
    },
    4: {
        x: 710,
        y: 370
    },

}
var crows = {
    C1: 0,
    C2: 0,
    C3: 0,
    C4: 0,
    C5: 0,
    C6: 0,
    C7: 0,
}


function init() {

    // drag star box circles 
    Snap("#c1").drag(dragMoveC, dragStartC, test);
    Snap("#c2").drag(dragMoveC, dragStartC, test);
    Snap("#c3").drag(dragMoveC, dragStartC, test);
    Snap("#c4").drag(dragMoveC, dragStartC, test);
    Snap("#c5").drag(dragMoveC, dragStartC, test);
    Snap("#c6").drag(dragMoveC, dragStartC, test);
    Snap("#c7").drag(dragMoveC, dragStartC, test);

    Snap("#v1").drag(dragMoveC, dragStartC, test);


}

function dragStartC(x, y, evt) {

    if (deletepointer == 5) {
        window.alert(VULTURE_WINNING_MESSAGE);

        var msg = VULTURE_WINNING_MESSAGE;
        logstring = logstring + msg + '\n';

        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(new Blob([logstring], {
            type: "text/plain"
        }));
        a.download = "logger.txt";
        document.body.appendChild(a);
        a.click();
        window.location.reload();

    }
    eltName = evt.target.id;

    startX = parseInt(Snap("#" + eltName).attr("cx"), 10);
    startY = parseInt(Snap("#" + eltName).attr("cy"), 10);
    currPos = parseInt(evt.target.name, 10);
    currCrow = Snap("#" + eltName).attr("id");
    // currElt = "c";
}

function dragMoveC(dx, dy, x, y, evt) {
    Snap("#" + eltName).attr({
        cx: startX + dx,
        cy: startY + dy
    });
}

function checkCrowValidMove() {

    return crowsCurrentlyOnBoard.includes(currCrow);
}

function test(pos) {


    if (turn == 'v') {

        if (eltName != "v1") {
            window.alert("Invalid move,vulture turn");
            Snap("#" + eltName).attr({
                cx: startX,
                cy: startY
            });
        } else {

            if (isVultureOnBoard == 0) {
                // Vulture is not present on the board
                isVultureOnBoard = 1;
                if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[1].occupied == 0) {

                    lastVulturePosName = 1;
                    Snap("#" + eltName).attr({
                        cx: 250,
                        cy: 70
                    });
                    turn = "c";
                    initial[1].occupied = 1;
                    makelogs(0, eltName, 0, 1);

                } else if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[2].occupied == 0) {

                    lastVulturePosName = 2;
                    Snap("#" + eltName).attr({
                        cx: 70,
                        cy: 206
                    });
                    turn = "c";
                    initial[2].occupied = 1;
                    makelogs(0, eltName, 0, 2);
                } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                    lastVulturePosName = 3;
                    Snap("#" + eltName).attr({
                        cx: 206.596,
                        cy: 206
                    });
                    turn = "c";
                    initial[3].occupied = 1;
                    makelogs(0, eltName, 0, 3);
                } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {

                    lastVulturePosName = 4;
                    Snap("#" + eltName).attr({
                        cx: 293.404,
                        cy: 206
                    });
                    turn = "c";
                    initial[4].occupied = 1;
                    makelogs(0, eltName, 0, 4);
                } else if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[5].occupied == 0) {

                    lastVulturePosName = 5;
                    Snap("#" + eltName).attr({
                        cx: 430,
                        cy: 206
                    });
                    turn = "c";
                    initial[5].occupied = 1;
                    makelogs(0, eltName, 0, 5);
                } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                    lastVulturePosName = 6;
                    Snap("#" + eltName).attr({
                        cx: 178.814,
                        cy: 293.051
                    });
                    turn = "c";
                    initial[6].occupied = 1;
                    makelogs(0, eltName, 0, 6);
                } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {

                    lastVulturePosName = 7;
                    Snap("#" + eltName).attr({
                        cx: 250,
                        cy: 350
                    });
                    turn = "c";
                    initial[7].occupied = 1;
                    makelogs(0, eltName, 0, 7);
                } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {

                    lastVulturePosName = 8;
                    Snap("#" + eltName).attr({
                        cx: 321.186,
                        cy: 293.051
                    });
                    turn = "c";
                    initial[8].occupied = 1;
                    makelogs(0, eltName, 0, 8);
                } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[9].occupied == 0) {

                    lastVulturePosName = 9;
                    Snap("#" + eltName).attr({
                        cx: 130,
                        cy: 446
                    });
                    turn = "c";
                    initial[9].occupied = 1;
                    makelogs(0, eltName, 0, 9);
                } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[10].occupied == 0) {

                    lastVulturePosName = 10;
                    Snap("#" + eltName).attr({
                        cx: 370,
                        cy: 446
                    });
                    turn = "c";
                    initial[10].occupied = 1;
                    makelogs(0, eltName, 0, 10);
                } else {

                    Snap("#" + eltName).attr({
                        cx: startX,
                        cy: startY
                    });
                }
            } else {
                // Vulture is already on board

                if (lastVulturePosName == 1) {



                    if (initial[3].occupied == 1 && initial[4].occupied == 1 && initial[6].occupied == 1 && initial[8].occupied == 1) { // also check for 6 and 8 

                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[3].occupied == 1 && initial[6].occupied == 0) {
                        makelogs(1, eltName, 1, 6);

                        lastVulturePosName = 6;
                        Snap("#" + eltName).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        initial[1].occupied = 0;
                        initial[3].occupied = 0;
                        //deleteCrow(3); 
                        var d = initial[3].prev;


                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });


                        initial[6].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[4].occupied == 1 && initial[8].occupied == 0) {
                        makelogs(1, eltName, 1, 8);
                        lastVulturePosName = 8;
                        Snap("#" + eltName).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        initial[1].occupied = 0;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[8].occupied = 1;
                        turn = "c";


                        deletepointer++;


                    } else if (initial[3].occupied == 1 && initial[6].occupied == 0) {
                        makelogs(1, eltName, 1, 6);

                        lastVulturePosName = 6;
                        Snap("#" + eltName).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        initial[1].occupied = 0;
                        initial[3].occupied = 0;
                        //deleteCrow(3); 
                        var d = initial[3].prev;


                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });


                        initial[6].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[4].occupied == 1 && initial[8].occupied == 0) {
                        makelogs(1, eltName, 1, 8);
                        lastVulturePosName = 8;
                        Snap("#" + eltName).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        initial[1].occupied = 0;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[8].occupied = 1;
                        turn = "c";


                        deletepointer++;


                    } else {

                        if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                            makelogs(0, eltName, 1, 3);
                            lastVulturePosName = 3;
                            Snap("#" + eltName).attr({
                                cx: 206.596,
                                cy: 206
                            });
                            turn = "c";
                            initial[3].occupied = 1;
                            initial[1].occupied = 0;



                        } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {

                            makelogs(0, eltName, 1, 4);
                            lastVulturePosName = 4;
                            Snap("#" + eltName).attr({
                                cx: 293.404,
                                cy: 206
                            });
                            turn = "c";
                            initial[4].occupied = 1;
                            initial[1].occupied = 0;


                        } else {

                            window.alert('Invalid move');
                            Snap(`#${currCrow}`).attr({
                                cx: startX,
                                cy: startY
                            });
                        }


                    }


                } else if (lastVulturePosName == 2) {

                    if (initial[3].occupied == 1 && initial[4].occupied == 1 && initial[6].occupied == 1 && initial[7].occupied == 1) {
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 1 && initial[4].occupied == 0) {
                        makelogs(1, eltName, 2, 4);
                        lastVulturePosName = 4;
                        Snap("#" + eltName).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        initial[2].occupied = 0;
                        initial[3].occupied = 0;
                        //deleteCrow(3);
                        var d = initial[3].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[4].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[6].occupied == 1 && initial[7].occupied == 0) {
                        makelogs(1, eltName, 2, 7);
                        lastVulturePosName = 7;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 350
                        });
                        initial[2].occupied = 0;
                        initial[6].occupied = 0;
                        //deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[7].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[3].occupied == 1 && initial[4].occupied == 0) {
                        makelogs(1, eltName, 2, 4);
                        lastVulturePosName = 4;
                        Snap("#" + eltName).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        initial[2].occupied = 0;
                        initial[3].occupied = 0;
                        //deleteCrow(3);
                        var d = initial[3].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[4].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[6].occupied == 1 && initial[7].occupied == 0) {
                        makelogs(1, eltName, 2, 7);
                        lastVulturePosName = 7;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 350
                        });
                        initial[2].occupied = 0;
                        initial[6].occupied = 0;
                        //deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[7].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else {
                        if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                            makelogs(0, eltName, 2, 3);
                            lastVulturePosName = 3;
                            Snap("#" + eltName).attr({
                                cx: 206.596,
                                cy: 206
                            });
                            turn = "c";
                            initial[3].occupied = 1;
                            initial[1].occupied = 0;




                        } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                            makelogs(0, eltName, 2, 6);
                            lastVulturePosName = 6;
                            Snap("#" + eltName).attr({
                                cx: 178.814,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[1].occupied = 0;
                            initial[6].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }
                    }

                } else if (lastVulturePosName == 3) {
                    if (initial[1].occupied == 1 && initial[2].occupied == 1 && initial[6].occupied == 1 &&
                        initial[4].occupied == 1 && initial[5].occupied == 1 && initial[9].occupied == 1) {
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 1 && initial[5].occupied == 0) {
                        makelogs(1, eltName, 3, 5);
                        lastVulturePosName = 5;
                        Snap("#" + eltName).attr({
                            cx: 430,
                            cy: 206
                        });
                        initial[3].occupied = 0;
                        initial[5].occupied = 1;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[6].occupied == 1 && initial[9].occupied == 0) {
                        makelogs(1, eltName, 3, 9);
                        lastVulturePosName = 9;
                        Snap("#" + eltName).attr({
                            cx: 130,
                            cy: 446
                        });
                        initial[3].occupied = 0;
                        initial[9].occupied = 1;
                        initial[6].occupied = 0;
                        // deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else if (initial[4].occupied == 1 && initial[5].occupied == 0) {
                        makelogs(1, eltName, 3, 5);
                        lastVulturePosName = 5;
                        Snap("#" + eltName).attr({
                            cx: 430,
                            cy: 206
                        });
                        initial[3].occupied = 0;
                        initial[5].occupied = 1;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else if (initial[6].occupied == 1 && initial[9].occupied == 0) {
                        makelogs(1, eltName, 3, 9);
                        lastVulturePosName = 9;
                        Snap("#" + eltName).attr({
                            cx: 130,
                            cy: 446
                        });
                        initial[3].occupied = 0;
                        initial[9].occupied = 1;
                        initial[6].occupied = 0;
                        // deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else {
                        if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[1].occupied == 0) {

                            makelogs(0, eltName, 3, 1);
                            lastVulturePosName = 1;
                            Snap("#" + eltName).attr({
                                cx: 250,
                                cy: 70
                            });
                            turn = "c";
                            initial[3].occupied = 0;
                            initial[1].occupied = 1;
                        } else if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[2].occupied == 0) {

                            makelogs(0, eltName, 3, 2);
                            lastVulturePosName = 2;
                            Snap("#" + eltName).attr({
                                cx: 70,
                                cy: 206
                            });
                            turn = "c";
                            initial[3].occupied = 0;
                            initial[2].occupied = 1;
                        } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {

                            lastVulturePosName = 4;
                            makelogs(0, eltName, 3, 4);
                            Snap("#" + eltName).attr({
                                cx: 293.404,
                                cy: 206
                            });
                            turn = "c";
                            initial[3].occupied = 0;
                            initial[4].occupied = 1;
                        } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                            lastVulturePosName = 6;
                            makelogs(0, eltName, 3, 6);
                            Snap("#" + eltName).attr({
                                cx: 178.814,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[3].occupied = 0;
                            initial[6].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }

                    }

                } else if (lastVulturePosName == 4) {

                    if (initial[1].occupied == 1 && initial[2].occupied == 1 && initial[3].occupied == 1 &&
                        initial[5].occupied == 1 && initial[8].occupied == 1 && initial[10].occupied == 1) {
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 1 && initial[2].occupied == 0) {
                        makelogs(1, eltName, 4, 2);
                        lastVulturePosName = 2;
                        Snap("#" + eltName).attr({
                            cx: 70,
                            cy: 206
                        });
                        initial[4].occupied = 0;
                        initial[2].occupied = 1;
                        initial[3].occupied = 0;
                        // deleteCrow(3);
                        var d = initial[3].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[8].occupied == 1 && initial[10].occupied == 0) {
                        makelogs(1, eltName, 4, 10);
                        lastVulturePosName = 10;
                        Snap("#" + eltName).attr({
                            cx: 370,
                            cy: 446
                        });
                        initial[4].occupied = 0;
                        initial[10].occupied = 1;
                        initial[8].occupied = 0;
                        //deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (initial[3].occupied == 1 && initial[2].occupied == 0) {
                        makelogs(1, eltName, 4, 2);
                        lastVulturePosName = 2;
                        Snap("#" + eltName).attr({
                            cx: 70,
                            cy: 206
                        });
                        initial[4].occupied = 0;
                        initial[2].occupied = 1;
                        initial[3].occupied = 0;
                        // deleteCrow(3);
                        var d = initial[3].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else if (initial[8].occupied == 1 && initial[10].occupied == 0) {
                        makelogs(1, eltName, 4, 10);
                        lastVulturePosName = 10;
                        Snap("#" + eltName).attr({
                            cx: 370,
                            cy: 446
                        });
                        initial[4].occupied = 0;
                        initial[10].occupied = 1;
                        initial[8].occupied = 0;
                        //deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else {
                        if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[5].occupied == 0) {

                            makelogs(0, eltName, 4, 5);
                            lastVulturePosName = 5;
                            Snap("#" + eltName).attr({
                                cx: 430,
                                cy: 206
                            });
                            turn = "c";
                            initial[4].occupied = 0;
                            initial[5].occupied = 1;
                        } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[1].occupied == 0) {

                            makelogs(0, eltName, 4, 1);
                            lastVulturePosName = 1;
                            Snap("#" + eltName).attr({
                                cx: 250,
                                cy: 70
                            });
                            turn = "c";
                            initial[4].occupied = 0;
                            initial[1].occupied = 1;
                        } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {

                            makelogs(0, eltName, 4, 8);
                            lastVulturePosName = 8;
                            Snap("#" + eltName).attr({
                                cx: 321.186,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[4].occupied = 0;
                            initial[8].occupied = 1;
                        } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                            makelogs(0, eltName, 4, 3);
                            lastVulturePosName = 3;
                            Snap("#" + eltName).attr({
                                cx: 206.596,
                                cy: 206
                            });
                            turn = "c";
                            initial[4].occupied = 0;
                            initial[3].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }
                    }


                } else if (lastVulturePosName == 5) {

                    if (initial[3].occupied == 1 && initial[4].occupied == 1 && initial[7].occupied == 1 && initial[8].occupied == 1) { // also check for 6 and 8 
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 1 && initial[3].occupied == 0) {
                        makelogs(1, eltName, 5, 3);
                        lastVulturePosName = 3;
                        Snap("#" + eltName).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        initial[5].occupied = 0;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[3].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[8].occupied == 1 && initial[7].occupied == 0) {
                        makelogs(1, eltName, 5, 7);
                        lastVulturePosName = 7;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 350
                        });
                        initial[5].occupied = 0;
                        initial[8].occupied = 0;
                        //deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[7].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[4].occupied == 1 && initial[3].occupied == 0) {
                        makelogs(1, eltName, 5, 3);
                        lastVulturePosName = 3;
                        Snap("#" + eltName).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        initial[5].occupied = 0;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[3].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[8].occupied == 1 && initial[7].occupied == 0) {
                        makelogs(1, eltName, 5, 7);
                        lastVulturePosName = 7;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 350
                        });
                        initial[5].occupied = 0;
                        initial[8].occupied = 0;
                        //deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[7].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else {
                        if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {

                            makelogs(0, eltName, 5, 4);
                            lastVulturePosName = 4;
                            Snap("#" + eltName).attr({
                                cx: 293.404,
                                cy: 206
                            });
                            turn = "c";
                            initial[4].occupied = 1;
                            initial[5].occupied = 0;
                        } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {

                            makelogs(0, eltName, 5, 8);
                            lastVulturePosName = 8;
                            Snap("#" + eltName).attr({
                                cx: 321.186,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[5].occupied = 0;
                            initial[8].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }

                    }

                } else if (lastVulturePosName == 6) {

                    if (initial[1].occupied == 1 && initial[2].occupied == 1 && initial[3].occupied == 1 &&
                        initial[7].occupied == 1 && initial[9].occupied == 1 && initial[10].occupied == 1) {
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[3].occupied == 1 && initial[1].occupied == 0) {
                        makelogs(1, eltName, 6, 1);
                        lastVulturePosName = 1;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 70
                        });
                        initial[6].occupied = 0;
                        initial[1].occupied = 1;
                        initial[3].occupied = 0;
                        //deleteCrow(3);
                        var d = initial[3].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[7].occupied == 1 && initial[10].occupied == 0) {
                        makelogs(1, eltName, 6, 10);
                        lastVulturePosName = 10;
                        Snap("#" + eltName).attr({
                            cx: 370,
                            cy: 446
                        });
                        initial[6].occupied = 0;
                        initial[10].occupied = 1;
                        initial[7].occupied = 0;
                        // deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else if (initial[3].occupied == 1 && initial[1].occupied == 0) {
                        makelogs(1, eltName, 6, 1);
                        lastVulturePosName = 1;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 70
                        });
                        initial[6].occupied = 0;
                        initial[1].occupied = 1;
                        initial[3].occupied = 0;
                        //deleteCrow(3);
                        var d = initial[3].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (initial[7].occupied == 1 && initial[10].occupied == 0) {
                        makelogs(1, eltName, 6, 10);
                        lastVulturePosName = 10;
                        Snap("#" + eltName).attr({
                            cx: 370,
                            cy: 446
                        });
                        initial[6].occupied = 0;
                        initial[10].occupied = 1;
                        initial[7].occupied = 0;
                        // deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';

                        deletepointer++;


                    } else {
                        if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[2].occupied == 0) {

                            makelogs(0, eltName, 6, 2);
                            lastVulturePosName = 2;
                            Snap("#" + eltName).attr({
                                cx: 70,
                                cy: 206
                            });
                            turn = "c";
                            initial[6].occupied = 0;
                            initial[2].occupied = 1;
                        } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                            makelogs(0, eltName, 6, 3);
                            lastVulturePosName = 3;
                            Snap("#" + eltName).attr({
                                cx: 206.596,
                                cy: 206
                            });
                            turn = "c";
                            initial[6].occupied = 0;
                            initial[3].occupied = 1;
                        } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {

                            makelogs(0, eltName, 6, 7);
                            lastVulturePosName = 7;
                            Snap("#" + eltName).attr({
                                cx: 250,
                                cy: 350
                            });
                            turn = "c";
                            initial[6].occupied = 0;
                            initial[7].occupied = 1;
                        } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[9].occupied == 0) {

                            makelogs(0, eltName, 6, 9);
                            lastVulturePosName = 9;
                            Snap("#" + eltName).attr({
                                cx: 130,
                                cy: 446
                            });
                            turn = "c";
                            initial[6].occupied = 0;
                            initial[9].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }
                    }
                } else if (lastVulturePosName == 7) {

                    if (initial[6].occupied == 1 && initial[8].occupied == 1 && initial[9].occupied == 1 &&
                        initial[10].occupied == 1 && initial[2].occupied == 1 && initial[5].occupied == 1) {
                        window.alert(CROW_WINNING_MESSAGE);


                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[6].occupied == 1 && initial[2].occupied == 0) {
                        makelogs(1, eltName, 7, 2);
                        lastVulturePosName = 2;
                        Snap("#" + eltName).attr({
                            cx: 70,
                            cy: 206
                        });
                        initial[7].occupied = 0;
                        initial[2].occupied = 1;
                        initial[6].occupied = 0;
                        //deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[8].occupied == 1 && initial[5].occupied == 0) {
                        lastVulturePosName = 5;
                        makelogs(1, eltName, 7, 5);
                        Snap("#" + eltName).attr({
                            cx: 430,
                            cy: 206
                        });
                        initial[7].occupied = 0;
                        initial[5].occupied = 1;
                        initial[8].occupied = 0;
                        // deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (initial[6].occupied == 1 && initial[2].occupied == 0) {
                        makelogs(1, eltName, 7, 2);
                        lastVulturePosName = 2;
                        Snap("#" + eltName).attr({
                            cx: 70,
                            cy: 206
                        });
                        initial[7].occupied = 0;
                        initial[2].occupied = 1;
                        initial[6].occupied = 0;
                        //deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (initial[8].occupied == 1 && initial[5].occupied == 0) {
                        lastVulturePosName = 5;
                        makelogs(1, eltName, 7, 5);
                        Snap("#" + eltName).attr({
                            cx: 430,
                            cy: 206
                        });
                        initial[7].occupied = 0;
                        initial[5].occupied = 1;
                        initial[8].occupied = 0;
                        // deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else {
                        if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                            makelogs(0, eltName, 7, 6);
                            lastVulturePosName = 6;
                            Snap("#" + eltName).attr({
                                cx: 178.814,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[7].occupied = 0;
                            initial[6].occupied = 1;
                        } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {

                            makelogs(0, eltName, 7, 8);
                            lastVulturePosName = 8;
                            Snap("#" + eltName).attr({
                                cx: 321.186,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[7].occupied = 0;
                            initial[8].occupied = 1;
                        } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[9].occupied == 0) {

                            makelogs(0, eltName, 7, 9);
                            lastVulturePosName = 9;
                            Snap("#" + eltName).attr({
                                cx: 130,
                                cy: 446
                            });
                            turn = "c";
                            initial[7].occupied = 0;
                            initial[9].occupied = 1;
                        } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[10].occupied == 0) {

                            makelogs(0, eltName, 7, 10);
                            lastVulturePosName = 10;
                            Snap("#" + eltName).attr({
                                cx: 370,
                                cy: 446
                            });
                            turn = "c";
                            initial[7].occupied = 0;
                            initial[10].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }
                    }

                } else if (lastVulturePosName == 8) {


                    if (initial[4].occupied == 1 && initial[5].occupied == 1 && initial[7].occupied == 1 &&
                        initial[10].occupied == 1 && initial[1].occupied == 1 && initial[9].occupied == 1) {
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[4].occupied == 1 && initial[1].occupied == 0) {
                        makelogs(1, eltName, 8, 1);
                        lastVulturePosName = 1;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 70
                        });
                        initial[8].occupied = 0;
                        initial[1].occupied = 1;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;

                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[7].occupied == 1 && initial[9].occupied == 0) {
                        makelogs(1, eltName, 8, 9);
                        lastVulturePosName = 9;
                        Snap("#" + eltName).attr({
                            cx: 130,
                            cy: 446
                        });
                        initial[8].occupied = 0;
                        initial[9].occupied = 1;
                        initial[7].occupied = 0;
                        //deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (initial[4].occupied == 1 && initial[1].occupied == 0) {
                        makelogs(1, eltName, 8, 1);
                        lastVulturePosName = 1;
                        Snap("#" + eltName).attr({
                            cx: 250,
                            cy: 70
                        });
                        initial[8].occupied = 0;
                        initial[1].occupied = 1;
                        initial[4].occupied = 0;
                        //deleteCrow(4);
                        var d = initial[4].prev;

                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else if (initial[7].occupied == 1 && initial[9].occupied == 0) {
                        makelogs(1, eltName, 8, 9);
                        lastVulturePosName = 9;
                        Snap("#" + eltName).attr({
                            cx: 130,
                            cy: 446
                        });
                        initial[8].occupied = 0;
                        initial[9].occupied = 1;
                        initial[7].occupied = 0;
                        //deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        turn = 'c';


                        deletepointer++;


                    } else {
                        if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {

                            makelogs(0, eltName, 8, 4);
                            lastVulturePosName = 4;
                            Snap("#" + eltName).attr({
                                cx: 293.404,
                                cy: 206
                            });
                            turn = "c";
                            initial[8].occupied = 0;
                            initial[4].occupied = 1;
                        } else if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[5].occupied == 0) {

                            makelogs(0, eltName, 8, 5);
                            lastVulturePosName = 5;
                            Snap("#" + eltName).attr({
                                cx: 430,
                                cy: 206
                            });
                            turn = "c";
                            initial[8].occupied = 0;
                            initial[5].occupied = 1;
                        } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {

                            makelogs(0, eltName, 8, 7);
                            lastVulturePosName = 7;
                            Snap("#" + eltName).attr({
                                cx: 250,
                                cy: 350
                            });
                            turn = "c";
                            initial[8].occupied = 0;
                            initial[7].occupied = 1;
                        } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[10].occupied == 0) {

                            makelogs(0, eltName, 8, 10);
                            lastVulturePosName = 10;
                            Snap("#" + eltName).attr({
                                cx: 370,
                                cy: 446
                            });
                            turn = "c";
                            initial[8].occupied = 0;
                            initial[10].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }
                    }

                } else if (lastVulturePosName == 9) {

                    if (initial[6].occupied == 1 && initial[7].occupied == 1 && initial[3].occupied == 1 && initial[8].occupied == 1) { // also check for 6 and 8 
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[6].occupied == 1 && initial[3].occupied == 0) {
                        makelogs(1, eltName, 9, 3);
                        lastVulturePosName = 3;
                        Snap("#" + eltName).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        initial[9].occupied = 0;
                        initial[6].occupied = 0;
                        //deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[3].occupied = 1;
                        turn = "c";

                        deletepointer++;

                    } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[7].occupied == 1 && initial[8].occupied == 0) {
                        lastVulturePosName = 8;
                        makelogs(1, eltName, 9, 8);
                        Snap("#" + eltName).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        initial[9].occupied = 0;
                        initial[7].occupied = 0;
                        //deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[8].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[6].occupied == 1 && initial[3].occupied == 0) {
                        makelogs(1, eltName, 9, 3);
                        lastVulturePosName = 3;
                        Snap("#" + eltName).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        initial[9].occupied = 0;
                        initial[6].occupied = 0;
                        //deleteCrow(6);
                        var d = initial[6].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[3].occupied = 1;
                        turn = "c";

                        deletepointer++;

                    } else if (initial[7].occupied == 1 && initial[8].occupied == 0) {
                        lastVulturePosName = 8;
                        makelogs(1, eltName, 9, 8);
                        Snap("#" + eltName).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        initial[9].occupied = 0;
                        initial[7].occupied = 0;
                        //deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[8].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else {
                        if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                            makelogs(0, eltName, 9, 6);
                            lastVulturePosName = 6;
                            Snap("#" + eltName).attr({
                                cx: 178.814,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[9].occupied = 0;
                            initial[6].occupied = 1;
                        } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {

                            makelogs(0, eltName, 9, 7);
                            lastVulturePosName = 7;
                            Snap("#" + eltName).attr({
                                cx: 250,
                                cy: 350
                            });
                            turn = "c";
                            initial[9].occupied = 0;
                            initial[7].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }

                    }

                } else if (lastVulturePosName == 10) {

                    if (initial[7].occupied == 1 && initial[8].occupied == 1 && initial[6].occupied == 1 && initial[4].occupied == 1) { // also check for 6 and 8 
                        window.alert(CROW_WINNING_MESSAGE);

                        var msg = CROW_WINNING_MESSAGE;
                        logstring = logstring + msg + '\n';

                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(new Blob([logstring], {
                            type: "text/plain"
                        }));
                        a.download = "logger.txt";
                        document.body.appendChild(a);
                        a.click();
                        window.location.reload();
                    } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[7].occupied == 1 && initial[6].occupied == 0) {
                        makelogs(1, eltName, 10, 6);
                        lastVulturePosName = 6;
                        Snap("#" + eltName).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        initial[10].occupied = 0;
                        initial[7].occupied = 0;
                        //deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[6].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[8].occupied == 1 && initial[4].occupied == 0) {
                        makelogs(1, eltName, 10, 4);
                        lastVulturePosName = 4;
                        Snap("#" + eltName).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        initial[10].occupied = 0;
                        initial[8].occupied = 0;
                        //deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[4].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[7].occupied == 1 && initial[6].occupied == 0) {
                        makelogs(1, eltName, 10, 6);
                        lastVulturePosName = 6;
                        Snap("#" + eltName).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        initial[10].occupied = 0;
                        initial[7].occupied = 0;
                        //deleteCrow(7);
                        var d = initial[7].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[6].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else if (initial[8].occupied == 1 && initial[4].occupied == 0) {
                        makelogs(1, eltName, 10, 4);
                        lastVulturePosName = 4;
                        Snap("#" + eltName).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        initial[10].occupied = 0;
                        initial[8].occupied = 0;
                        //deleteCrow(8);
                        var d = initial[8].prev;
                        Snap("#c" + d).attr({
                            cx: end[deletepointer].x,
                            cy: end[deletepointer].y
                        });
                        initial[4].occupied = 1;
                        turn = "c";


                        deletepointer++;

                    } else {
                        if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {

                            makelogs(0, eltName, 10, 7);
                            lastVulturePosName = 7;
                            Snap("#" + eltName).attr({
                                cx: 250,
                                cy: 350
                            });
                            turn = "c";
                            initial[10].occupied = 0;
                            initial[7].occupied = 1;
                        } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {

                            makelogs(0, eltName, 10, 8);
                            lastVulturePosName = 8;
                            Snap("#" + eltName).attr({
                                cx: 321.186,
                                cy: 293.051
                            });
                            turn = "c";
                            initial[10].occupied = 0;
                            initial[8].occupied = 1;
                        } else {

                            window.alert('Invalid move');

                            Snap("#" + eltName).attr({
                                cx: startX,
                                cy: startY
                            });
                        }
                    }
                }
            }

        }

    } else if (turn == 'c') {
        // write makelogs from here 

        if (eltName == "v1") {
            window.alert("Invalid move,now is crow's turn!!");
            Snap("#" + eltName).attr({
                cx: startX,
                cy: startY
            });
        } else {
            if (totalCrowsOnBoard != 7) {
                if (!checkCrowValidMove()) {



                    if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[1].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 70
                        });

                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[1].occupied = 1;
                        initial[1].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 1;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 1);


                    } else if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[2].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 70,
                            cy: 206
                        });
                        initial[2].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[2].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 2;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 2);
                    } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        initial[3].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[3].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 3;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 3);
                    } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        initial[4].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[4].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 4;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 4);
                    } else if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[5].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 430,
                            cy: 206
                        });
                        initial[5].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[5].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 5;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 5);
                    } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        initial[6].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[6].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 6;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 6);
                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 350
                        });
                        initial[7].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[7].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 7;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 7);
                    } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        initial[8].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[8].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 8;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 8);
                    } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[9].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 130,
                            cy: 446
                        });

                        initial[9].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[9].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 9;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 9);
                    } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[10].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 370,
                            cy: 446
                        });
                        initial[10].occupied = 1;
                        crowsCurrentlyOnBoard.push(currCrow);
                        initial[10].prev = parseInt(currCrow.substr(1), 10);
                        crows[currCrow] = 10;
                        turn = "v";
                        totalCrowsOnBoard = totalCrowsOnBoard + 1;
                        makelogs(0, currCrow, 0, 10);
                    } else {
                        window.alert('invalid move');


                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }
                } else {
                    window.alert('Invalid move. First place all the seven crows on the board!');
                    Snap(`#${currCrow}`).attr({
                        cx: startX,
                        cy: startY
                    });
                }
            } else {
                // Getting all adjacent positions for the current crow
                var currPos = crows[currCrow];
                if (currPos == 1) {
                    // Crow can move to position 3 or 4
                    if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        turn = "v";
                        initial[3].occupied = 1;
                        initial[3].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 3;
                        makelogs(0, currCrow, 1, 3);
                    } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        turn = "v";
                        initial[4].occupied = 1;
                        initial[4].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 4;
                        makelogs(0, currCrow, 1, 4);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }

                } else if (currPos == 2) {
                    // Crow can move to 3 or 6
                    if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        turn = "v";
                        initial[3].occupied = 1;
                        initial[3].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 3;
                        makelogs(0, currCrow, 2, 3);
                    } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[6].occupied = 1;
                        initial[6].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 6;
                        makelogs(0, currCrow, 2, 6);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }
                } else if (currPos == 3) {
                    // Crow can move to 1, 2, 4 or 6
                    if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[1].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 70
                        });
                        turn = "v";
                        initial[1].occupied = 1;
                        initial[1].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 1;
                        makelogs(0, currCrow, 3, 1);
                    } else if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[2].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 70,
                            cy: 206
                        });
                        turn = "v";
                        initial[2].occupied = 1;
                        initial[2].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 2;
                        makelogs(0, currCrow, 3, 2);
                    } else if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        turn = "v";
                        initial[4].occupied = 1;
                        initial[4].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 4;
                        makelogs(0, currCrow, 3, 4);
                    } else if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[6].occupied = 1;
                        initial[6].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 6;
                        makelogs(0, currCrow, 3, 6);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }

                } else if (currPos == 4) {
                    // Crow can move to 1, 3, 5 or 8

                    if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 70 - limit && pos.clientY <= 70 + limit && initial[1].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 70
                        });
                        turn = "v";
                        initial[1].occupied = 1;
                        initial[1].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 1;
                        makelogs(0, currCrow, 4, 1);
                    } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        turn = "v";
                        initial[3].occupied = 1;
                        initial[3].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 3;
                        makelogs(0, currCrow, 4, 3);
                    } else if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[5].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 430,
                            cy: 206
                        });
                        turn = "v";
                        initial[5].occupied = 1;
                        initial[5].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 5;
                        makelogs(0, currCrow, 4, 5);
                    } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[8].occupied = 1;
                        initial[8].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 8;
                        makelogs(0, currCrow, 4, 8);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }




                } else if (currPos == 5) {
                    // Crow can move to 4 or 8

                    if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        turn = "v";
                        initial[4].occupied = 1;
                        initial[4].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 4;
                        makelogs(0, currCrow, 5, 4);
                    } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[8].occupied = 1;
                        initial[8].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 8;
                        makelogs(0, currCrow, 5, 8);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }

                } else if (currPos == 6) {
                    // Crow can move to 2, 3, 7 or 9
                    if (pos.clientX >= 70 - limit && pos.clientX <= 70 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[2].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 70,
                            cy: 206
                        });
                        turn = "v";
                        initial[2].occupied = 1;
                        initial[2].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 2;
                        makelogs(0, currCrow, 6, 2);
                    } else if (pos.clientX >= 206.596 - limit && pos.clientX <= 206.596 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[3].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 206.596,
                            cy: 206
                        });
                        turn = "v";
                        initial[3].occupied = 1;
                        initial[3].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 3;
                        makelogs(0, currCrow, 6, 3);
                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 350
                        });
                        turn = "v";
                        initial[7].occupied = 1;
                        initial[7].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 7;
                        makelogs(0, currCrow, 6, 7);
                    } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[9].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 130,
                            cy: 446
                        });
                        turn = "v";
                        initial[9].occupied = 1;
                        initial[9].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 9;
                        makelogs(0, currCrow, 6, 9);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }
                } else if (currPos == 7) {
                    // Crow can move to 6, 8, 9 or 10

                    if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[6].occupied = 1;
                        initial[6].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 6;
                        makelogs(0, currCrow, 7, 6);
                    } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[8].occupied = 1;
                        initial[8].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 8;
                        makelogs(0, currCrow, 7, 8);
                    } else if (pos.clientX >= 130 - limit && pos.clientX <= 130 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[9].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 130,
                            cy: 446
                        });
                        turn = "v";
                        initial[9].occupied = 1;
                        initial[9].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 9;
                        makelogs(0, currCrow, 7, 9);
                    } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[10].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 370,
                            cy: 446
                        });
                        turn = "v";
                        initial[10].occupied = 1;
                        initial[10].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 10;
                        makelogs(0, currCrow, 7, 10);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }

                } else if (currPos == 8) {

                    // Crow can move to 4, 5, 7 or 10
                    if (pos.clientX >= 293.404 - limit && pos.clientX <= 293.404 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[4].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 293.404,
                            cy: 206
                        });
                        turn = "v";
                        initial[4].occupied = 1;
                        initial[4].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 4;
                        makelogs(0, currCrow, 8, 4);
                    } else if (pos.clientX >= 430 - limit && pos.clientX <= 430 + limit && pos.clientY >= 206 - limit && pos.clientY <= 206 + limit && initial[5].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 430,
                            cy: 206
                        });
                        turn = "v";
                        initial[5].occupied = 1;
                        initial[5].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 5;
                        makelogs(0, currCrow, 8, 5);
                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 350
                        });
                        turn = "v";
                        initial[7].occupied = 1;
                        initial[7].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 7;
                        makelogs(0, currCrow, 8, 7);
                    } else if (pos.clientX >= 370 - limit && pos.clientX <= 370 + limit && pos.clientY >= 446 - limit && pos.clientY <= 446 + limit && initial[10].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 370,
                            cy: 446
                        });
                        turn = "v";
                        initial[10].occupied = 1;
                        initial[10].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 10;
                        makelogs(0, currCrow, 8, 10);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }
                } else if (currPos == 9) {
                    // Crow can move to 6 or 7

                    if (pos.clientX >= 178.814 - limit && pos.clientX <= 178.814 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[6].occupied == 0) {

                        Snap(`#${currCrow}`).attr({
                            cx: 178.814,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[6].occupied = 1;
                        initial[6].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 6;
                        makelogs(0, currCrow, 9, 6);
                    } else if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 350
                        });
                        turn = "v";
                        initial[7].occupied = 1;
                        initial[7].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 7;
                        makelogs(0, currCrow, 9, 7);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }

                } else if (currPos == 10) {
                    // Crow can move to 7 or 8
                    if (pos.clientX >= 250 - limit && pos.clientX <= 250 + limit && pos.clientY >= 350 - limit && pos.clientY <= 350 + limit && initial[7].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 250,
                            cy: 350
                        });
                        turn = "v";
                        initial[7].occupied = 1;
                        initial[7].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 7;
                        makelogs(0, currCrow, 10, 7);
                    } else if (pos.clientX >= 321.186 - limit && pos.clientX <= 321.186 + limit && pos.clientY >= 293.051 - limit && pos.clientY <= 293.051 + limit && initial[8].occupied == 0) {
                        Snap(`#${currCrow}`).attr({
                            cx: 321.186,
                            cy: 293.051
                        });
                        turn = "v";
                        initial[8].occupied = 1;
                        initial[8].prev = parseInt(currCrow.substr(1), 10);
                        initial[currPos].occupied = 0;
                        crows[currCrow] = 8;
                        makelogs(0, currCrow, 10, 8);
                    } else {
                        window.alert('Invalid move');
                        Snap(`#${currCrow}`).attr({
                            cx: startX,
                            cy: startY
                        });
                    }

                }

            }


        }

    }

}