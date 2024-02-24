const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru !!!</span>;
};

const NewArticle = () => {
  return <span>-- Baru !!!</span>;
};

function Article(props) {
  return (
    <>
      <h3>{props.title} </h3>
      <small>
        Date : {props.date} | Tags : {props.tags.join(', ')}
      </small>
      <ArticleStatus isNew={props.isNew} />
      {props.isNew && <NewArticle />}
    </>
  );
}

export default Article;
