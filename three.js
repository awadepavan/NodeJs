const arry = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const result = arry.map((item) => {
    if (item == ' ') {
        return 'empty String';
    }
    return item;
});

console.log(result);
