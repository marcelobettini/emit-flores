/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import MediaCard from "./MediaCard";
function MediaList({ media }) {
  return media?.length ? (
    <section>
      <ul>
        {media.map(m => <MediaCard key={m.imdbID} mediaItem={m} />)}
      </ul>

    </section>) : (<h2>Your search results here...</h2>);

}



export default MediaList;