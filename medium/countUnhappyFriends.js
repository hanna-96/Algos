/*
You are given a list of preferences for n friends, where n is always even.

For each person i, preferences[i] contains a list of friends sorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list. Friends in each list are denoted by integers from 0 to n-1.

All the friends are divided into pairs. The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.

However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:

x prefers u over y, and
u prefers x over v.
Return the number of unhappy friends.

 

Example 1:

Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
Output: 2
Explanation:
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.

PLAN
Store who is paired to whom ai a hash map
Store the preferences of each node in a hash map
     {
        friend0:{preferred friend1:idx of preference,
                preferred friend2 :idx }
         friend1:{preferred friend1:idx of preference,
                preferred friend2 :idx }
         ...
    //}
1.Find out to whom our current guy(i) is paired to
2. Find out what is the preference of current guy's pair
3.Loop through all of the current guys preferences
4.Find what is his desiredFriend at j
5. Find who is desiredFriend paired to
6.Finf the preference(how much that desiredFriend wants to be with his pair)
7. If current guy wants to be paired with another friend MORE than to the one he is currently paired 
AND THAT another friend wants to be paired with current GUY MORE then to the one he is initially paired => COUNT++
*/
var unhappyFriends = function (n, preferences, pairs) {
    const paired = new Map();
  
    for (let [x, y] of pairs) {
      paired.set(x, y);
      paired.set(y, x);
    }
    let ranks = new Map(); // store a friend as a key and it's prefereces BUT as a nested obj where key is his preferredPair and value is the preference
  
    for (let i = 0; i < n; i++) {
      ranks.set(i, new Map());
      for (let j = 0; j < n - 1; j++) {
        ranks.get(i).set(preferences[i][j], j);
      }
    }
  
    let count = 0;
    for (let i = 0; i < n; i++) {
      let isPairedTo = paired.get(i); //0 is paired with 1, 1 is paired with 0
      let howMuchIWantsoBeWithIsPairedTo = ranks.get(i).get(isPairedTo); // returns the idx of preference (The lower idx is => the higher priority is)
      if (howMuchIWantsoBeWithIsPairedTo === 0) continue; // he is HAPPY
      for (let j = 0; j < n - 1; j++) {
        // 2
        let desiredFriend = preferences[i][j]; // ??
        let desiredFriendIsPairedTo = paired.get(desiredFriend); // 2
        let desiredFriendCurrentPairPreference = ranks
          .get(desiredFriend)
          .get(desiredFriendIsPairedTo); // check how much desired friend wants to be paired to its current pair
        // if current guy wants to be paired with another friend MORE than to the one he is currently paired
        //AND THAT another friend wants to be paired with current GUY MORE then to the one ha is initially paired => COUNT++
        if (
          ranks.get(i).get(desiredFriend) < howMuchIWantsoBeWithIsPairedTo &&
          ranks.get(desiredFriend).get(i) < desiredFriendCurrentPairPreference
        ) {
          count++;
          break;
        }
      }
    }
  
    return count;
  };
  