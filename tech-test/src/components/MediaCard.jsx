/* eslint-disable react/prop-types */
function MediaCard({ mediaItem }) {
  const { Title, Year, Type, Poster } = mediaItem;
  return (
    <artcicle>
      <h4>{Title}</h4>
      <p>{Type} / {Year}</p>
      <img src={Poster} alt={Title} />
    </artcicle>
  );
}

export default MediaCard;