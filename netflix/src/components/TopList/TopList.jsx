import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  ArrowForwardIosTwoTone,
} from "@material-ui/icons";

import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
  fetchMovieVideos
} from "../API";
import { useRef, useState, useEffect } from "react";
import ListItem from "../listitem/ListItem";
import "./toplist.scss";

export default function TopList() {
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovieByGenre(await fetchMovieByGenre(28));
    };

    fetchAPI();
  }, []);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="top-list">
      <span className="listTitle">Top 10 VietNam Today</span>
      <div className="wrapper">
      <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {movieByGenre.slice(0, 20).map((item, index) => {
            return <ListItem 
            poster={item.poster} 
            backPoster={item.backPoster}
            id={item.id}
            index ={index} />;
          })}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
