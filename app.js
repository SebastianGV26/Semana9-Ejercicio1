const person = {
    name: 'Sebastian',
    age: '23',
    district: 'Comas',
    phone: '914922934' 
};
console.log(person.name);
person.name = 'Jose';
console.log(person.name)
person.lastName = 'Giron';
console.log(person);
delete person.phone;
console.log(person);