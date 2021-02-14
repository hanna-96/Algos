//   Write a function that takes in two strings: a main string and a potential
//   substring of the main string. The function should return a version of the main
//   string with every instance of the substring in it wrapped between underscores.

//   If two or more instances of the substring in the main string overlap each
//   other or sit side by side, the underscores relevant to these substrings should
//   only appear on the far left of the leftmost substring and on the far right of
//   the rightmost substring. If the main string doesn't contain the other string
//   at all, the function should return the main string intact.

//Input  = "testthis is a testtest to see if testestest it works"
//Output "_test_this is a _testtest_ to see if _testestest_ it works"

//Time O(n+m), Space O(n), where n- is the length of the main string and m- the length of the substring
function underscorifySubstring(string, substring) {
  let locations = findLocations(string, substring);
  let finalLocations = mergeLocations(locations);
  let newStr = insertUnderscor(string, finalLocations);
  return newStr;
}
//loop throught the string
//once we find the substring of our target
//3.save the indeces(start,end) of substring's appearance in the input string
//4.BUT there're some edge cases that prompt says
//-if the substrings overlap with each other or sit side by side then we SHOULD merge them
// 5.So create a function that will check if there're indeces from findLocation func that overlap each other
//if so then MERGE them
function findLocations(string, target) {
  //loop through the string
  //once you find the substring that === target > save its start and end indeces from the input string
  let startIdx = 0;
  let coordinates = [];
  while (startIdx < string.length) {
    //iterate through input string and find all the possible appareances of target in input substr
    //find the index where the target substring appears in input string, starting at startIndex
    const nextIdx = string.indexOf(target, startIdx);
    if (nextIdx === -1) break;
    // target is not in input string
    else {
      //save the indeces of appearance of found substring in the input string
      coordinates.push([nextIdx, nextIdx + target.length]);
      //then find other target substrings,BUT start immediately after the 1st appearence of the prev substr
      //BECAUSE some target substrs may OVERLAP
      startIdx = nextIdx + 1; //move on starting immediately after we found the first appearance  of target
      //, so that we can find other appearances
    }
  }
  //Eventually coordinates will have all the locations of every target substring in the input string
  //ex: [0,4] => our target substing is located between indeces 0 and 4 in the main string and so on..
  //so we'll add underscores there
  return coordinates;
}
//But we have to handle cases when coordinates indeces overlap or sit side by side
function mergeLocations(locations) {
  if (!locations.length) return locations;
  let finalLocations = [[locations[0][0], locations[0][1]]];
  for (let i = 1; i < locations.length; i++) {
    let previosLocation = finalLocations[finalLocations.length - 1];
    //if there's an overlap=>then merge the locations indeces
    if (previosLocation[1] >= locations[i][0]) {
      previosLocation[1] = locations[i][1];
    } else {
      finalLocations.push([locations[i][0], locations[i][1]]);
    }
  }
  return finalLocations;
}

//now let's finally build the result string by iterating through input string and our finalLocations arr
function insertUnderscor(string, finalLocations) {
  //finalLocations = [ [ 0, 4 ], [ 14, 22 ], [ 33, 43 ] ]
  let resStr = [];
  let locationsIdx = 0;
  let stringIdx = 0;
  let inBetweenUnderscores = false;
  let i = 0; //will point to the starting index  or endingIndex(0 or 1) in finalLocations array
  //traverse the string at the same time as we traverse the locations array
  while (stringIdx < string.length && locationsIdx < finalLocations.length) {
    if (stringIdx === finalLocations[locationsIdx][i]) {
      resStr.push("_");
      //once we inserted the 1st underscore=>we are inbetween underscores as we need still to put a closing _
      inBetweenUnderscores = !inBetweenUnderscores;
      if (!inBetweenUnderscores) {
        //we will increment locationsIdx ONLY when we inserted _ in the beginning AND the end of substring
        locationsIdx++;
      }
      if (i === 0) i = 1;
      else if (i === 1) i = 0;
    }

    resStr.push(string[stringIdx]);
    stringIdx++;
  }

  if (locationsIdx < finalLocations.length) resStr.push("_");
  //if we broke out of the loop and there are still words left in input string:
  else if (stringIdx < string.length) resStr.push(string.slice(stringIdx));
  return resStr.join("");
}
