
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 4));


const Student = {
    name: "pavan",
    class: "10th",
    Sub: "Math",
    greet: () => {
        console.log(`hi i am ${this.name}`);
    }
};

console.log(Student.greet());