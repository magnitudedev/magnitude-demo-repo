import { test } from 'magnitude-test';

const sampleTodos = [
    "Take out the trash",
    "Buy groceries",
    "Build more test cases with Magnitude"
];

test('can add a todo', async (agent) => {
    await agent.act('Enter and add a todo', { data: { todo: sampleTodos[0] } });
    await agent.check('Todo appears');
});

test('can mark todos complete', async (agent) => {
    await agent.act('Add three todos', { data: sampleTodos.join(", ") });
    await agent.act('Mark each todo as done');
    await agent.check('Every todo is checked off and completed count is 3');
});

test('can add multiple todos', async (agent) => {
    await agent.act('Create 3 todos', { data: sampleTodos.join(", ") });
    await agent.check('Todo total count should be 3');
    await agent.act('Delete all todos');
    await agent.check('No todos left');
});
