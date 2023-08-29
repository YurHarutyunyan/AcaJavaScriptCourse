function problem5(matrice) {
  let maxSize = 0;
  let newMatrice = new Array(matrice.length);
  for (let i = 0; i < matrice.length; i++) {
    newMatrice[i] = [];
    for (let j = 0; j < matrice[i].length; j++) {
      if (i === 0 || j === 0) {
        newMatrice[i][j] = matrice[i][j];
      } else {
        if ((matrice[i - 1][j] == matrice[i - 1][j - 1]) == matrice[i][j - 1]) {
          newMatrice[i][j] = newMatrice[i][j - 1] + 1;

          if (newMatrice[i][j] > maxSize) maxSize = newMatrice[i][j];
        } else {
          newMatrice[i][j] = matrice[i][j];
        }
      }
    }
  }
  return maxSize;
}
