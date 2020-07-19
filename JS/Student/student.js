'use strict';

class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    get fullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this._year = year;
    }

    get getCourse() {
        const date = new Date;

        if (this._year > date.getFullYear()) {
            throw new RangeError('The year of admission to the university is incorrect')
        }

        const course = date.getFullYear() - this._year;

        return date.getMonth() < 8 ? course : course + 1;

    }
}

const student1 = new Student('Ivam', 'Ivanov', 2019);

console.log(`${student1.fullName} studying in the ${student1.getCourse} course`)