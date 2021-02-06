// Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

// Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

// After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

// Example 1:
// Input:
// accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
// Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
// Explanation:
// The first and third John's are the same person as they have the common email "johnsmith@mail.com".
// The second John and Mary are different people as none of their email addresses are used by other accounts.
// We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
// ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
// Note:

// The length of accounts will be in the range [1, 1000].
// The length of accounts[i] will be in the range [1, 10].
// The length of accounts[i][j] will be in the range [1, 30].

//build graph based from accounts
var accountsMerge = function (accounts) {
  let graph = {}; //store each email as a key and asiign to it a value of Set of emails to which the current email is connected(any emails following it in the same account)
  let nameDict = {}; ////link every email to the account it belongs

  for (let acc of accounts) {
    let name = acc[0];
    nameDict[acc[1]] = name;
    for (let i = 1; i < acc.length; i++) {
      if (!graph[acc[i]]) graph[acc[i]] = new Set();
      nameDict[acc[i]] = name;
      //if in the account there're more than 1 email =>let's connect it to each other

      if (i != 1) {
        graph[acc[1]].add(acc[i]);
        graph[acc[i]].add(acc[1]);
      }
    }
  }

  let res = [];
  let visited = new Set();

  //will traverse graph using DFS
  let dfs = function (key) {
    visited.add(key);
    let emails = [key];
    graph[key].forEach((e) => {
      if (!visited.has(e)) {
        emails.push(...dfs(e)); //whatever was already in emails add the result of DFS on email from graph
      }
    });

    return emails;
  };

  for (let key in graph) {
    if (!visited.has(key)) {
      let temp = dfs(key); //we'll get an array of all the emails that belong to one user
      temp.sort();
      temp.unshift(nameDict[temp[0]]); //add the name of the account owner
      res.push(temp); //add all the emails
    }
  }

  return res;
};
