// Description:
// Commands:
'use strict';
const todo = require('todo');
module.exports = robot => {
    robot.respond(/todo (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.todo(task);
        msg.send('add task: ' + task);
    });

    robot.respond(/done (.+)/i, msg => {
        const task = msg.match[1].trim();
        todo.done(task);
        msg.send('done task: ' + task);
    });

    robot.respond(/del (.+)/i, msg => {
        const task = msg.match[1].trim();
        if (todo.list().includes(task)) {
            todo.del(task);
            msg.send('del task: ' + task);
        } else {
            msg.send('error: ' + task + ' not contains');
        }
    });

    robot.respond(/list/i, msg => {
        const list = todo.list();
        const res = list.length === 0
            ? 'nothing...'
            : list.join('\n')
        msg.send(res);
    });

    robot.respond(/donelist/i, msg => {
        const list = todo.doneList();
        const res = list.length === 0
            ? 'nothing...'
            : list.join('\n')
        msg.send(res);
    });
};