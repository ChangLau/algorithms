function validate(str) {
  const left = "([{",
    right = ")]}",
    i = 0,
    stack = [];
  while (i < str.length) {
    if (left.contains(str[i])) {
      stack.push(str[i]);
    } else {
      if (left.indexOf(stack.pop()) != right.indexOf(str[i])) {
        return false;
      }
    }
    i++;
  }
  return stack.isEmpty();
}
