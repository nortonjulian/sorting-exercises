function bubbleSort(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            count++;
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp
            }
        }
    }
    console.log("TOTAL COUNT:", count);
    return nums
}

module.exports = bubbleSort;
