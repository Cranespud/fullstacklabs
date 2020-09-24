import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './blocks';

describe('Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  const node = {
    url: 'http://localhost:3002',
    loading: false,
    blocks: [],
  };

  it('Check that action getNodeBlocks is callable', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.GET_NODE_BLOCKS_START,
      node
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.getNodeBlocks(node))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.getNodeBlocks(node)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
