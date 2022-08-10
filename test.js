var birthday = new Date(1984, 9, 31, 15, 23, 56);
var birthday2 = new Date(1984, 9, 31, 15, 23, 56);

//get month of the date
console.log(birthday.getMonth());

//get the full year
console.log(birthday.getFullYear());

//get the day of the month
console.log(birthday.getDate());

//get the day of the week
console.log(birthday.getDay());

//get the hour of the date
console.log(birthday.getHours());

//get the number of milliseconds since 1st Jan 1970
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
  console.log("birthdays are equal");
} else {
  console.log("birthdays are not equal");
}
