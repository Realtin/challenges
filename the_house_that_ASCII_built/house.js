var input_1 = "   *  \n"+
              "  *** \n"+
              "******";

var input_2 = "    **\n"+
              "*** **\n"+
              "******\n";

var input_3 = " * \n"+
              "***\n"+
              "***\n"+
              "***\n"+
              "***\n"+
              "***\n"+
              "***\n";

function input_to_arr(input) {
  return input.split("\n").map(function splitting(item) {
    return item.split('');
  });
}

function first_asterix(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] == "*"){
      return i;
    }
  }
}

function last_asterix(input) {
  for (var i = input.length - 1; i >= 0; i--) {
    if (input[i] == "*"){
      return i;
    }
  }
}


function draw_floor(input, begin, last) {
  var ascii = "";
  var output = [];
  // console.log(input);
  if (begin != last) {
    for (var i = 0; i < input.length; i++) {
      if (input[i]=="*") {
        switch (i) {
          case begin:
            ascii = "+---";
            break;
          case last:
            ascii = "---+";
            break;
          default:
            ascii = "-----";
        }
      }else {
        ascii = "    ";
      }
      output[i] = ascii;
    }
  } else {
    for (var i = 0; i < input.length; i++) {
      if (i != begin) {
        output[i] = "    ";
      }else {
        output[begin] = "+---+";
      }
    }

  }
 return output;
}

function draw_walls(input, begin, last) {
  var ascii = "";
  var output = [];
  // console.log(input);
  if (begin != last) {
    for (var i = 0; i < input.length; i++) {
      if (input[i]=="*") {
        switch (i) {
          case begin:
            ascii = "|   ";
            break;
          case last:
            ascii = "   |";
            break;
          default:
            ascii = "     ";
        }
      } else {
        ascii = "    ";
      }
      output[i] = ascii;
    }
  } else {
    for (var i = 0; i < input.length; i++) {
      if (i != begin) {
        output[i] = "    ";
      }else {
        output[begin] = "|   |";
      }
    }
  }
 return output;
}

function print_house(input) {
  house = input_to_arr(input);
  for (var i = 0; i < house.length; i++) {
    begin = first_asterix(house[i]);
    last = last_asterix(house[i]);
    console.log(draw_floor(house[i], begin, last).join(''));
    console.log(draw_walls(house[i], begin, last).join(''));
    console.log(draw_floor(house[i], begin, last).join(''));
  }
}

print_house(input_1);
