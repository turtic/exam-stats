var subject = function (name) {
    this.name = name;
    this.getSubjectName = function () {
        return this.name
    }
}

var student = function (name, surname) {
    this.name = name;
    this.surname = surname;
    this.getStudentData = function () {
        return {
            name: this.name,
            surname: this.surname
        }
    }
}

var exam = function (subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
    this.getExamInfo = function () {
        return {
            subjName: this.subject.getSubjectName(),
            studentFullName: this.student.getStudentData()
        }
    };
    this.hasPassed = function () {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }
}

