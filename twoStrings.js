function strings(s1, s2) {
    let map = new Map();
  
    for (let char of s1) {
      map.set(char, true);
    }
    for (let char of s2) {
      if (map.has(char)) return "YES";
    }
    return "NO";
  }