import React from 'react';
import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

export default function NodeBlockList(props) {

  const blocks = props.blocks;
  const classes = useStyles();

  if(blocks.loading) {
    return (<h1>Loading</h1>);
  }

  if(!blocks.blocks.length) {
    return (<h1>Nothing to show</h1>);
  }

  return (
      blocks.blocks.map( block => {
        return (
          <div className={classes.blockContainer} key={block.id}>
            <span className={classes.blockNumber}>{block.id}</span>
            <p className={classes.blockText}>{block.attributes.data}</p>
          </div>
        )
      })
  );
}

NodeBlockList.propTypes = {
  blocks: PropTypes.shape({
    url: PropTypes.string,
    loading: PropTypes.bool,
    blocks: PropTypes.array,
  }).isRequired,
};

const useStyles = makeStyles(() => ({
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
}));
