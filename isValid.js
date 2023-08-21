const isValid = (str) => {

    const stack = [];

    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    const openBrackets = ['(', '[', '{'];


    for (const char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else {
            const current = stack.pop();
            if (!current) {
                return false;
            }
            if (char !== pairs[current]) {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}