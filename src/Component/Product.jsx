import React from "react";
import styles from "./Product.module.css";

export const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.product}>
          
              <div className={styles.sub}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/bashh/bashh3036434574/bashh3036434574_1651606316855_2-0._UX40_QL90_.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sub}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/bashh/bashh3036434574/bashh3036434574_1651252617427_2-0._UX40_QL90_.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sub}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/bashh/bashh3036434574/bashh3036434574_1651252617130_2-0._UX40_QL90_.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sub}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/bashh/bashh3036434574/bashh3036434574_1651252616871_2-0._UX40_QL90_.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sub}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/bashh/bashh3036434574/bashh3036434574_1651252617659_2-0._UX40_QL90_.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sub}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/bashh/bashh3036434574/bashh3036434574_1651252617014_2-0._UX40_QL90_.jpg"
                  alt=""
                />
              </div>

            <div>
              <img
                id={styles.pinterest}
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/media/3/images/footer/Pinterest_grey_1-0.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.product}>
            <div id={styles.image}>
              <img
                src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/bashh/bashh3036434574/bashh3036434574_1651606316855_2-0._SX1000_QL90_.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.product}>
            <h3 id={styles.head}>ba&sh + </h3>
            <p id={styles.title}>Jansan Sweater</p>
            <p id={styles.price}>₹ 18,363.60</p>
            <div>
              <ul>
                <li>Fabric: Lightweight, non-stretch technical weave</li>
                <li>Floral print and gathered seams</li>
                <li>Square neck</li>
                <li>Hidden zip at side</li>
                <li>Shell: 100% polyester</li>
                <li>Unlined</li>
                <li>Dry clean</li>
                <li>Imported, Romania</li>
              </ul>
            </div>
            <button id={styles.bag}>Add To Bag</button>
            <button id={styles.wishlist}>Add To Wish List</button>
            <h6 id={styles.return}>
              FREE express international delivery and EASY Returns
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
