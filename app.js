function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = parts[0].slice(2);
        numbers = parts[1];
    }

    const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

    // Check for negative numbers
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add("//;\n1;2"));       // Output: 3
console.log(add("1\n2,3"));         // Output: 6
try {
    console.log(add("1,-2,3,-4"));  // Throws an error: "Negative numbers not allowed: -2, -4"
} catch (e) {
    console.error(e.message);
}