import axios from "axios";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const List = () => {
  const perPage = 10;
  const [count, setCount] = useState(1);
  const [allPictures, setAllPictures] = useState([]);
  const [visiblePictures, setVisiblePictures] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_PICTURE)
      .then((response) => {
        setAllPictures(
          Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }))
        );
        return Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
      })
      .then((data) => {
        setVisiblePictures([...data.slice(0, 10)]);
        setCount((prev) => prev + 1);
      });
  }, []);

  const getMore = () => {
    setVisiblePictures((prev) => [
      ...prev,
      ...allPictures.slice(
        visiblePictures.length,
        visiblePictures.length + perPage
      ),
    ]);
  };

  return (
    <InfiniteScroll
      dataLength={visiblePictures.length}
      next={getMore}
      hasMore={true}
      scrollThreshold='50px'
      loader={!allPictures.length ? <h4>Loading...</h4> : null}>
      <ul>
        {visiblePictures.map((pict) => (
          <li key={pict.id}>
            <img src={pict.picture} alt='picture' />
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default List;
