import { test } from 'magnitude-test';

const sampleTodos = [
    "Take out the trash",
    "Buy groceries",
    "Build more test cases with Magnitude"
];

test('can add a todo')
    .step('Enter and add a todo')
        .data({ todo: sampleTodos[0] })
        .check('Todo appears')

test('can mark todos complete')
    .step('Add three todos')
        .data(sampleTodos.join(", "))
    .step('Mark each todo as done')
        .check('Every todo is checked off and completed count is 3')

test('can add multiple todos')
    .step('Create 3 todos')
        .data(sampleTodos.join(", "))
        .check('Todo total count should be 3')
    .step('Delete all todos')
        .check('No todos left')

