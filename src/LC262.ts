const moveZeroes = (nums: number[]): void => {
    nums.sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : 0));
};

moveZeroes([0, 1, 0, 3, 12]);
