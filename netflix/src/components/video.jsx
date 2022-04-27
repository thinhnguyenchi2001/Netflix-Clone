import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
  fetchTVs,
  fetchMovieVideos,
} from "./API";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function Video({keyVideo}) {
  console.log(keyVideo)
  return (
          <ReactPlayer
            className="container-fluid"
            url={"https://www.youtube.com/watch?v="+`${keyVideo}`}
            playing = "true"
            width="100%"
            height="140px"
          ></ReactPlayer>
  );
}
