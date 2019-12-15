function staircase(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = n - i;
      let sharps = i;

      console.log(' '.repeat(spaces) + '' + '#'.repeat(sharps));
    }
}
