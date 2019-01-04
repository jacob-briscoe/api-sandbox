const TaskController = require('../../../../interface/task/rest/task-controller');
const TaskRepository = require('../../../../domain/model/taskRepository');

jest.mock('../../../../domain/model/taskRepository');

test('no user tasks found', () => {
    const expectedResponse = [];
    allUserTasks(expectedResponse);
});

test('tasks found', () => {
    const expectedResponse = [{ "id": 1 }];
    allUserTasks(expectedResponse);
});

test('create task', async () => {
    const request = {
        params: {
            userId: 1
        },
        body: {
            detail: {
                complete: false,
                description: "Unit Test Task"
            }
        }
    };

    const expectedResponse = { "id": 1 };
    TaskRepository.create.mockResolvedValue(expectedResponse);

    const send = jest.fn((data) => { });
    const response = {
        status: jest.fn((code) => {
            return {
                send: send
            };
        })
    };

    await TaskController.createUserTask(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
    expect(send).toHaveBeenCalledWith(JSON.stringify(expectedResponse));
});

test('get user task', async () => {
    const request = {
        params: {
            taskId: 1
        }
    };

    const expectedResponse = {
        "id": 1
    };

    TaskRepository.findOne.mockResolvedValue(expectedResponse);

    const send = jest.fn((data) => { });
    const response = {
        status: jest.fn((code) => {
            return {
                send: send
            };
        })
    };

    await TaskController.getUserTask(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(send).toHaveBeenCalledWith(JSON.stringify(expectedResponse));
});

test('update user task', async() => {
    const request = {
        params: {
            taskId: 1
        },
        body: {
            detail: {"complete":true,"description":"Postman Task"}
        }
    };

    const end = jest.fn(() => { });
    const response = {
        status: jest.fn((code) => {
            return {
                end: end
            };
        })
    };

    await TaskController.updateUserTask(request, response);

    expect(response.status).toHaveBeenCalledWith(204);
    expect(end).toHaveBeenCalled();
});

test('delete user task', async() => {
    const request = {
        params: {
            taskId: 1
        }
    };

    const end = jest.fn(() => { });
    const response = {
        status: jest.fn((code) => {
            return {
                end: end
            };
        })
    };

    await TaskController.deleteUserTask(request, response);

    expect(response.status).toHaveBeenCalledWith(204);
    expect(end).toHaveBeenCalled();
});

async function allUserTasks(expectedResponse) {
    const send = jest.fn((data) => { });
    TaskRepository.findAll.mockResolvedValue(expectedResponse);
    const request = {
        params: {
            userId: '1'
        }
    };
    const response = {
        status: jest.fn((code) => {
            return {
                send: send
            };
        })
    };
    await TaskController.allUserTasks(request, response);
    expect(response.status).toHaveBeenCalledWith(200);
    expect(send).toHaveBeenCalledWith(JSON.stringify(expectedResponse));
}
