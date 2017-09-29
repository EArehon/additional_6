module.exports = function zeros(expression) {
  let result = '1';
  let zero = 0;


  let commonFac = expression.split('*');

  let singleFac = [];
  let doubleFac = [];

  for (let i = 0; i < commonFac.length; i++) {
    if (~commonFac[i].indexOf("!!")) {
      doubleFac.push(parseInt(commonFac[i]));
    } else {
      singleFac.push(parseInt(commonFac[i]));
    }
  }

  //singleFact
  //console.log('SinglFact: ' + singleFac);
  singleLength = singleFac.length;

  for (let i = 0; i < singleLength; i++) {
    for (let j = 1; j <= singleFac[i]; j++) {
      result = multiply(result, j.toString());
    }
  }

  //doubleFact
  //console.log('doubleFact: ' + doubleFac);
  dubleLength = doubleFac.length;

  for (let i = 0; i < dubleLength; i++) {
    if (doubleFac[i] % 2 == 1) {
      for (let j = 1; j <= doubleFac[i]; j++) {
        if (j % 2 == 1) {
          result = multiply(result, j.toString());
        }
      }
    }
    if (doubleFac[i] % 2 == 0) {
      for (let j = 1; j <= doubleFac[i]; j++) {
        if (j % 2 == 0) {
          result = multiply(result, j.toString());
        }
      }
    }
  }








pos = a.length;

while (true) {
    let foundPos = a.indexOf(0, pos);
    if (a.charAt(pos) != 0) break;
		
    zero++;
    pos--;
}

}







function multiply(first, second) {
  let a = first.split('').reverse();
  let b = second.split('').reverse();

  let comp = [];

  for (let i = 0; i < a.length + b.length; i++) {
    comp[i] = 0;
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      comp[i + j] += (a[i] * b[j]) % 10;
      comp[i + j + 1] += Math.floor((a[i] * b[j]) / 10);

      if (comp[i + j] >= 10) {
        let temp = comp[i + j];
        comp[i + j] %= 10;
        comp[i + j + 1] += Math.floor(temp / 10);
      }
    }
  }

  if (comp[comp.length - 1] == 0)
    comp.pop();



  return comp.reverse().join('');
}
