
function countIslands (mapStr) {
    island = mapStr.split('\n');
    for(var i=0; i<island.length; i++){
      island[i] = island[i].split('');
    }
    var islandCount = 0;
    
    for(var r=0; r<island.length; r++ ){
      for(var c=0; c<island[0].length; c++){
        if(isLand(r,c)) {
          findIslands(r,c);  
        
          islandCount++;
        }
      }
    }
   
    function findIslands(row,col) {
      if(isLand(row,col)){
        setLand(row,col,islandCount);
      }
      if(isLand(row, col+1)) {
        setLand(row, col+1,islandCount);
        findIslands(row, col+1);
      }
      if(isLand(row, col-1)) {
        setLand(row, col-1,islandCount);
        findIslands(row, col-1);
      }
      if(isLand(row+1, col)) {
        setLand(row+1, col,islandCount);
        findIslands(row+1, col);
      }
      if(isLand(row-1, col)) {
        setLand(row-1, col,islandCount);
        findIslands(row-1, col);
      }
    }
    
    function isLand(row, col) {
      if(!isValid(row,col)){
        return false;
      }
      return (island[row][col] === "0")
    }
    
    function setLand(row, col, currentIsland) { 
      island[row][col] = currentIsland + 1; 
    }
  
    function isValid(row, col) { 
      return ( (row >= 0 && row < island.length) && (col >= 0 && col < island[0].length) )
    }
    
    return islandCount;
  } 
  