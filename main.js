let a, b, c, d
function calculate () {
  a = document.getElementById('billAmount').value
  b = [0.03, 0.05, 0.07, 0.09, 0.12]
  c = document.getElementById('people').value
  d = document.getElementById('service').value
//  console.log("A: ",a)
//  console.log("B: ",b)
//  console.log("C: ",c)
//  console.log("D: ",d)
  const tip = (a * b[d - 1]) / c
  console.log(tip)
  document.getElementById('output').value = Number(tip).toFixed(2)
}

document.getElementById('berechnen').addEventListener('click', calculate);


//  a billAmount
//  b serviceValueList
//  c people
//  d - 1 = Index des service
