
function print_cells(input) {
  var cells = input.map(function x_or_space(item) {
    return item == 1 ? "x" : " ";
  });
  console.log(cells.join(''));
}

function next_state(cells) {
  var next = [];
  for (var i = 0; i < cells.length; i++) {
    // ^ == bitwise XOR
    next[i] = cells[i-1]^cells[i+1] ? 1 : 0;
  }
  print_cells(next);
  return next;
}

// get the Number from the argument 
argument = process.argv[2];
// Number --> Array of Digits
var state = argument.toString().split('').map(Number);
// inital cell state
print_cells(state);
// next 25 states
for (var i = 0; i < 25; i++) {
  state = next_state(state);
}
