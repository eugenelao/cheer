function cheer(strArray) {
  return _.map(strArray, function (str) {
    return `${str.toUpperCase()} ${str.toUpperCase()} ${str.toUpperCase()}!!!`;
  });
}

console.log(cheer(['apple', 'pear']));
