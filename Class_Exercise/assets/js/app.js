// We don't add script in the head because the browser will load the 
// from top to bottom and it will not load the body of the html unless
// finishes loading the script. We don't want that. We want the website to load 
// its visual parts while loading the script file

// var firstName; 
// var lastName; 
// var age; 
// var job;
// firstName = prompt("Enter Your First Name");
// lastName = prompt("Enter Your Last Name");
// job = prompt("What is Your Profession ?")
// age = prompt("Enter Your Age");
// console.log("Here is your Profile ")
// console.log("Full Name: " + firstName + " "+lastName);
// console.log("Profession : " + job);
// console.log("Age : " + age + " " + "years old");

// let tempAge;
// //Eligible to vote 
// let isEligibleToVote;
// tempAge = parseInt(age);
// // check Eligibility 
// if (tempAge >= 18) {
//     isEligibleToVote = true;
// } 
// else {
//     isEligibleToVote = false;
// }
// console.log("Is Eligible to Vote : " + isEligibleToVote);


// let familyMember = new Array();
// //number of family 
// let numberOfFamily;
// numberOfFamily = prompt("Number of Family  ? ");
// //Receiving the family number 
// for (let i = 0; i < parseInt(numberOfFamily); i++) {
//     familyMember[i] = prompt("Your Family  Members " + (i + 1));
// }
// console.log("Family Members ");
// //Displaying the family member with foreach
// familyMember.forEach(function(index, member) {
//    console.log("Family Member  " + (index + 1) + " : " + member);
// });

// var birthYear;          //Changing the var age to birth Year
// //Some changes 

// birthYear = prompt("Enter Your Birth Year");
// var calculatedAge = ageCalc(birthYear);
// // need to exchange place


// console.log("Age : " + calculatedAge + " " + "years old");

// //age calculator function
// function ageCalc(birthYear)
// {
//     return new Date().getFullYear() - birthYear;

// }

// let calcBmi = function(weight, height) {
//     let bmi = weight/(height * height);
//     let status;
//     if(bmi < 18) status = "underweight"
//     else{
//         if(bmi > 18 && bmi < 25) status = "Normal"
//         else{
//             if(bmi > 25 && bmi < 30) status = "Overweight"
//             else{
//                 status = "Obese"
//             }
//         }
//     }
//     bmi = bmi.toFixed(2)
//     return {bmi, status}
// }

// (function() {

//     console.log("Here is your Profile ")
//     console.log("Full Name: " + firstName + " " + lastName);
//     console.log("Profession : " + job);
//     console.log("Age : " + tempAge + " " + "years old");
//     console.log("Is Eligible to Vote : " + isEligibleToVote);

//     console.log("Family Members ");

//     //Displaying the family member with foreach
//     familyMember.forEach(function(member, index) {
//         console.log("Family Member  " + (index + 1) + " : " + member);
//     });

//     // call to bmi calculator 
//     calcBmi(weight, height);
// })();




// OBJECT
// let personProfile = {
//     firstName: "",
//     lastName: "",
//     birthYear: "",
//     job: "",
//     age: "",
//     isEligibleToVote: false,
//     familyMembers: [],
//     weight: 0,
//     height: 1,
//     ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
//     checkVote: function() {
//         let tempAge = this.ageCalc();
//         if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
//     },
//     calcBmi: function() { 
//         return (this.weight)/(this.height*this.height)
//     }
// };

// personProfile.firstName = prompt("Enter Your First Name");
// personProfile['firstName'] = personProfile['firstName'] + " EDITED"
// personProfile.lastName = prompt("Enter Your Last Name");
// personProfile.job = prompt("What is Your Profession ?");
// personProfile.birthYear = prompt("Enter Your Birth Date");
// personProfile.weight = prompt("Your Weight in Kg  ? ");
// personProfile.height = prompt("Your Height in M  ? ");
// let numberOfFamily = prompt("Number of Family  ? ");

// //Receiving the family number 
// for (let i = 0; i < parseInt(numberOfFamily); i++) {
//     personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
// }
// // call age and check vote fun
// personProfile.ageCalc();
// personProfile.checkVote();
// // Adding Self Invoking Function Expression 
// (function() {

//     console.log("**************************************************************")
//     console.log("Here is your Profile ")
//     console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
//     console.log("Profession : " + personProfile.job);
//     console.log("Age : " + personProfile.age + " " + "years old");
//     console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
//     console.log("Family Members ");
//     //Displaying the family member with foreach
//     personProfile.familyMembers.forEach(function(member, index) {
//         console.log("Family Member  " + (index + 1) + " : " + member);
//     });
//     // call bmi calculator 
//     personProfile.calcBmi();
//     console.log("**************************************************************")

// })();

