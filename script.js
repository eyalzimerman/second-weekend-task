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
//array of tasks, all tasks are objects
let arrOfTasks = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10];

//Calculate and add total time of work and finished precent properties to each object
for (let task of arrOfTasks) {
    task['totalTime'] = (task.finishedAt - task.startedAt) / 3600000;
    task['tasksFinishedPrecent'] = Math.floor(((task.tasksFinished / task.tasksGiven) *100));
    task.startedAt = task.startedAt.toLocaleTimeString(); //saved only the local time
    task.finishedAt = task.finishedAt.toLocaleTimeString(); //saved only the local time
}

// add array of headers to the table
let arrOfHeaderTable =  ['Started At', 'Finished At', 'Ttasks Given', 'Tasks Finished', 'Topic', 'Total Time', 'Tasks Finished Precent'];
document.write(`<table>`);

// for loop to create the headers of the table
document.write(`<tr>`);
for (let head of arrOfHeaderTable) {
    document.write(`<th>${head}</th>`);
}
//create the table body and put all the same property value in same row
//check if the property is totalTime and tasksFinishedPrecent to give them a class by the value
document.write(`</tr>`);
for (let tasks of arrOfTasks) {
    document.write(`<tr>`);
    for (let prop in tasks) {
        if (prop === 'totalTime') {                //check the value of totalTime
            if (tasks[prop] <= 2) {
                let className = 'total-time-good';
                document.write(`<td class="${className}">${tasks[prop]}</td>`);
            }
            if (tasks[prop] > 2 && tasks[prop] <= 5) {
                let className = 'total-time-avg';
                document.write(`<td class="${className}">${tasks[prop]}</td>`);
            }
            if (tasks[prop] > 5) {
                let className = 'total-time-bad';
                document.write(`<td class="${className}">${tasks[prop]}</td>`);
            }

        } else if (prop === 'tasksFinishedPrecent') {                               //check the value of tasksFinishedPrecent
            if (tasks[prop] <= 50) {
                let className = 'low-precent';
                document.write(`<td class="${className}">${tasks[prop] + '%'}</td>`);
            }
            if (tasks[prop] > 50 && tasks[prop] <= 75) {
                let className = 'avg-precent';
                document.write(`<td class="${className}">${tasks[prop] + '%'}</td>`);
            }
            if (tasks[prop] > 75) {
                let className = 'high-precent';
                document.write(`<td class="${className}">${tasks[prop] + '%'}</td>`);
            }
            
        } else {
            document.write(`<td>${tasks[prop]}</td>`);
        }
    }
    document.write(`</tr>`);
}
document.write(`</table>`);