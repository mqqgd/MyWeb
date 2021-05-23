// 问题：顺时针转圈打印矩阵
// 思路：确定两个点，左上角(lR,lC)，右下角(rR,rC)

// 有死循环

/* function printMatrix(matrix) {
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

} */

function spiralOrder(matrix) {
    let tR = 0,
        tC = 0;
    let dR = matrix.length - 1,
        dC = matrix[0].length - 1;
    let res = [];


    while (tR <= dR && tC <= dC) {
        return printEdge(matrix, tR++, tC++, dR--, dC--);
    }

    function printEdge(matrix, tR, tC, dR, dC) {
        if (tR === dR) {
            for (let i = tC; i <= dC; i++) {
                res.push(matrix[tR][i]);
                console.log("第一个：", res);

            }
        } else if (tC === dC) {
            for (let j = tR; j <= dR; j++) {
                res.push(matrix[j][tC]);

            }
        } else {
            let curC = tC;
            let curR = tR;
            while (curC !== dC) {
                res.push(matrix[tR][curC]);
                curC++;

            }
            while (curR !== dR) {
                res.push(matrix[curR][dC]);
                curR++;

            }
            while (curC !== tC) {
                res.push(matrix[dR][curC]);
                curC--;

            }
            while (curR !== tR) {
                res.push(matrix[curR][tC]);
                curR--;

            }

        }
        return res;
    }


};

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix));