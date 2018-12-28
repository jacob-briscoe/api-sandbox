const UserController = require('../../../../interface/user/rest/user-controller');
const UserRepository = require('../../../../domain/model/userRepository');

jest.mock('../../../../domain/model/userRepository');

test('invalid credential', async () => {
    const responseEnd = jest.fn(() => { });
    const response = createTerminatedResponse(responseEnd);

    UserRepository.find.mockResolvedValue(null);

    await UserController.authenticate(createRequest(), response);

    expect(response.status).toHaveBeenCalledWith(401);
    expect(responseEnd).toHaveBeenCalled();
});

test('valid credential', async () => {
    const send = jest.fn((user) => { });
    const response = createSendResponse(send);

    const user = { "id": 1 }
    UserRepository.find.mockResolvedValue(user);

    await UserController.authenticate(createRequest(), response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(send).toHaveBeenCalledWith(JSON.stringify(user));
});

function createSendResponse(send){
    return createResponse(send, null);
}

function createTerminatedResponse(responseEnd){
    return createResponse(null, responseEnd);
}

function createResponse(send, responseEnd) {
    return {
        status: jest.fn((code) => {
            return {
                send: send,
                end: responseEnd
            };
        })
    };
}

function createRequest() {
    return {
        body: {
            username: 'myusername'
        }
    };
}

