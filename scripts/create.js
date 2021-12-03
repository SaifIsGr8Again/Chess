//declaring all functions
//create the board objects
function createBoard() {
    rowSet = 0
    colSet = 0
    rowPos = 0
    colPos = 0

    for (forCounter = 0; forCounter < 8; forCounter++) {
        colPos = 0
        colSet = 0
        if (forCounter % 2 == 0) {
            clrSet = "wheat"
        } else {
            clrSet = "#AB7B45"
        }

        for (forCounterTwo = 0; forCounterTwo < 8; forCounterTwo++) {
            squareArr.push(new square(colPos, rowPos, clrSet, colSet, rowSet))
            colPos += CW / 8
            colSet++
            if (clrSet == "wheat") {
                clrSet = "#AB7B45"
            } else {
                clrSet = "wheat"
            }
        }
        rowPos += CH / 8
        rowSet++
    }
}
//create all the pieces
function createPieces() {
    rowSet = 0
    colSet = 0
    rowPos = 0
    colPos = 0

    for (forCounter = 0; forCounter < 8; forCounter++) {
        pieceArr.push(new piece(colPos, rowPos, colSet, rowSet, nameArr[forCounter], "playerOne", imgArrOne[forCounter], 1))
        colPos += CW / 8
        colSet++
    }

    rowSet = 1
    colSet = 0
    rowPos = CH / 8
    colPos = 0

    for (forCounter = 0; forCounter < 8; forCounter++) {
        pieceArr.push(new piece(colPos, rowPos, colSet, rowSet, "pawn", "playerOne", pawnImgOne, 1))
        colPos += CW / 8
        colSet++
    }

    rowSet = 6
    colSet = 0
    rowPos = (CH / 8) * 6
    colPos = 0

    for (forCounter = 0; forCounter < 8; forCounter++) {
        pieceArr.push(new piece(colPos, rowPos, colSet, rowSet, "pawn", "playerTwo", pawnImgTwo, 1))
        colPos += CW / 8
        colSet++
    }

    rowSet = 7
    colSet = 0
    rowPos = (CH / 8) * 7
    colPos = 0

    for (forCounter = 0; forCounter < 8; forCounter++) {
        pieceArr.push(new piece(colPos, rowPos, colSet, rowSet, nameArr[forCounter], "playerTwo", imgArrTwo[forCounter], 1))
        colPos += CW / 8
        colSet++
    }
}