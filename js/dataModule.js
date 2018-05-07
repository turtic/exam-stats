var dataModule = (function () {

    var passFailed = {
        passed: 0,
        failed: 0,
        total: function () {
            return this.passed + this.failed;
        },
        percent: function (x) {
            var a = x * 100 / this.total();
            return a.toPrecision(4) + '%';
        }
    }

    var Subject = function (name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function () {
        return this.name
    }

    var Student = function (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Student.prototype.getStudentData = function () {
        return this.name + ' ' + this.surname;
    }

    var Exam = function (subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    Exam.prototype.getExamInfo = function () {
        return this.subject.name + ' ' + this.student.getStudentData()
    };

    Exam.prototype.hasPassed = function () {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }

    var createExam = function (subjName, studentName, grade) {

        var ourSubject = new Subject(subjName);

        var res = studentName.split(" ");
        res[0] = res[0].charAt(0).toUpperCase() + res[0].slice(1);
        res[1] = res[1].charAt(0).toUpperCase() + res[1].slice(1);

        var ourStudent = new Student(res[0], res[1]);

        var xyExam = new Exam(ourSubject, ourStudent, grade);

        return xyExam;

    }




    return {
        subject: Subject,
        student: Student,
        exam: Exam,
        passFailed: passFailed,
        createExam: createExam
    }




})();