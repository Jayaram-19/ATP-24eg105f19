// TODO: Import task functions
import {addTask,getAllTasks,completeTask} from './task.js'
// Test your module system
// 1. Add some task
addTask("eating","high",'2024-12-12')
addTask("sleeping","low",'2025-01-24')
// 2. Display all tasks
const task=getAllTasks();
console.log(task)

// 3. Complete a task
completeTask(1)
// 4. Display all tasks again
console.log(task)