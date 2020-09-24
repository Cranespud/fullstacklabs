export default () => ({
  nodes: {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false,
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false
      },
      {
        url: 'https://calm-anchorage-82141.herokuapp.com',
        online: false,
        name: 'Node 3',
        loading: false
      },
      {
        url: 'http://localhost:3002',
        online: false,
        name: 'Node 4',
        loading: false
      }
    ]
  },
  blocks: {
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
      },
      {
        url: 'https://calm-anchorage-82141.herokuapp.com',
        loading: false,
        blocks: [],
      },
      {
        url: 'http://localhost:3002',
        loading: false,
        blocks: [],
      }
    ]
  }
});
