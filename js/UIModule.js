
var UIModule = (function () {

    var UISelectors = {
        subjectSelector: ".add-subject",
        studentSelector: ".add-student-name",
        gradeSelector: ".add-grade",
        buttonSelector: ".add-btn",
        passedCounterSelector: '.exam-passed-count',
        failedCounterSelector: '.exam-failed-count',
        passedListSelector: '.passed-list',
        failedListSelector: '.failed-list',
        passedPercentageSelector: '.exam-passed-percentage',
        failedPercentageSelector: '.exam-failed-percentage',
        totalSelector: '.exam-total'

    }

    var subjectInput = document.querySelector(UISelectors.subjectSelector);
    var studentInput = document.querySelector(UISelectors.studentSelector);
    var gradeInput = document.querySelector(UISelectors.gradeSelector);

    var passedCounter = document.querySelector(UISelectors.passedCounterSelector);
    var failedCounter = document.querySelector(UISelectors.failedCounterSelector);
    var passedList = document.querySelector(UISelectors.passedListSelector);
    var failedList = document.querySelector(UISelectors.failedListSelector);
    var passedPercentage = document.querySelector(UISelectors.passedPercentageSelector);
    var failedPercentage = document.querySelector(UISelectors.failedPercentageSelector);

    var status = {
        OK: "OK",
        MISSING_DATA: "All inputs have to be filled",
        MISSING_SUBJECT: "Please insert subject",
        MISSING_STUDENT: "Please insert student name",
        MISSING_GRADE: "Please insert a grade",
        INVALID_NAME: "Invalid name",
    };

    function getFormData() {
        var formData = {};
        formData.subject = subjectInput.value;
        formData.student = studentInput.value;
        formData.grade = gradeInput.value;

        return formData;
    }

    //validation
    function validateData(subject, student, grade) {
        if (subject == "" || student == "" || grade == "") {
            return status.MISSING_DATA;
        }

        if (student.indexOf(' ') == -1) {
            return status.INVALID_NAME;

        }

        return status.OK;
    }

    //error display
    function setError(message) {
            alert(message);
    }

    //change text
    var changeText = function (selector, text) {
        return document.querySelector(selector).innerText = text;
    }

    var changeValue = function (selector, value) {
        return document.querySelector(selector).value = value;
    }

    var createAndAppend = function (text, selector) {

        var newEl = document.createElement('p');
        var newText = document.createTextNode(text);
        newEl.appendChild(newText);
        var someList = document.querySelector(selector);
        someList.appendChild(newEl);


    }

    return {
        UISelectors: UISelectors,
        status: status,
        getFormData: getFormData,
        validateData: validateData,
        setError: setError,
        changeText: changeText,
        changeValue: changeValue,
        createAndAppend: createAndAppend


    }
})();