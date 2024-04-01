const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function showMenu() {
  console.log("\n==== Todo List ====");
  console.log("1. Add Task");
  console.log("2. Remove Task");
  console.log("3. Show Tasks");
  console.log("4. Exit");
}

function addTask(task) {
  tasks.push(task);
  console.log("Task added successfully!");
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log("Task removed successfully!");
  } else {
    console.log("Invalid task index!");
  }
}

function showTasks() {
  console.log("\n==== Tasks ====");
  if (tasks.length === 0) {
    console.log("No tasks.");
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

function startApp() {
  showMenu();

  rl.question("Enter your choice: ", function(choice) {
    switch(choice.trim()) {
      case '1':
        rl.question("Enter task: ", function(task) {
          addTask(task);
          startApp();
        });
        break;
      case '2':
        rl.question("Enter task index to remove: ", function(index) {
          removeTask(parseInt(index) - 1);
          startApp();
        });
        break;
      case '3':
        showTasks();
        startApp();
        break;
      case '4':
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice!");
        startApp();
        break;
    }
  });
}

startApp();