//   You're given a string of length 12 or smaller, containing only digits. Write a
//   function that returns all the possible IP addresses that can be created by
//   inserting three .s in the string.
// An IP address is a sequence of four positive integers that are separated by .s,
// where each individual integer is within the range 0-255, inclusive.
//   An IP address isn't valid if any of the individual integers contains leading 0s.
//For example, "192.168.0.1" is a valid IP, but "192.168.00.1" and '192.168.0.01' are not
//valid because they contain "00" and "01",respectively.Another example of a valid IP address is
// "99.1.1.10"; conversly, "991.1.1.0" isn't valid because 991 is > 255.

// Your function should return the IP addresses in string format and in no
// particular order. If no valid IP addresses can be created from the string,
// your function should return an empty list.
//Input = "1921680";
//Output: [
//   "1.9.216.80",
//   "1.92.16.80",
//   "1.92.168.0",
//   "19.2.16.80",
//   "19.2.168.0",
//   "19.21.6.80",
//   "19.21.68.0",
//   "19.216.8.0",
//   "192.1.6.80",
//   "192.1.68.0",
//   "192.16.8.0"
// ]

//each IP consists of 4 parts(each part cannot be longer than 3 digits)
//find one valid part at a time and then combine stese 4 parts to create 1 valid IP address
//TRy all of the valid positions in periods in input string
//!!Notice there shoud NOT be any leading 0 s! (as 192.168.00.01)=>WRONG

//1.pick the 1st location for the 1st period
//2.find the 2nd location for 2nd period and so on... until no more valid options
//3.then backtrack to the previous lovation and change that one and move forward agaim..
//Time O(1);Space O(1); doesn't depend on the size of string. There's a constant amount of IP addresses
//that we can generate
function validIPAddresses(string) {
  let results = [];
  //now let's look through all the possible positions where we can insert a period!
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    let curIP = ["", "", "", ""];
    //decide what will be our first part of IP
    curIP[0] = string.slice(0, i); //will give us whatever is before the 1st period we place
    if (!isValidPart(curIP[0])) continue;
    //once we found the place for first period=>found first valid part
    //let's find the next valid parts(the place where to insert the next period) that we can generate
    //with curIP[0]
    //i+1 becase we want to put next period at least one more position from previous and AT MOST 3 positions past i
    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      curIP[1] = string.slice(i, j); //we start from index i(after the previous valid part) and j -is where we place the next period
      if (!isValidPart(curIP[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        curIP[2] = string.slice(j, k); //we start from index j after the previous valid part) and untill k -is where we place the next period
        curIP[3] = string.slice(k); // the last 4th part is whatever is left after the third part
        if (isValidPart(curIP[2]) && isValidPart(curIP[3])) {
          results.push(curIP.join("."));
        }
      }
    }
  }
  return results;
}
function isValidPart(str) {
  let num = +str; //when we convert it to the number any leading 0 s will be dissapeared(01=>0)
  if (num > 255) return false;
  return str.length === num.toString().length; //check for leading o
}
