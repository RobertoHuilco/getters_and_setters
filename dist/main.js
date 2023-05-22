"use strict";
class Student {
    constructor(nm, sm, cs) {
        this.name = nm;
        this.semester = sm;
        this.course = cs;
    }
    // Getter method
    get courses() {
        return this.course;
    }
    set courses(thecourse) {
        this.course = thecourse;
    }
}
// Access any property of the Student class,
let student = new Student("Roberto Huilco", 3, "Desarrollo");
// Setter call
student.course = "Programacion visual";
// Getter call
console.log("Su curso es " + student.courses + "el estudiante es " + student.name);
