function largestArea(samples) {
    let largestSquare = 0;
    
    for(let i = 0; i < samples.length; i++){
        for(let j = 0; j < samples[i].length; j++){
            if(samples[i][j] === 1){
            if(i > 0 && j > 0){
               samples[i][j] = Math.min(samples[i - 1][j], samples[i][j-1],samples[i - 1][j - 1]) + 1;
            }
            largestSquare = Math.max(samples[i][j],largestSquare);
            }
        }
    }
    return largestSquare;
}

// See Maximal Square #221 on leetcodee