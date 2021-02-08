//Write a SuffixTrie  class for a Suffix-Trie-like data structure. The class should have a
//root  property set to be the root node of the trie and should support:
// - Creating the trie from a string; this will be done by calling the populateSuffixTrieFrom method upon class instantiation,
//which should populate the root of the class.
// -Searching for strings in the trie.
//Note that every string added to the trie should end with the special endSymbol * character.

//Input: = "babc"
//Output:
// {
//     "c": {"*": true},
//     "b": {
//       "c": {"*": true},
//       "a": {"b": {"c": {"*": true}}},
//     },
//     "a": {"b": {"c": {"*": true}}},
//   }
//Input : string 'abc
//Output true

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }
  //every node in the trie will be a key in a hash table pointing to another hash table;
  //the values in a hash table  to which it points will be other nodes in the tree whose keys will be
  //a specific letter that comes after the previous letter and that points to another hash table and so on...

  //Time O(n^2),where n is the length of the input string. We're interating therough all of the suffixes
  //and then iterating through  all of its chars;
  //Space O(n^2)
  populateSuffixTrieFrom(string) {
    //for each suffix consider the rest of the string
    // the 1st suffix will be the entire string
    //1.iterate through the string and iterate through every char of each of the suffixes
    //2.check if char is already stored in a tree:(initially it will point to the root)
    //-if no :  create a branch that will point to that char (in code: create a hash map= {char:{}});
    //3.move on to next char
    //4.check if the next char points to the prev char
    //-if the value of the prev char is an empty {}, than add current char there
    //5.move pointer to current node

    for (let i = 0; i < string.length; i++) {
      let node = this.root;
      for (let j = i; j < string.length; j++) {
        if (!node[string[j]]) {
          node[string[j]] = {}; //create a new node for that char
        }
        //else if its not there just don't do anything

        //BUT in either case continue traversing the tree by updating our current node to point to the
        //node of the current letter we are at
        node = node[string[j]]; //update the root to point to a new node
      }
      node[this.endSymbol] = true; //add the * at the end
    }
  }

  //Time O(M),where M is the length of the string we're searching for;
  //Space(1)
  contains(string) {
    // loop through string
    //check if current char is contained in a root=>If so move on to thatroot's hash table
    //and check the next char there and so on ..
    //if we looped till the end of the string check if there is an * in the tree
    //if theres' no *  return false
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!node[string[i]]) {
        return false;
      } else {
        node = node[string[i]]; //keep traversing down the suffix trie
      }
    }
    return !!node[this.endSymbol]; //once we looped through all the letters check if * is in the end of the trie
    //if so it means we founf the whole string we were looking for
    //or return this.endSymbol in node
  }
}
