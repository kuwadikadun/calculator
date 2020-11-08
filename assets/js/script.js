// Membuat variabel dan mengambil element class 'number'
const numbers = document.querySelectorAll('.number');

// Membuat variabel dan mengambil element class 'calculator-screen'
const calculatorScreen = document.querySelector('.calculator-screen');

// Membuat variabel dan membuat function update screen
const updateScreen = (number) => {
  calculatorScreen.value = number;
}

// Membuat variabel dan membuat function input number
const inputNumber = (number) => {
  if(currentNumber === '0') {
    currentNumber=number;
  } else {
    currentNumber += number;
  }
}

//  Membuat variabel dan mengambil element class 'operator'
const operators = document.querySelectorAll('.operator');

// Membuat variabel dan membuat function input operator
const inputOperator = (operator) => {
  if(calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber ='0';
}

// Membuat variabel dan mengambil element 'equal-sign'
const equalSign = document.querySelector('.equal-sign');

// Membuat variabel dan membuat function kalkulasi
const calculate = () => {
  switch(calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
}

// Membuat variabel dan mengambil element 'all-clear'
const clearBtn = document.querySelector('.all-clear');

// Membuat variabel dan membuat function clear all / AC
const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
}

// Membuat variabel dan mengambil element 'decimal'
const decimal = document.querySelector('.decimal');

// Membuat variabel dan membuat function input decimal
const inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return;
  }
  currentNumber+=dot;
}

// Membuat variabel dan mengambil element 'percentage'
const percentage = document.querySelector('.percentage');

// Membuat variabel dan membuat function kalkulasi persen
const percent = () => {
  prevNumber = currentNumber;
  currentNumber = parseFloat(prevNumber) / parseInt('100');
}

// Membuat variabel untuk memasukkan nomor sebelumnya
let prevNumber = '';

// Membuat variabel untuk memasukkan operator
let calculationOperator = '';

// Membuat variabel untuk tampilan nilai saat ini
let currentNumber = '0';


// Membuat click event tombol number dan menampilkan pada calculator screen
numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// Membuat click event input operator
operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

// Membuat click event tombol sama-dengan dan menjalankan kalkulasi serta menampilkan pada calculator screen
equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
});

// Membuat click event untuk tombol all-clear / AC
clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

// Membuat click event tombol decimal dan menampilkannya pada calculator screen
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// Membuat click event tombol persen dan menjalankan kalkulasi persen serta menampilkan pada calculator screen
percentage.addEventListener('click', () => {
  percent();
  updateScreen(currentNumber);
});