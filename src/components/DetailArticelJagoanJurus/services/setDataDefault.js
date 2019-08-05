const setDetailData = () => {
  return {
    id: '',
    title: '',
    cover: {
      original: '',
      large: '',
      medium: '',
      small: '',
    },
    description: '',
    author: {
      id: '',
      name: '',
    },
    category: {
      id: '',
      name: '',
    },
    tags: [],
    sub_contents: [],
    created_at: '',
  };
};

export default setDetailData;
