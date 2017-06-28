function faculty(n) {
  if (n == 1) {
    return 1;
  }
  return n * faculty(n-1);
}

module.exports = faculty;