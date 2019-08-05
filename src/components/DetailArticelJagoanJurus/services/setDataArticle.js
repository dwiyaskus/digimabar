const setDetailData = data => {
  return {
    id: data.id ? data.id : '',
    title: data.title ? data.title : '',
    cover: {
      original: data.cover.original ? data.cover.original : '',
      large: data.cover.large ? data.cover.large : '',
      medium: data.cover.medium ? data.cover.medium : '',
      small: data.cover.small ? data.cover.small : '',
    },
    description: data.description ? data.description : '',
    author: {
      id: data.author.id ? data.author.id : '',
      name: data.author.name ? data.author.name : '',
    },
    category: {
      id: data.category.id ? data.category.id : '',
      name: data.category.name ? data.category.name : '',
    },
    tags: data.tags ? data.tags : [],
    sub_contents: data.sub_contents ? data.sub_contents : [],
    created_at: data.created_at ? data.created_at : '',
  };
};

export default setDetailData;
