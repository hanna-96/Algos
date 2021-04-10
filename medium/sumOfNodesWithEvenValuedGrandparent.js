//Time O(n),Space O(h);
var sumEvenGrandparent = function(root) {
    let sum = 0;
    
    function DFS(root,parent,grandparent){
        if(!root) return;
        
        if(grandparent && grandparent.val % 2 === 0) sum+=root.val;
        DFS(root.left,root,parent);
        DFS(root.right,root,parent);
    }
    DFS(root,null,null);
    return sum;
};