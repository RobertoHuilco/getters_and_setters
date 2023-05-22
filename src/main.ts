class Student {
    name: string;
    semester: number;
    course: string;
   
    constructor(nm: string, sm: number, cs: string) {
    this.name = nm;
    this.semester = sm;
    this.course = cs;
    }
   
    // Getter method
    public get courses() {
    return this.course;
    }
   
    public set courses( thecourse: string) {
    this.course = thecourse;
    }
   }
   
   // Access any property of the Student class,
   let student = new Student("Roberto Huilco", 3, "Desarrollo"
   );
   
   // Setter call
   student.course = "Programacion visual";
   
   // Getter call
   console.log("Su curso es " + student.courses + "el estudiante es " + student.name);
   