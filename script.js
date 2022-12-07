

  Array.prototype.count = function(char){
  
      let count = 0;
      for (let i of this){
        if (i == char){
          count++;
        }
      }
    if (count == 0){
      return -1;
    }
    else{
      return count;
    }
    
  }

  
  
  String.prototype.count = function(char){
    let count = 0;
      for (let i of this){
        if (i == char){
          count++;
        }
      }
    if (count == 0){
      return -1;
    }
    else{
      return count;
    }
  }

  
