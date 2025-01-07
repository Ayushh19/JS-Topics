function mul(a){
  return function(b){
    return function(c){
      return a*b*c;
    }
  }

}


const mulby2 = mul(2);
const mulby2and3 = mulby2(3);
const mulby2and3and4 = mulby2and3(4);

console.log(mulby2and3and4);