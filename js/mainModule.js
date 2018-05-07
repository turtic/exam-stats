var mainModule = (function (UIModule, dataModule) {

    function addLoginButtonListener() {

        document.querySelector(UIModule.UISelectors.buttonSelector).addEventListener('click', function () {

            //getting inputs
            var formData = UIModule.getFormData();

            //validation
            var validationResult = UIModule.validateData(formData.subject, formData.student, formData.grade);

            if (validationResult !== 'OK') {
                UIModule.setError(validationResult);
                return;
            }


            // creat exam object

            var ourExam = dataModule.createExam(formData.subject, formData.student, formData.grade)

            // pass/fail check

            if (ourExam.hasPassed()) {


                UIModule.createAndAppend(ourExam.getExamInfo(), UIModule.UISelectors.passedListSelector)

                dataModule.passFailed.passed++;

            } else {

                UIModule.createAndAppend(ourExam.getExamInfo(), UIModule.UISelectors.failedListSelector)

                dataModule.passFailed.failed++;

            }

            // total students
            var totalStudents = 'Total students: ' + dataModule.passFailed.total();
            UIModule.changeText(UIModule.UISelectors.totalSelector, totalStudents);
            
            // passed and failed numbers

            UIModule.changeText(UIModule.UISelectors.passedCounterSelector, dataModule.passFailed.passed);
            UIModule.changeText(UIModule.UISelectors.failedCounterSelector, dataModule.passFailed.failed);


            // passed and failed percent

            UIModule.changeText(UIModule.UISelectors.passedPercentageSelector, dataModule.passFailed.percent(dataModule.passFailed.passed));
            UIModule.changeText(UIModule.UISelectors.failedPercentageSelector, dataModule.passFailed.percent(dataModule.passFailed.failed));

            // reset inputs

            UIModule.changeValue(UIModule.UISelectors.studentSelector, '')
            UIModule.changeValue(UIModule.UISelectors.gradeSelector, '')





        });
    }

    return {
        init: function () {
            console.log("lets go...");
            addLoginButtonListener();
        }
    }

})(UIModule, dataModule);

mainModule.init();
