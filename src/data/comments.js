export default [
    {
      id: 2217,
      author: 'George',
      body: '<p>Comment One</p>',
      timestamp: '10/21/2022 12:14:19',
      replies: [
        {
          id: 2224,
          author: 'Sara',
          body: '<p>Comment One - Reply One</p>',
          timestamp: '10/22/2022 12:15:37',
          replies: [],
          parentComment:{
            author: 'George',
            body: 'Comment One',
          },
        },
        {
          id: 2223,
          author: 'Leila',
          body: '<p>Comment One - Reply Two</p>',
          timestamp: '10/22/2022 12:15:24',
          replies: [],
          parentComment:{
            author: 'George',
            body: 'Comment One',
          },
        },
      ],
    },
    {
      id: 2216,
      author: 'Stephanie',
      body: '<p>Comment Two</p>',
      timestamp: '10/23/2022 12:14:12',
      replies: [
        {
          id: 2220,
          author: 'Stephanie',
          body: '<p>Comment Two - Reply One</p>',
          timestamp: '10/23/2022 12:14:43',
          replies: [],
        },
        {
          id: 2219,
          author: 'George',
          body: '<p>Comment Two - Reply Two</p>',
          timestamp: '10/24/2022 12:14:34',
          replies: [
            {
              id: 2222,
              author: 'Stephanie',
              body: '<p>Comment Two - Reply Two - Subcomment One</p>',
              timestamp: '10/24/2022 12:14:57',
              replies: [],
            },
            {
              id: 2221,
              author: 'George',
              body: '<p>Comment Two - Reply Two - Subcomment Two</p>',
              timestamp: '10/24/2022 12:14:51',
              replies: [],
            },
          ],
        },
        {
          id: 2320,
          author: 'Albert',
          body: '<p>Comment Two - Reply Three</p>',
          timestamp: '10/24/2022 12:14:43',
          replies: [],
        },
      ],
    },
    {
      id: 2218,
      author: 'Will',
      body: '<p>Comment Three</p>',
      timestamp: '10/26/2022 12:14:28',
      replies: [],
    },
  ];
  