function square(n) {
  return n * n;
}
function something(a, b, c ) {
  const val1 = fn(a);
  const val2 = fn(b);

  return val1 + val2;
}

const ans = something(2, 3, square);
console.log(ans);
