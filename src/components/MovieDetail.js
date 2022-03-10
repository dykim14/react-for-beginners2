function MovieDetail({
  title,
  year,
  rating,
  runtime,
  description,
  background,
}) {
  const divStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${background})`,
  };

  return (
    <div style={divStyle}>
      <h1>{title}</h1>
      <h3>Year : {year}</h3>
      <h3>Rating : {rating}</h3>
      <h3>Runtime : {runtime} min</h3>
      <p>{description}</p>
    </div>
  );
}

export default MovieDetail;
