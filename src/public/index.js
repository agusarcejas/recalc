const $display = document.querySelector('.display')
const $buttons = document.querySelector('.buttons')

const operations = ['-', '+', '*', '/', '^'];

let currentDisplay = "";
let operation = null;
let reset = false;


$buttons.addEventListener('click', async (e) => {
    const nextAction = e.target.name

    if (nextAction === "=") {
        const [firstArg, secondArg] = currentDisplay.split(operation)

        let result;

        if (operation === "-") {
            result = await calculateSub(firstArg, secondArg)
        }

        if (operation === "+") {
            result = await calculateAdd(firstArg, secondArg)
        }

        if (operation === "*") {
            result = await calculateMul(firstArg, secondArg)
        }

        if (operation === "/") {
            if (secondArg === 0) {
                result = "Error"
            } else {
                result = await calculateDiv(firstArg, secondArg)
            }
        }

        if (operation === "^") {
            result = await calculatePow(firstArg, secondArg)
            if (result > 100000) {
                result = "Error"
            }
        }

        reset = true;
        return renderDisplay(result);
    }

    if (operations.includes(nextAction)) {
        operation = nextAction;
    }

    if (reset) {
        reset = false;
        operation = null;
        renderDisplay(nextAction);
    } else {
        renderDisplay(currentDisplay + nextAction);
    }
})

async function calculateSub(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/sub/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}

async function calculateAdd(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/add/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}

async function calculateMul(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/mul/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}

async function calculateDiv(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/div/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}

async function calculatePow(firstArg, secondArg) {
    const resp = await fetch(`/api/v1/pow/${firstArg}/${secondArg}`)
    const { result } = await resp.json();

    return result;
}

function renderDisplay(chars) {
    currentDisplay = chars;
    $display.value = chars;
}

