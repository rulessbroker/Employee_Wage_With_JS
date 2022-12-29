// UC1 - Ability to check Employee Present or Absent

function getAttendance() {
    let checkStatus =  Math.floor(Math.random() * 10) %  2;
    if(checkStatus == 0)
        console.log("Employee is absent");
    else
        console.log("Employee is present");
    }

    // getAttendance();

    // UC2 - Ability to calculate daily employee wage
    // UC3 - Refactoring code to write function

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

    // getPartTime();

    // Calculate Wages For month with 20 Working days

    function getWagePerMonth() {
			
        let empHr = 0;
        let total = 0;
        let days = 0;
        let workHr = 0;
        
        while( days<20 ) {
        let emp =  Math.floor(Math.random() * 10) %  3;
        
        switch(emp) { 
            case 0:
                console.log("Employee is present");
                empHr = 8;
                break;
            case 1:
                console.log("Employee is PartTime ");
                empHr = 4;
                break;
            case 2:
                console.log("Employee is Absent");
                empHr = 0;
                break;
            default:
                console.log("condition does not exit");
        }
        let dailyWage = (SALARY_PER_HR * empHr);
        total = (total + dailyWage);
        days = (days + 1);
        workHr = (workHr + empHr);
        }
        console.log("total salary will be :" + total);
    
        console.log("total working hours will be:" + workHr);
        
    }

    // getWagePerMonth();


    // UC5 - Calculate Wages Till Condition

    function maxHrsReached() {
        let empHr = 0;
        let total = 0;
        let days = 0;
        let workHr = 0;
        
        while(days < 20 && workHr < 160) {
        let emp =  Math.floor(Math.random() * 10) %  3;
        switch(emp) { 
            case 0:
                console.log("Employee is present");
                empHr = 8;
                break;
            case 1:
                console.log("Employee is part time");
                empHr = 4;
                break;
            case 2:
                console.log("Employee is absent");
                empHr = 0;
                break;
            default:
                console.log("condition does not exist");
        }
        
        let dailyWage = (SALARY_PER_HR * empHr);
        total = (total + dailyWage);
        days = (days+1);
        workHr = (workHr + empHr);
        }
        
        console.log("totalsalary will be: " + total);
        console.log("total working days will be: " + days);
        console.log("total working hours will be: " + workHr);
    }

    maxHrsReached();
