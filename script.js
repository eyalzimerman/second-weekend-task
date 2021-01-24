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


//for loop to change the places of the keys
for (let i = 0; i < arrOfTasks.length; i++) {
    arrOfTasks[i] = {
        startedAt: arrOfTasks[i].startedAt,
        finishedAt: arrOfTasks[i].finishedAt,
        totalTime: arrOfTasks[i].totalTime, 
        tasksGiven: arrOfTasks[i].tasksGiven,
        tasksFinished: arrOfTasks[i].tasksFinished,
        tasksFinishedPrecent: arrOfTasks[i].tasksFinishedPrecent,
        topic: arrOfTasks[i].topic
    };
}

// add array of headers to the table
let arrOfHeaderTable =  ['Started At', 'Finished At', 'Total Time', 'Ttasks Given', 'Tasks Finished', 'Tasks Finished Precent', 'Topic'];

let table = document.createElement('table');
document.body.append(table);
// for loop to create the headers of the table
let trHeader = document.createElement('tr');
table.append(trHeader);
for (let head of arrOfHeaderTable) {
    let th = document.createElement('th');
    trHeader.append(th);
    th.textContent = head;
}


//create the table body and put all the same property value in same row
//check if the property is totalTime and tasksFinishedPrecent to give them a class by the value
for (let tasks of arrOfTasks) {
    let trTable = document.createElement('tr');
    table.append(trTable);
    for (let prop in tasks) {
        let tdTable = document.createElement('td');
        trTable.append(tdTable);
        if (prop === 'totalTime') {                //check the value of totalTime
            if (tasks[prop] <= 2) {
                tdTable.textContent = `${tasks[prop]}`;
                tdTable.classList.add("total-time-good");
            }
            if (tasks[prop] > 2 && tasks[prop] <= 5) {
                tdTable.textContent = `${tasks[prop]}`;
                tdTable.classList.add("total-time-avg");
            }
            if (tasks[prop] > 5) {
                tdTable.textContent = `${tasks[prop]}`;
                tdTable.classList.add("total-time-bad");
            }

        } else if (prop === 'tasksFinishedPrecent') {                         //check the value of tasksFinishedPrecent
            if (tasks[prop] <= 50) {
                tdTable.textContent = `${tasks[prop] + '%'}`;
                tdTable.classList.add("low-precent");
            }
            if (tasks[prop] > 50 && tasks[prop] <= 75) {
                tdTable.textContent = `${tasks[prop] + '%'}`;
                tdTable.classList.add("avg-precent");
            }
            if (tasks[prop] > 75) {
                tdTable.textContent = `${tasks[prop] + '%'}`;
                tdTable.classList.add("high-precent");
            }

        } else {
            tdTable.textContent = `${tasks[prop]}`;
        }
    }
}