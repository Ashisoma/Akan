function getAkanName () {
  var yearOfBirth = document.getElementById("year-input").value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");
  
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }
  let myGenderValue = getGender();
  console.log(myGenderValue);
  
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }
  function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
  }
  
  let monthValid = monthValidator();
  let dayValid = dayValidator();
  
  let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
  

let daysOfWeek  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday" ,"Friday" ,"Saturday"];
let maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame" ];
let femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let index = Math.abs(dayOfWeekNumber - 1);
  console.log(index);

console.log(index); if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanName[index];
    console.log("You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanName[index]);
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    //document.getElementById('result');
    document.querySelector('h1').textContent = "Hello" + " " + maleAkanName[index];
    //return false;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanName[index];
    console.log("You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanName[index]);
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
   //document.getElementById('result');
    document.querySelector('h1').textContent = "Hello" + " " + femaleAkanName[index];
    //return false;
  } else 
    alert("You entered an invalid month or day, please try again");
  }