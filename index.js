/* Your Code Here */
const createEmployeeRecord = employeeArr => {
    const employeeRecord = {
        firstName: employeeArr[0],
        familyName: employeeArr[1], 
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;
}

const createEmployeeRecords = employeesArr => {
    return employeesArr.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(searchDate){
    let clockIn = this.timeInEvents.find(e => {
        return e.date === searchDate;
    })

    let clockOut = this.timeOutEvents.find(e => {
        return e.date === searchDate;
    })

    let payOwed = (clockOut.hour - clockIn.hour)/100
    return payOwed;
}

function wagesEarnedOnDate(searchDate){
    let payRate = hoursWorkedOnDate.call(this, searchDate) * this.payPerHour
    //*parseInt* is for converting a non integer number to an int and *parseFloat* is for converting a non float (with out a decimal) to a float (with a decimal)
    return parseFloat(payRate);
}

/*
 We're giving you this function. Take a look at it, you might see some usage that's new and different. That's because we're avoiding a well-known, but sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available for you to use if you need it!
 */

        const allWagesFor = function () {
            const eligibleDates = this.timeInEvents.map(function (e) {
                return e.date
            })

            const payable = eligibleDates.reduce(function (memo, d) {
                return memo + wagesEarnedOnDate.call(this, d)
            }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

            return payable
        }


function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(function(rec){
       return rec.firstName === firstName
    })
}

function calculatePayroll(arr){
    return arr.reduce(function(accumulator, currentValue){
        return accumulator + allWagesFor.call(currentValue)
    }, 0)
}

