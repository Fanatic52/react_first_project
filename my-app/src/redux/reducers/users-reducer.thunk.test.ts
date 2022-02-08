import {actions, follow, unfollow} from "./users-reducer";
import {usersAPI} from "../../api/users-api";
import {APIResponseType, ResultCodesEnum} from "../../api/api";

jest.mock('../../api/users-api')

const userApiMock = usersAPI as jest.Mocked<typeof usersAPI>;
let dispatchMock = jest.fn();
let getStateMock = jest.fn();

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

test('success follow thunk',async () => {
    userApiMock.follow.mockReturnValue(Promise.resolve(result));
    const thunk = follow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test('success unfollow thunk',async () => {
    userApiMock.unfollow.mockReturnValue(Promise.resolve(result));
    const thunk = unfollow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})