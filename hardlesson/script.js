"use strict";
let lan = prompt("Введите ru или en", "ru");

console.log("Через if");
if (lan === "ru") {
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
} else {
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
}
console.log("Через switch-case");

switch (lan) {
    case "ru":
        console.log("Понедельник");
        console.log("Вторник");
        console.log("Среда");
        console.log("Четверг");
        console.log("Пятница");
        console.log("Суббота");
        console.log("Воскресенье");
        break;
    case "en":
        console.log("Monday");
        console.log("Tuesday");
        console.log("Wednesday");
        console.log("Thursday");
        console.log("Friday");
        console.log("Saturday");
        console.log("Sunday");
        break;
}
console.log("Через многомерный массив");
let arr = [];
arr["ru"] = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
];
arr["en"] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
console.log(arr[lan]);

let namePerson = prompt("Введите имя");
let result =
    namePerson === "Артем" ?
    "Директор" :
    namePerson === "Максим" ?
    "Преподаватель" :
    "студент";
console.log(result);