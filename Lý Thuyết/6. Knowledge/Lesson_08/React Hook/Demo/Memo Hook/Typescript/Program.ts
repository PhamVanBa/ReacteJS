
// Init cache
const cache = [];

const sum = (a: number, b: number) => {

    const key = `${a}_${b}`;
    const synmetricKey = `${b}_${a}`

    // Return cache if found
    if (cache[key]) {
        return cache[key];
    }

    if (cache[synmetricKey]) {
        return cache[synmetricKey];
    }
 
    // Calculate
    console.log("Caculating...")
    const result = a + b;

    // save to cache
    cache[key] = result;
    cache[synmetricKey] = result;

    return result;
}

// Tính toán và lưu cache, trả về 5
console.log(sum(2, 3));

// Phát hiện đã có trong cache, trả về 5
console.log(sum(3, 2));

// Ko có trong cache, tính toán, lưu cache và trả về 3
console.log(sum(1, 2));

