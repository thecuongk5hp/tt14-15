/*
    Định nghĩa lớp Student có các thuộc tính id, name và enrolledCourses. 
    enrolledCourses là một mảng các khóa mà sinh viên đang theo học.
    Định nghĩa lớp Instructor có các thuộc tính id, name.
    Định nghĩa lớp Course có các thuộc tính title, instructor, lessons là mảng các bài học trong khóa học, 
    Assesment là mảng các bài kiểm tra trong khóa học. Mỗi bài kiểm tra đơn giản là một chuỗi để đại diện
    Định nghĩa lớp lesson có các thuộc tính title, asignments là mảng các bài tập trong bài học. 
    Mỗi bài tập đơn giản là một chuỗi để đại diện.
    Xây dựng phương thức enroll cho lớp Student để cho sinh viên đăng ký khóa học.
    Lớp Instructor sẽ có các phương thức createCourse để tạo khóa học, createLesson để tạo các bài cho khóa học, 
    createAsignment để tạo các bài tập cho bài học và createAssesment để tạo bài kiểm tra cho khóa học.
    Tiến hành xây dựng các lớp và tạo ra các thực thể tương ứng để kiểm tra.
*/
class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    createCourse(title: string): Course {
        return new Course(title, this);
    }
    createLesson(title: string, course: Course): Lesson {
        return new Lesson(title, course);
    }
    createAssignment(lesson: Lesson): string {
        return "Assignment for " + lesson.title;
    }
    createAssessment(course: Course): string {
        return "Assessment for " + course.title;
    }
}
class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: string[];
    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    title: string;
    course: Course;
    assignments: string[];

    constructor(title: string, course: Course) {
        this.title = title;
        this.course = course;
        this.assignments = [];
    }
}
let instructor = new Instructor(1, "Thế Cường");
let course = instructor.createCourse("...");
let lesson = instructor.createLesson("...", course);
let assignment = instructor.createAssignment(lesson);
let assessment = instructor.createAssessment(course);
const student = new Student(1, "Ngọc Hà");
student.enroll(course);
console.log("...:");
student.enrolledCourses.forEach((course) => {
    console.log(course.title);
});