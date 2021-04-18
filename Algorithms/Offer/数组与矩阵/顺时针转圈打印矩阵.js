// 问题：顺时针转圈打印矩阵
// 思路：确定两个点，左上角(lR,lC)，右下角(rR,rC)

function printMatrix(matrix) {
    let lR = 0,
        lC = 0,
        rR = matrix.length - 1, //matrix.length 行数
        rC = matrix[0].length - 1; //matrix.length-1 列数

    while (lR <= rR && lC <= rC) {
        printEdge(matrix, lR++, lC++, rR--, rC--);
    }

    function printEdge(matrix, lR, lC, rR, rC) {
        if (lR == rR) {
            for (let i = 0; i < rC; i++) {
                console.log(matrix[lR][i] + "");
            }
        } else if (lC == rC) {
            for (let j = 0; j < rR; j++) {
                console.log(matrix[j][lC] + "");
            }
        } else {
            let curC = lC,
                curR = lR;

            while (curC != rC) {
                console.log(matrix[lR][curC] + "");
                curC++;
            }
            while (curR != rR) {
                console.log(matrix[curR][rC] + '');
                curR++;
            }
            while (curC != lC) {
                console.log(matrix[rR][curC] + '');
                curC--;
            }
            while (curR != lR) {
                console.log(matrix[curR][lC] + '');
                curC--;
            }
        }
    }

}

var matrix = [
    [1, 2],
    [3, 4]
];
printMatrix(matrix);