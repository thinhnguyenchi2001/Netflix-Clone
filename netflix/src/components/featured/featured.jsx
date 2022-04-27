import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import TopList from "../TopList/TopList";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc_r8Yn-3NtRjQ_1pogFcFDhb4A33oYRebHWCDwwf5XrgDG9FktGvzSs5kFdWHWd8MzQMlGbxo71oiFf2iZwQfDzm5cQ.webp?r=608"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcBTiarjquj8G1tKouY3NqGAQd9jcnKC-cPZ_ZtFap9fYYvqj4wG8eDFhIisJ7TzPBhPcwzeTYpWa0_eqbtwsPScucc99ulajtJG24F1Q0amT3zleFBCAnMLhqk5zPwnT14jvZR3po0qdAAE7UW7IX9haqPyh6xkJoS2clRCV6Gi6g.webp?r=5fb"
          alt=""
        />
        <span className="desc">
          A filmmaker heads to Hollywood in the early '90s to make her movie but tumbles down a hallucinatory rabbit hole of sex, magic, revenge — and kittens.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow style={{fontSize: "38px"}} />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <TopList />
    </div>
  );
}

export default Featured;
