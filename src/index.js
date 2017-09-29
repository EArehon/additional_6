module.exports = function function zeros(expression) {
  let n = 5;
  let result = '1';
  let zero = 0;		      		// количество нулей
  let pos = 0;		        		// стартавая позиция для поиска нулей
  
  let commonFac = expression.split('*');
  
  let singleFac = [];
  let doubleFac = [];
  
  for (let i = 0; i < commonFac.length; i++){
  	if (~commonFac[i].indexOf("!!")){
    	doubleFac.push(parseInt(commonFac[i]));
    }
    else{
    	singleFac.push(parseInt(commonFac[i]));
    }
  }

  //singleFact
  for(let i = 0; i < singleFac.length; i++){
    for(let j = 1; j <= singleFac[i]; j++){
			result = multiply(result, j.toString());
    }
  }
 
  
  
  // считаем нули
  while(true){ 
    let foundPos = result.indexOf(0, pos);
    if (foundPos == -1) break;
    
    zero++;
    pos = foundPos + 1;
  }
  
  return zero;
}

function multiply(first, second) {
  let a = first.split('').reverse();
  let b = second.split('').reverse();
  
  let comp = [];
  
  for (let i = 0; i < a.length+b.length; i++)
  {
    comp[i] = 0;
  }
  
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
      comp[i+j] += (a[i] * b[j]) % 10;
      comp[i+j+1] += Math.floor((a[i] * b[j]) / 10);
      
      if(comp[i+j] >= 10){
        let temp = comp[i+j];
        comp[i+j] %= 10;
        comp[i+j+1] += Math.floor(temp / 10);
      }
    }
  }
  
  if(comp[comp.length-1] == 0)
    comp.pop();
    
    

  return comp.reverse().join('');
}