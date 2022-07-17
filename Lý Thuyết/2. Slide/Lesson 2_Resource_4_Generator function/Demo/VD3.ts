function* generateFibonaci() {
    let prev = 0;
    let current = 1;

    while (true) {
        yield current;
        // Calculate the next number
        const next = prev + current;
        prev = current;
        current = next;
    }
}
const fibo = generateFibonaci();
console.log(fibo.next()); // { value: 1, done: false }
console.log(fibo.next()); // { value: 1, done: false }
console.log(fibo.next()); // { value: 2, done: false }
console.log(fibo.next()); // { value: 3, done: false }
console.log(fibo.next()); // { value: 5, done: false }

