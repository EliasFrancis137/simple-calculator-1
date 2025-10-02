const display = document.getElementById('display');
function appendValue(val) {
    display.value += val;
    }
function clearDisplay() {
    display.value = '';
    }
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

//In production apps, using eval() is considered bad practice; 
//safer alternatives are parsing and calculating expressions manually.
//eval() will execute whatever string is in display.value as JavaScript code.