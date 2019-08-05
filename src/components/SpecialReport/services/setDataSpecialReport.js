const setDetailData = data => {
  return {
    coverSmall: data.article.cover.small ? data.article.cover.small : '',
    description: data.article.description ? data.article.description : '',
  };
};

export default setDetailData;
