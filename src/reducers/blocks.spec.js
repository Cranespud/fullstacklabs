import * as ActionTypes from '../constants/actionTypes';
import reducer from './blocks';
import initialState from './initialState';


describe('Reducers::Blocks', () => {
  const getInitialState = () => {
    return initialState().blocks;
  };

  const nodeA = {
    url: 'http://localhost:3002',
    loading: false,
    blocks: [],
  };

  const nodeB = {
    url: 'http://localhost:3003',
    loading: false,
    blocks: [],
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle GET_NODE_BLOCKS_START', () => {
    const appState = {
      list: [nodeA, nodeB]
    };
    const action = { type: ActionTypes.GET_NODE_BLOCKS_START, node: nodeA };
    const expected = {
      list: [
        {
          ...nodeA,
          loading: true
        },
        nodeB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle GET_NODE_BLOCKS_SUCCESS', () => {
    const appState = {
      list: [nodeA, nodeB]
    };
    const action = { type: ActionTypes.GET_NODE_BLOCKS_SUCCESS, node: nodeA, res: {data: [{id: 1, attributes: { data: "This is the block text"}}]} };
    const expected = {
      list: [
        {
          ...nodeA,
          loading: false,
          blocks: [{id: 1, attributes: { data: "This is the block text"}}]
        },
        nodeB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle GET_NODE_BLOCKS_FAILURE by settings blocks as an empty array', () => {
    const appState = {
      list: [
        {
          ...nodeA,
          loading: true,
          blocks: [{id: 1, attributes: {data: "Some text"}}]
        },
        nodeB
      ]
    };
    const action = { type: ActionTypes.GET_NODE_BLOCKS_FAILURE, node: nodeA };
    const expected = {
      list: [
        {
          ...nodeA,
          loading: false,
          blocks: [],
        },
        nodeB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
