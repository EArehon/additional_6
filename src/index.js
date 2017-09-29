module.exports = function zeros(expression) {
  let n = 5;
  let result = 1;
  var zeros = 0;				// количество нулей
  let pos = 0;		  		// стартавая позиция для поиска нулей
  
  
  
  for(let i = 1; i <= n; i++){
    result *= i;
  }
  
  
  
  // считаем нули
  while(true){ 
    let foundPos = String(result).indexOf(0, pos);
    if (foundPos == -1) break;
    
    zeros++;
    pos = foundPos + 1;
  }
  
  return zeros;
}