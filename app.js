function add(numbers) {
    if (!numbers) {
        return 0;
    }

    // Replace new lines with commas
    const nums = numbers.replace(/\n/g, ',').split(',').map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add("1\n2,3"));    // Output: 6