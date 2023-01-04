# Lonely Integer

Given an array of integers, where all elements but one occur twice, find the unique element.

---

### Example:
- `inputArray = [1, 2, 3, 4, 3, 2, 1]` 
  - The unique element is `4`.

### Function Description:

- Complete the `lonelyInteger` function in the editor below.
- `lonelyInteger` has the following parameter(s):
  - `int inputArray[n]`: an array of integers

### Returns:

- `int`: the element that occurs only once

### Input Format:

- The first line contains a single integer, `n`, the number of integers in the array.
- The second line contains `n` space-separated integers that describe the values in `inputArray`.

### Constraints:

- $1 \le n \le 100$
- It is guaranteed that `n` is an odd number and that there is one unique element.
- $0 \le inputArray[i] \le 100$, where $0 \le i \le n$.

---

### Solution:

- [Code](/src/challenges/04-lonely-integer/lonely-integer.ts)
- [Tests](/src/challenges/04-lonely-integer/test/lonely-integer.test.ts)
