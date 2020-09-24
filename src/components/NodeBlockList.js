import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as actions from "../actions/blocks";
import {connect} from "react-redux";

class NodeBlockList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: {loading: false, blocks: []},
    };
  }

  componentDidMount() {
    this.props.actions.getNodeBlocks(this.props.node);

    const nodeIndex = this.props.blocks.list.findIndex(p => p.url === this.props.node.url);

    if(nodeIndex >= 0) {
      this.setState({blocks: this.props.blocks.list[nodeIndex]});
    }
  }

  componentDidUpdate(prevProps) {

    if(prevProps.loadBlocks != this.props.loadBlocks && this.props.loadBlocks) {
      this.props.actions.getNodeBlocks(this.props.node);
      const nodeIndex = this.props.blocks.list.findIndex(p => p.url === this.props.node.url);

      if (nodeIndex >= 0) {
        this.setState({blocks: this.props.blocks.list[nodeIndex]});
      }
    }
  }

  render() {
    if(this.state.blocks.loading) {
      return (<h3>Loading blocks ...</h3>)
    }

    if(!this.state.blocks.loading && !this.state.blocks.blocks.length) {
      return (<h3>Nothing to show</h3>)
    }

    return (
      this.state.blocks.blocks.map(block => {
        return (
          <div style={styles.blockContainer} key={block.id}>
            <span style={styles.blockNumber}>{block.id}</span>
            <p style={styles.blockText}>{block.attributes.data}</p>
          </div>
        )
      })
    );

  }
}

NodeBlockList.propTypes = {
  loadBlocks: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  blocks: PropTypes.shape({
    list: PropTypes.array,
    url: PropTypes.string,
    loading: PropTypes.bool,
    blocks: PropTypes.array
  }).isRequired,
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
};

const styles = {
  blockContainer: {
    background: "#e0e0e0",
    display: "block",
    padding: "8px",
    margin: "2px 0",
    borderRadius: "3px",
  },

  blockNumber: {
    color: "#304ffe",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "10px",
  },

  blockText: {
    margin: "0",
  }
};


function mapStateToProps(state) {
  return {
    blocks: state.blocks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeBlockList);
