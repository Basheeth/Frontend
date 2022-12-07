

function Person(fi,ls,fc,fn){ 
    this.firstName = firstName;
    this.lastNumber = lastNumber;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    // this.multiplyFavoriteNumber =function(num){
    //   return num*this.favoriteNumber;
    // }
  }
  
  Person.prototype.multiplyFavoriteNumber = function(){
    return num*this.favoriteNumber;
  }
  
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
  let sae = new Array();
  sae = [2,3,4,5,2,3,2,2,2];
  console.log(sae);
  console.log(sae.count());
  
  
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
  let sa =new String();
  sa = "vijay Kannan";
  
  
  console.log(sa);
  console.log(sa.count("n"));