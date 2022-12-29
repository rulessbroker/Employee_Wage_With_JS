// UC1 - Ability to check Employee Present or Absent

function getAttendance() {
    let checkStatus =  Math.floor(Math.random() * 10) %  2;
    if(checkStatus == 0)
        console.log("Employee is absent");
    else
        console.log("Employee is present");
    }

    getAttendance();
