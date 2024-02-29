const h1 = document.createElement('h1');
h1.textContent = 'Responsive Calculator';
h1.setAttribute('id','title');

const paragraph = document.createElement('p');
paragraph.textContent = 'This is a Simple Calculator that performs Addition , Subtraction , Division , Multiplication & Modulus (also can use keyboard keys to perform calculations)';
paragraph.setAttribute('id','description');

const header = document.createElement('div');
header.innerHTML= `
<input type="text" id="result" readonly>
<br>
<input type="button"  value="C" onclick="clearLast()">
<input type="button"  value="CE" onclick="clearDisplay()">
<input type="button"  value="=" onclick="calculate()">
<br>
<input type="button"  value="1" onclick="appendToDisplay('1')">
<input type="button"  value="2" onclick="appendToDisplay('2')">
<input type="button"  value="3" onclick="appendToDisplay('3')">
<input type="button"  value="+" onclick="appendToDisplay('+')">
<br>
<input type="button" value="4" onclick="appendToDisplay('4')">
<input type="button"  value="5" onclick="appendToDisplay('5')">
<input type="button"  value="6" onclick="appendToDisplay('6')">
<input type="button"  value="-" onclick="appendToDisplay('-')">
<br>
<input type="button" value="7" onclick="appendToDisplay('7')">
<input type="button"  value="8" onclick="appendToDisplay('8')">
<input type="button"  value="9" onclick="appendToDisplay('9')">
<input type="button"  value="*" onclick="appendToDisplay('*')">
<br>
<input type="button"  value="." onclick="appendToDisplay('.')">
<input type="button"  value="0" onclick="appendToDisplay('0')">
<input type="button"  value="%" onclick="appendToDisplay('%')">
<input type="button"  value="/" onclick="appendToDisplay('/')">
<br>
<input type="button" value="MC" onclick="clearMemory()">
<input type="button" value="M+" onclick="addToMemory()">
<input type="button" value="M-" onclick="subtractToMemory()">
<input type="button" value="MR"onclick="getMemory()">
`
header.setAttribute('class','calculator');


document.body.append(h1,paragraph,header);

// function to dispaly the values/Numbers
function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

// function to clear the display
function clearDisplay() {
    document.getElementById('result').value = '';
}

// function to calculate the clicked values/Numbers
function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

//function to clear a single number/values
function clearLast() {
    var screen = document.getElementById('result');
    var currentValue = screen.value;
    var newValue = currentValue.substring(0, currentValue.length - 1);
    screen.value = newValue;
}

// function to store the history/memeory
function addToMemory(num) {
    let memory = parseFloat(localStorage.getItem('memory')) || 0;
    memory += num;
    localStorage.setItem('memory', memory);
  }
  
  
// function to delete/earse the history/memeory
function subtractToMemory(num) {
    let memory = parseFloat(localStorage.getItem('memory')) || 0;
    memory -= num;
    localStorage.setItem('memory', memory);
  }
  
// Function to clear all the history/memeory
  function clearMemory() {
    localStorage.removeItem('memory');
  }
  

// Function to retrieve memory value
  function getMemory() {
    return parseFloat(localStorage.getItem('memory')) || 0;
  }


document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
      appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendToDisplay(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
        clearDisplay()
    }else if(key !== '0' && key !== '1' && key !== '2' && key !== '3'
          && key !== '4' && key !== '5' && key !== '6' && key !== '7'
          && key !== '8' && key !== '9' && key !== '+' && key !== '-' 
          && key !== '*' && key !== '/' && key !== '%' && key !== 'Enter'
          && key !== 'backspace' && key !== 'shift')
    {
     console.log(alert('Only Numbers are Allowed!!!')) ;
    }
  });

