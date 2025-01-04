// Problem Statement:
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in place.
// You have to modify the input matrix in-place without using another matrix.

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotateImage = (matrix) => {
    let n = matrix.length

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    
    return matrix
};

console.log(rotateImage(matrix))
