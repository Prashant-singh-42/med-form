import React, { useState } from "react";
// import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/core";
import Pagination from "@mui/material/Pagination";

import usePagination from "./Paginate";
import { Link } from "react-router-dom";
// import { default as data } from "./MOCK_DATA.json";

export default function Test(prop) {
  let data = prop.data;
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <div className="movies-container">
        {_DATA.currentData().map((elem) => {
          return (
            <Link
            to={`/video/:${elem.MovieID}`}
            >
              <div className="box">
                <div className="box-img">
                  <img src={elem.src} alt="" />
                </div>
                <h3>{elem.name}</h3>
                <span>
                  {elem.time} | {elem.Genre}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination
        className="pagination"
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </>
  );
}
