const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




console.log( employees );

for (const employee of employees) {
  console.log( 'Checking bonus for', employee.name );
  bonusCalculator(employee);
}

function bonusCalculator( employee ) {
let bonus = 0;

function reviewRating() {
  if (employee.reviewRating === 5) {
    bonus += 10;
  }
  if (employee.reviewRating === 4) {
    bonus += 6;
  }
  if (employee.reviewRating === 3) {
    bonus += 4;
  } else {
    bonus += 0;
  }
}

function employeeNumber() {
  if (employee.employeeNumber.length >= 4 && employee.reviewRating > 2) {
    bonus += 5;
    console.log( employee.name + ' gets an extra 5% bonus!' );
  }
}

function annualSalary() {
  if (employee.annualSalary > 65000) {
    bonus -= 1;
    console.log( employee.name + " gets a 1% deduction cuz they're too rich" );
  }
}
  function highLow() {
    if (bonus > 13) {
      bonus = 13;
    }
    if (bonus < 0) {
      bonus = 0;
    }
  }


  reviewRating(employee);
  employeeNumber(employee);
  annualSalary(employee);
  highLow();
  let bonusPercent = bonus / 100;
  console.log(bonusPercent)
  let totalBonus = bonusPercent * employee.annualSalary;
  console.log(totalBonus);
  let totalCompensation = totalBonus + Number(employee.annualSalary);
  console.log(totalCompensation);

  let answer = {
    name: employee.name,
    bonusPercentage: bonusPercent,
    totalBonus: totalBonus,
    totalCompensation: totalCompensation
  };
  console.log( answer );
  $("#bonus").append("<li> Name: " + answer.name + " -- Bonus %: " + answer.bonusPercentage + "% -- Total Bonus: $" + answer.totalBonus + " -- Total Compensation: " + answer.totalCompensation + "</li>");
  
  return answer;
}

