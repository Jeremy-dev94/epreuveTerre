var array1 = [1, 3, 2, 4, 5];
var array2 = [1, 2, 3, 4, 5];

function trie(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      return 'pas triée';
    }
  }
  return  'triée';
} 
console.log("La première liste est " + trie(array1));
console.log("La deuxième liste est " + trie(array2));

