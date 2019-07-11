const dummyHeadline = [
  {
    id: '10',
    article_id: '8',
    status: '1',
    article: {
      id: '8',
      slug: 'percobaan-judul-1',
      title: 'Percobaan Judul 1',
      cover: {
        original:
          'https://designshack.net/wp-content/uploads/Sea-Horse-Typeface.jpg',
        large:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-1/image/large',
        medium:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-1/image/medium',
        small:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-1/image/small',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis earum, facilis illo in iure magni minima minus nesciunt nisi odio odit perspiciatis quaerat sed similique? Libero magnam quam similique!',
      status: '1',
      author: {
        id: 1,
        name: 'Administrator',
        profile_picture:
          'data:image/png;base64,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',
        username: 'admin',
      },
      category: {
        id: '1',
        name: 'Review',
        slug: 'review',
      },
      tags: [
        {
          id: '1',
          slug: 'game',
          name: 'Game',
        },
      ],
      rating: null,
      created_at: '2018-11-13T09:37:28+07:00',
    },
    created_at: '2018-11-17T19:20:25+07:00',
  },
  {
    id: '9',
    article_id: '9',
    status: '1',
    article: {
      id: '9',
      slug: 'percobaan-judul-2-1',
      title: 'Percobaan Judul 2',
      cover: {
        original:
          'https://designshack.net/wp-content/uploads/Sea-Horse-Typeface.jpg',
        large:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-2-1/image/large',
        medium:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-2-1/image/medium',
        small:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-2-1/image/small',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor ex expedita ipsam labore laboriosam molestias nisi perferendis, recusandae, sequi tenetur voluptatibus! At blanditiis earum et hic tenetur unde vel.',
      status: '1',
      author: {
        id: 1,
        name: 'Administrator',
        profile_picture:
          'data:image/png;base64,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',
        username: 'admin',
      },
      category: {
        id: '1',
        name: 'Review',
        slug: 'review',
      },
      tags: [
        {
          id: '3',
          slug: 'game-heavy',
          name: 'Game Heavy',
        },
      ],
      rating: null,
      created_at: '2018-11-13T09:37:17+07:00',
    },
    created_at: '2018-11-13T10:01:30+07:00',
  },
  {
    id: '8',
    article_id: '9',
    status: '1',
    article: {
      id: '9',
      slug: 'percobaan-judul-2-1',
      title: 'Percobaan Judul 2',
      cover: {
        original:
          'https://designshack.net/wp-content/uploads/Sea-Horse-Typeface.jpg',
        large:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-2-1/image/large',
        medium:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-2-1/image/medium',
        small:
          'http://api-digimdigim.neotenstudio.com/article/percobaan-judul-2-1/image/small',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor ex expedita ipsam labore laboriosam molestias nisi perferendis, recusandae, sequi tenetur voluptatibus! At blanditiis earum et hic tenetur unde vel.',
      status: '1',
      author: {
        id: 1,
        name: 'Administrator',
        profile_picture:
          'data:image/png;base64,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',
        username: 'admin',
      },
      category: {
        id: '1',
        name: 'Review',
        slug: 'review',
      },
      tags: [
        {
          id: '3',
          slug: 'game-heavy',
          name: 'Game Heavy',
        },
      ],
      rating: null,
      created_at: '2018-11-13T09:37:17+07:00',
    },
    created_at: '2018-11-13T09:59:32+07:00',
  },
];

export default dummyHeadline;
