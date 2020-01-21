/**
 * 计算杨辉三角n行m列的值
 * @param {*} n 行
 * @param {*} m 列
 */
function calculate(n, m) {
  // 列大于行返回错误
  if (m > n) {
    return false;
  }
  // 行和列相等或者列等于1
  else if (m == n || m == 1) {
    return 1;
  }
  // 递推构造杨辉三角二维数组
  let f = [];
  for (let i = 1; i <= n; i++) {
    f[i] = [];
    for (let j = 1; j <= i; j++) {
      // 行和列相等或者列等于1
      if (i == j || j == 1) {
        f[i][j] = 1;
      } else {
        f[i][j] = f[i - 1][j - 1] + f[i - 1][j];
      }
    }
  }
  return f[n][m];
}

calculate(7, 5);
