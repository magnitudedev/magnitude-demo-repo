import { test } from 'magnitude-test';

const sampleTodos = [
    "Take out the trash",
    "Buy groceries",
    "Build more test cases with Magnitude"
];

test('can add a todo', async ({ ai }) => {
    await ai.step('Enter and add a todo', { data: { todo: sampleTodos[0] } });
    await ai.check('Todo appears');
});

test('can mark todos complete', async ({ ai }) => {
    await ai.step('Add three todos', { data: sampleTodos.join(", ") });
    await ai.step('Mark each todo as done');
    await ai.check('Every todo is checked off and completed count is 3');
});

test('can add multiple todos', async ({ ai }) => {
    await ai.step('Create 3 todos', { data: sampleTodos.join(", ") });
    await ai.check('Todo total count should be 3');
    await ai.step('Delete all todos');
    await ai.check('No todos left');
});
