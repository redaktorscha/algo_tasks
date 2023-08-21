const isPrime = (x) => {
    for (let i = 2; i < x; i += 1) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}


// const primeNumber1 = (n) => {
//     const result = [];

//     for (let i = 2; i <= n; i += 1) {
//         result.push(i);
//     }

//     return result.filter(x => isPrime(x));
// }


// console.log(primeNumber1(21));

const primeNumber = (n) => {
    const result = new Array(n + 1).fill(0).map((x, i) => i).slice(2);

    for (let i = 0; i <= result.length; i += 1) {
        if (result[i] !== null) {
            for (let j = i + result[i]; j <= result.length; j += result[i]) {
                result[j] = null;
            }
        }
    }

    return result.filter(Boolean);
}


