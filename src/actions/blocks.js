import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const getNodeBlocksStart = (node) => {
  return {
    type: types.GET_NODE_BLOCKS_START,
    node
  };
};

const getNodeBlocksSuccess = (node, res) => {
  return {
    type: types.GET_NODE_BLOCKS_SUCCESS,
    node,
    res
  };
};

const getNodeBlocksFailure = node => {
  return {
    type: types.GET_NODE_BLOCKS_FAILURE,
    node,
  };
};

export function getNodeBlocks(node) {
  return async (dispatch) => {
    try {
      dispatch(getNodeBlocksStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if(res.status >= 400) {
        dispatch(getNodeBlocksFailure(node));
      }

      const json = await res.json();

      dispatch(getNodeBlocksSuccess(node, json));
    } catch (err) {
      dispatch(getNodeBlocksFailure(node));
    }
  };
}
