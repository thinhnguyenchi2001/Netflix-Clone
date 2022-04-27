import "./listitem.scss"
import ReactPlayer from 'react-player'
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
  fetchMovieVideos,
} from '../API'
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState,useEffect } from "react";
import Video from "../video";

export default function ListItem({ index, backPoster, poster,id,overview}) {

  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState(null);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    const getVideo = async () => {
      const json = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=056adb2993b61aff8516b32900fa97e7&language=en-US`
        )
      ).json();
      setVideo(json.results.slice(0, 5))
    }

    useEffect(() => {
      getVideo();
    }, [id]);
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rank">
        <img src={`https://top10.netflix.com/images/big_numbers/${index + 1}.png`} alt="" />
      </div>
      <div className="card" key={index}>
                <img className="card-img" src={poster} alt="" />
      </div>

      {isHovered && (
        <div className="trailer">
          <div className="card" key={index}>
                <img className="card-img" src={backPoster || poster} alt="" />
          </div>
          {video && (
              video.slice(0,1).map((item, index) => (
                <Video key={index} keyVideo={item.key} />
              )
            ))}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="desc">
              {`${overview}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}