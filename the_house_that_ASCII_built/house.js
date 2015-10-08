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

/******************************************
**************   Functions   **************
*******************************************/

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


function draw_outline(input, floor, begin, last) {
  var ascii = "";
  var output = [];
  // console.log(input);
  if (begin != last) {
    for (var i = 0; i < input.length; i++) {
      if (input[i]=="*") {
          if (i === 0 || input[i-1] == " ") {
            ascii = floor ? "+---" : "|   ";
          }else if (i === input.length - 1 || input[i+1] == " ") {
            ascii = floor ? "---+" : "   |";
          }else {
            ascii = floor ? "-----" : "     ";
          }
      }else {
        ascii = "    ";
      }
      output[i] = ascii;
    }
  } else {
    for (var j = 0; j < input.length; j++) {
      if (j != begin) {
        output[j] = "    ";
      }else {
        output[begin] = floor ? "+---+" : "|   |";
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
    switch (i) {
      case 0:
      console.log(draw_outline(house[i], true,  begin, last).join(''));
      console.log(draw_outline(house[i], false,  begin, last).join(''));
        break;
      case house.length - 1:
      console.log(draw_outline(house[i], true,  begin, last).join(''));
      console.log(draw_outline(house[i], false,  begin, last).join(''));
      console.log(draw_outline(house[i], true,  begin, last).join(''));
        break;
      default:
      console.log(draw_outline(house[i], true,  begin, last).join(''));
      console.log(draw_outline(house[i], false,  begin, last).join(''));
    }
  }
}

print_house(input_1);
