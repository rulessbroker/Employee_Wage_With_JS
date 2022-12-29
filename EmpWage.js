// UC1 - Ability to check Employee Present or Absent

function getAttendance() {
    let checkStatus =  Math.floor(Math.random() * 10) %  2;
    if(checkStatus == 0)
        console.log("Employee is absent");
    else
        console.log("Employee is present");
    }

    getAttendance();

    // UC2 - Ability to calculate daily employee wage

    const   PART_TIME_PRESENT = 2;
    const   PART_TIME_WORK_HR = 4;
    const   FULL_TIME_PRESENT = 1;
    const   FULL_TIME_WORK_HR = 8;
    const   SALARY_PER_HR = 20;

    function getPartTime() {
        let workHr = 0;
        let dailyWage = 0;
        let emp = Math.floor(Math.random() * 10) %  3;

        if (emp == 	FULL_TIME_PRESENT) {
        console.log("Employee is present");
        workHr = FULL_TIME_WORK_HR;
        }
        else if (emp == PART_TIME_PRESENT) {
            console.log("Employee is part time");
            workHr = PART_TIME_WORK_HR;
        }
        else{
        console.log("Employee is absent");
        workHr = 0;
        }
        
        dailyWage= (SALARY_PER_HR * workHr);
        console.log("salary will be :" + dailyWage);
        
    }

    getPartTime();
