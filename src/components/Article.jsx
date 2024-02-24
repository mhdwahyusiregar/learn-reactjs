function Article() {
  const name = 'mwahyusrg';
  const titles = ['React', 'Vue', 'Angular'];

  return (
    <>
      <div>{name} </div>
      <div>
        {titles.map((title) => {
          return <div>{title}</div>;
        })}
      </div>
    </>
  );
}

export default Article;
