import s from "../../Users/Users.module.css";
import React from "react";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((el, i) => {
        return (
          <span
            key={i}
            className={props.currentPage === el ? s.selectedPage : s.page}
            onClick={() => {
              props.onPageChanged(el);
            }}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
};
export default Paginator;
