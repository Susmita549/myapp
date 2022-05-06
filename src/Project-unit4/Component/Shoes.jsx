import React from "react";
import data from "./Shoesdata.json";
import styles from "./clothing.module.css";
import ReactPaginate from "react-paginate";

export const Shoes = () => {
  const [sort, setSort] = React.useState(data.slice(0, 46));
  const [pagenumber, setPagenumber] = React.useState(0);

  const SortingPrice = (e) => {
    if (e.target.value === "lth") {
      setSort((prev) => (prev = [...sort.sort((a, b) => a.price - b.price)]));
    }
    if (e.target.value === "htl") {
      setSort((prev) => (prev = [...sort.sort((a, b) => b.price - a.price)]));
    }
  };

  const userPerpage = 20;
  const pageVisited = userPerpage * pagenumber;
  const displayUser = sort
    .slice(pageVisited, pageVisited + userPerpage)
    .map((item) => {
      return (
        <div key={item.id}>
          <div className={styles.image}>
            <img src={item.image} className={styles.img} alt="" />
          </div>
          <p className={styles.text}>{item.brand}</p>
          <p>{item.title}</p>
          <p className={styles.text}> ₹ {item.price}</p>
        </div>
      );
    });

  const pageCount = Math.ceil(sort.length / userPerpage);
  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };

  return (
    <>
      <div className={styles.menTop}>
        <div id={styles.topleft}>
          <div id={styles.filter}>FILTER</div>
          <div id={styles.desiner}>
            <select>
              <option>DESIGNERS</option>
            </select>
          </div>

          <div id={styles.size}>
            <select>
              <option>Size</option>
            </select>
          </div>
          <div id={styles.color}>
            <select>
              <option>Color</option>
            </select>
          </div>
          <div id={styles.clear}>
            <a>CLEAR ALL</a>
          </div>
        </div>

        <div>
          <strong>
            Sort By:
            <select
              onChange={(e) => {
                SortingPrice(e);
              }}
            >
              <option>Newer</option>
              <option value="lth">LowToHigh</option>
              <option value="htl">HighToLow</option>
            </select>
          </strong>
        </div>
      </div>

      {/* <div><strong>Sort By:
        <select
          onChange={(e) => {
            SortingPrice(e);
          }}
        >
          <option>Sort</option>
          <option value="lth">LowToHigh</option>
          <option value="htl">HighToLow</option>
        </select>
        </strong>
      </div> */}

      <div className={styles.paginate}>
        <div className={styles.left_paginate}>
          <div id={styles.item}>{sort.length} Items </div>
          <div>View</div>
          <div style={{ textDecoration: "underline" }}>{pageVisited}</div>
          <div>{sort.length}</div>
        </div>

        <div className={styles.right_paginate}>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            previousLinkClassName={styles.previousBttn}
            nextLinkClassName={styles.nextBttn}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
          />
        </div>
      </div>

      <div className={styles.grid}>{displayUser}</div>
    </>
  );
};
