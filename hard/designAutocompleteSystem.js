const AutocompleteSystem = (sentences, times) => {
    this.suffixTrie = {};
    this.inputString = "";
    for (let i = 0; i < sentences.length; i++) {
      this.insert(sentences[i], times[i]);
    }
    //   console.log("trie", this.suffixTrie);
  };
  
  AutocompleteSystem.prototype.insert = function (sentence, times) {
    let node = this.suffixTrie;
    for (let char of sentence) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.endSymbol = true;
    node.times = node.times + 1 || times;
  };
  AutocompleteSystem.prototype.input = function (c) {
    if (c === "#") {
      this.insert(this.inputString, 1);
      this.inputString = "";
      return [];
    }
  
    let output = {};
    this.inputString += c;
    let node = this.suffixTrie;
    // console.log('inputString',this.inputString)
    //traverse the input in order to find if char  is in the Trie
    for (let char of this.inputString) {
      if (node[char]) node = node[char];
      else return [];
    }
  
    const DFS = (root, char) => {
      for (let key in root) {
        //found a complete sentence
        if (key === "endSymbol") {
          if (!output[root.times]) output[root.times] = [];
          output[root.times].push(char);
          output[root.times].sort();
        }
        // console.log('output',output)
        DFS(root[key], char + key);
      }
    };
  
    DFS(node, this.inputString);
    let sorted = [];
    let sortedKeys = [...Object.entries(output)].sort((a, b) => b[0] - a[0]);
    // console.log('sortedKeys',sortedKeys);
    for (let key of sortedKeys) {
      sorted.push(...key[1]);
    }
    // console.log('sorted',sorted);
    return sorted.slice(0, 3);
  };