function isValidSudoku(board: string[][]): boolean {
  let isValid: boolean;

  isValid = board.every((row: string[]) => {
    row = row.filter((s) => s !== ".");
    const uniques = new Set(row);
    return row.length === uniques.size;
  });

  if (isValid === false) return false;

  isValid = board[0].every((_, i) => {
    let col: string[] = [];
    for (let j = 0; j < board.length; j++) {
      const cell = board[j][i];
      if (cell === ".") continue;
      col.push(cell);
    }

    const uniques = new Set(col);
    return col.length === uniques.size;
  });

  if (isValid === false) return false;

  for (let m = 0; m < 9; m += 3) {
    for (let n = 0; n < 9; n += 3) {
      const grid: string[] = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // console.log([i + m, j + n]);
          const cell = board[i + m][j + n];
          if (cell !== ".") grid.push(cell);
        }
      }
      const uniques = new Set(grid);
      if (grid.length !== uniques.size) return false;
    }
  }

  return isValid;
}
