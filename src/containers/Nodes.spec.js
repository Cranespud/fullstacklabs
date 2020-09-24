import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedNodes, { Nodes } from "./Nodes";
import Node from "../components/Node";

describe("<Nodes />", () => {
  const actions = {
    checkNodeStatuses: jest.fn()
  };

  const blockActions = {
    getNodeBlocks: jest.fn()
  };

  const nodes = {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false
      }
    ]
  };

  const blocks = {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        loading: false,
        blocks: [],
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        loading: false,
        blocks: [],
      }
    ]
  };

  it("should contain <Node />", () => {
    const wrapper = shallow(
      <Nodes
        actions={actions}
        nodes={nodes}
        blockActions={blockActions}
        blocks={blocks}
      />
    );

    expect(wrapper.find(Node).length).toEqual(2);
  });

  xit("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({nodes, blocks});
    const component = create(
      <Provider store={store}>
        <ConnectedNodes />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
