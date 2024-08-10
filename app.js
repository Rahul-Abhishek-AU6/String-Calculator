function add(numbers) {
    if (!numbers) {
        return 0;
    }

    const nums = numbers.split(',').map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add(""));         // Output: 0
console.log(add("1"));        // Output: 1
console.log(add("1,5"));      // Output: 6
