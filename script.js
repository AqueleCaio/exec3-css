let currentNumber = '';
let oldNumber = '';
let operator = null;

const viewer = document.getElementById('selected_number');
const numbers = document.querySelectorAll('.numbers div');
const operators = document.querySelectorAll('.symbols div');

const updateViewer = () => {
    viewer.innerText = currentNumber;
};

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (number.innerText !== 'C') {
            currentNumber += number.innerText;
        }
        updateViewer();
    });
});

operators.forEach(op => {
    op.addEventListener('click', () => {
        if (op.innerText == 'C') {
            currentNumber = '';
            oldNumber = '';
            operator = null;
        } else if (op.innerText === '=') {
            oldNumber = eval(`${oldNumber} ${operator} ${currentNumber}`);
            currentNumber = '';
            operator = null;
        } else {
            operator = op.innerText;
            oldNumber = currentNumber;
            currentNumber = '';
        }
        updateViewer();
    });
});
