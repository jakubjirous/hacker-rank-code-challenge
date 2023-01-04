# Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

---

### Example: 
- For example, the square matrix `matrix` is shown below:

```
1 2 3
4 5 6
9 8 9  
```
- The left-to-right diagonal = `1 + 5 + 9 = 15`
- The right to left diagonal = `3 + 5 + 9 = 17`. 
- Their absolute difference is `|15 - 17| = 2`

### Function Description:

- Complete the `diagonalDifference` function in the editor below.
- `diagonalDifference` diagonalDifference takes the following parameter:
  - `int matrix[n][m]`: an array of integers

### Returns:

- `int`: the absolute diagonal difference

### Input Format:

- The first line contains a single integer, `n`, the number of rows and columns in the square matrix `matrix`.
-  Each of the next `n` lines describes a row, `matrix[i]`, and consists of `n` space-separated integers `matrix[i][j]`.


### Constraints:

- $-100 \le matrix[i][j] \le 100$

### Output Format:

- Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

---

### Sample Input:

```
11  2  4
4   5  6
10  8  -12
```

### Sample Output:

```
15
```

---

### Solution:

- [Code](/src/challenges/05-diagonal-difference/diagonal-difference.ts)
- [Tests](/src/challenges/05-diagonal-difference/test/diagonal-difference.test.ts)
