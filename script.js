"use strict";

let task1 = {
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7,
    topic: 'JavaScript'
};
let task2 = {
    startedAt: new Date("2021-01-20:12:00"),
    finishedAt: new Date("2021-01-20:13:00"),
    tasksGiven: 30,
    tasksFinished: 24,
    topic: 'HTML'
};
let task3 = {
    startedAt: new Date("2021-01-20:15:00"),
    finishedAt: new Date("2021-01-20:18:00"),
    tasksGiven: 25,
    tasksFinished: 23,
    topic: 'Function'
};
let task4 = {
    startedAt: new Date("2021-01-20:11:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 50,
    tasksFinished: 35,
    topic: 'CSS'
};
let task5 = {
    startedAt: new Date("2021-01-20:10:30"),
    finishedAt: new Date("2021-01-20:14:00"),
    tasksGiven: 18,
    tasksFinished: 6,
    topic: 'Arrays'
};
let task6 = {
    startedAt: new Date("2021-01-20:12:00"),
    finishedAt: new Date("2021-01-20:14:00"),
    tasksGiven: 10,
    tasksFinished: 10,
    topic: 'Football'
};
let task7 = {
    startedAt: new Date("2021-01-20:14:00"),
    finishedAt: new Date("2021-01-20:20:00"),
    tasksGiven: 30,
    tasksFinished: 13,
    topic: 'Basketball'
};
let task8 = {
    startedAt: new Date("2021-01-20:13:30"),
    finishedAt: new Date("2021-01-20:17:00"),
    tasksGiven: 23,
    tasksFinished: 3,
    topic: 'Tennis'
};
let task9 = {
    startedAt: new Date("2021-01-20:11:30"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 9,
    tasksFinished: 9,
    topic: 'Skiing'
};
let task10 = {
    startedAt: new Date("2021-01-20:17:00"),
    finishedAt: new Date("2021-01-20:21:00"),
    tasksGiven: 14,
    tasksFinished: 12,
    topic: 'Surfing'
};
let arrOfTasks = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10];

//Calculate and add total time of work and finished precent properties to each object
for (let task of arrOfTasks) {
    task['totalTime'] = (task.finishedAt - task.startedAt) / 3600000 + ' hours';
    task['tasksFinishedPrecent'] = Math.floor(((task.tasksFinished / task.tasksGiven) *100)) + '%';
}
document.write(`<table>`);
for (let task of arrOfTasks) {
    document.write(`<tr>`);
    for (let value in task) {
        document.write(`<td>${task[value]}</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);