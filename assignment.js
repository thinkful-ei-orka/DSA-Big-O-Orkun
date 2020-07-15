'use strict';

// 1. What is the Big O for this?
// 	1.Constant time O(1)
// 	2.linear O(n)

// 2. Even or odd
// 	A:Constant time O(1) because no matter the input the run time will be the same

// 3. Are you here?
// 	A: Polynomial time O(n^k) because there's a nested for loop

// 4. Doubler
// 	A:linear O(n) because its a single for loops that time increase linearly as the array length increases

// 5. Naive search
// 	A:Linear Time  because its a single for loops that time increase linearly as the array length increases

// 6. Creating pairs:
// 	A: Polynomial time O(n^k) because theres a nested for loop

// 7. Compute the sequence
// 	A:the equation is given a number and it outputs a sequence of numbers (the fibinachi sequence) up to the place of the input. linear O(n)

// 8. An efficient search
// 	A:Logarithmic time O(log(n)) because it doesnt go through all of the array. it searches in pieces for what its looking for.

// 9. Random element
// 	A:Constant time O(1) because no matter the input the run time will be the same

// 10. What Am I?
// 	A: The algorithm is checking if the numbers is an odd number. Exponential time O(2^n)

// 11. Tower of Hanoi
// 	A:C->B,C->A,B->A,C->B,A->C,A->B,C->B,A->C,B->A,B->C,A->C,B->A,C->B,C->A,B->A,B->C,A->C,A->B,C->B,A->C,B->A,B->C,A->C
// B:7 moves, 15 moves, 31 moves
// C: Exponential time O(2^n)

function TOH (n,A,C,B){
  if (n===1){
    print(A,C);
    return;
  }
  TOH(n-1,A,B,C);
  TOH(1, A, C, B);
  TOH(n - 1, B, C, A);
}

function print(a,b){
  console.log(`${a}->${b}`);
}

TOH(5, 'A', 'C', 'B');

// 12.1 Counting Sheep
// 13.1 The BigO for the recursive algorithm is Linear O(n)
// 14.1 The BigO for this iterative algorithm is Linear O(n)

function sheepJump(numSheep) {
  for(let i = numSheep; i >= 0; i--) {
    if (i === 0) return console.log('All sheep jumped over the fence');
    console.log(`${i} Another sheep jumped over the fence`);
  }
}
  
sheepJump(3);

// 12.2 Power Calculator
// 13.2 The BigO for the recursive algorithm is Linear O(n)
// 14.2 The BigO for this iterative algorithm is Linear O(n)

function powerCalculator(num, exponent){
  let value=1;
  for (let i=0; i<exponent; i++){
    value *=num;
  }
  return value;
}
console.log(powerCalculator(3,4));

// 12.3 Reverse String
// 13.3 The BigO for the recursive algorithm is Linear O(n)
// 14.3 The BigO for this iterative algorithm is LinearO(n)

function reverseString(str) {
  let newString='';
  for (let i=0; i<=str.length; i++){
    newString +=str.charAt(str.length-i);
  }
  return newString;
}
console.log(reverseString('the world'));

// 12.4 nth Triangular Number
// 13.4 The BigO for the recursive algorithm is Linear O(n)
// 14.4 The BigO for this iterative algorithm is Linear O(n)

const tringularNumber = function (num) {
  let value=0;
  for (let i=0; i<num; i++){
    value +=num-1;
  }
  return value;
};
  
console.log(tringularNumber(3));

// 12.5 String Splitter
// 13.5 The BigO for the recursive algorithm is Linear O(n)
// 14.5 The BigO for this iterative algorithm is Linear O(n)

function stringSpliter(str, sep) {
  const arr = [];
  let leftOver;
  
  for(let i = 0; i < str.length; i++) {
    let index=str.indexOf(sep);
    let cut=str.substring(0,index);
    leftOver=str.substring(index+1,str.length);
    str=leftOver;
    if(index>0){
      arr.push(cut);
    }
  }
  arr.push(leftOver);
  return arr;
}
  
console.log(stringSpliter('11/24/2020', '/'));

// 12.6 Fibonacci
// 13.6 The BigO for the recursive algorithm is Polynomial O(n)
// 14.6 The BigO for this iterative algorithm is Linear O(n)

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result[result.length-1];
}
console.log(compute(5));


// 12.7 Factorial
// 13.7 The BigO for the recursive algorithm is Linear O(n)
// 14.7 The BigO for this iterative algorithm is Exponential O(2^n)

const factorial = function (num) {
  let value=1;
  for (let i = 1; i <= num; i++) {
    value *= i;
  }
  return value;
};
  
console.log(factorial(6));