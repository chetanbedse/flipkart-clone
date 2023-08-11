import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  let [category, setCategory] = useState([]);

  let getCategoryList = async () => {
    let { data } = await axios.get("http://localhost:3003/categories");
    setCategory(data);
  };

  useEffect(() => {
    getCategoryList();
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid container-margin">
          <div className="brand-div">
            <a href="#">
              <img
                width="75"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="Flipkart"
                title="Flipkart"
                className="_2xm1JU"
              />
            </a>
            <a className="brand-tagline" href="#">
              Explore
              <span>Plus</span>
              <img
                width="10"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="search-box">
              <form className="d-flex search-bar" role="search">
                <input
                  className="form-control me-2 search-input"
                  type="search"
                  placeholder="Search for products, brands and more"
                  aria-label="Search"
                />
                <button className="btn search-btn" type="submit">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fill-rule="evenodd">
                      <path
                        className="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        className="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                </button>
              </form>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item login-link">
                <a
                  className="nav-link login-btn"
                  aria-current="page"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Login
                </a>
                <div className="login-menu-container">
                  <div className="login-menu-list">
                    <div className="login-menu-top">
                      <p className="new-user">New Customer?</p>
                      <a href="#">Sign Up</a>
                    </div>
                    <div className="list-group login-menu-links">
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="login-menu-anchor" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            className=""
                            viewBox="0 0 16 14"
                          >
                            <path
                              fill="#2874F1"
                              fill-rule="nonzero"
                              d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333zm0 2c1.107 0 2 .894 2 2 0 1.107-.893 2-2 2s-2-.893-2-2c0-1.106.893-2 2-2zM7 11.8a4.8 4.8 0 0 1-4-2.147C3.02 8.327 5.667 7.6 7 7.6c1.327 0 3.98.727 4 2.053A4.8 4.8 0 0 1 7 11.8z"
                            ></path>
                          </svg>
                          <div className="login-menu-single-link">
                            My Profile
                          </div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="login-menu-anchor" href="#">
                          <svg
                            width="16"
                            height="16"
                            className=""
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="Desktop_VIP"
                              stroke="none"
                              stroke-width="1"
                              fill-rule="evenodd"
                            >
                              <g transform="translate(7.873 .143)">
                                <path
                                  d="M6.484 4.94s2.476 1.227 3.698 1.748c1.188.506 1.323 2.4.016 3.04-1.307.64-1.67.744-1.67.744s.208-.53.178-1.044c-.085-.914-2.787-1.656-4.576-2.094 0 0-1.375-4.311-1.995-5.512C1.509.612.242.11.242.11l2.995.04s1.03-.05 1.488 1.055c.456 1.106 1.76 3.734 1.76 3.734"
                                  fill="#2873F0"
                                  mask="url(#b)"
                                ></path>
                              </g>
                              <g transform="translate(8.635 8.27)">
                                <path
                                  d="M5.547 6.265S4.334 8.713 3.8 9.965c-.507 1.187-2.44 1.322-3.079.015C.081 8.673.015 8.44.015 8.44s.387.076 1 .048c.915-.084 1.7-2.786 2.138-4.575 0 0 4.311-1.377 5.513-1.997 1.21-.624 1.71-1.892 1.71-1.892l-.04 3.44s.05.587-1.055 1.044c-1.105.455-3.734 1.757-3.734 1.757"
                                  fill="#2873F0"
                                  mask="url(#d)"
                                ></path>
                              </g>
                              <g transform="translate(0 8.778)">
                                <path
                                  d="M4.655 5.573S2.193 4.353.956 3.826C-.232 3.32-.367 1.423.94.786 2.248.145 2.774.026 2.774.026s-.34.545-.255 1.157C2.606 2.1 5.22 2.74 7.008 3.179c0 0 1.427 4.287 1.997 5.513.695 1.493 1.848 1.72 1.848 1.72l-3.396-.05s-.585.05-1.042-1.055c-.458-1.106-1.76-3.734-1.76-3.734"
                                  fill="#2873F0"
                                  mask="url(#f)"
                                ></path>
                              </g>
                              <g transform="translate(0 .143)">
                                <path
                                  d="M4.857 4.754s1.219-2.46 1.747-3.699c.506-1.188 2.4-1.321 3.04-.016.64 1.308.701 1.544.701 1.544s-.482.007-.993.035c-.916.087-1.663 2.702-2.101 4.49 0 0-4.296 1.405-5.513 1.996C.066 9.916 0 10.957 0 10.957l.068-3.4s-.05-.586 1.055-1.043c1.105-.457 3.734-1.76 3.734-1.76"
                                  fill="#2873F0"
                                  mask="url(#h)"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div className="login-menu-single-link">
                            Flipkart Plus Zone
                          </div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="login-menu-anchor" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="12"
                            className=""
                            viewBox="0 0 16 12"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path
                                fill="#2874F1"
                                d="M6.038 11.682h8.407c.565 0 1.018-.38 1.13-.855V.847H.426v9.98c0 .475.452.855 1.017.855h2.232v-2.98H1.94L4.776 6l2.996 2.703H6.038v2.98z"
                              ></path>
                            </g>
                          </svg>
                          <div className="login-menu-single-link">Orders</div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="login-menu-anchor" href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            width="16"
                            height="14"
                            viewBox="0 0 20 16"
                          >
                            <path
                              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                              fill="#2874F0"
                              className=""
                              stroke="#FFF"
                              fill-rule="evenodd"
                              opacity=".9"
                            ></path>
                          </svg>
                          <div className="login-menu-single-link">Wishlist</div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="login-menu-anchor" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="12"
                            className=""
                            viewBox="0 0 16 16"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path fill="#FFF" d="M0 0h16v16H0z"></path>
                              <path
                                fill="#2874F0"
                                d="M16 9.25v2.5c0 .69-.597 1.25-1.333 1.25H1.333C.597 13 0 12.44 0 11.75v-2.5c.736 0 1.333-.56 1.333-1.25S.736 6.75 0 6.75v-2.5C0 3.56.597 3 1.333 3h13.334C15.403 3 16 3.56 16 4.25v2.5c-.736 0-1.333.56-1.333 1.25S15.264 9.25 16 9.25zM4.4 3.625v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4z"
                              ></path>
                            </g>
                          </svg>
                          <div className="login-menu-single-link">Rewards</div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="login-menu-anchor" href="#">
                          <svg
                            width="16"
                            height="16"
                            className=""
                            viewBox="0 0 23 22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              transform="translate(-9.694 -9)"
                            >
                              <ellipse
                                cx="20.557"
                                cy="20"
                                rx="20.557"
                                ry="20"
                              ></ellipse>
                              <path d="M7 6h28v28H7z"></path>
                              <path
                                fill="#2874F0"
                                fill-rule="nonzero"
                                d="M31.5 27v1.167a2.34 2.34 0 0 1-2.333 2.333H12.833a2.333 2.333 0 0 1-2.333-2.333V11.833A2.333 2.333 0 0 1 12.833 9.5h16.334a2.34 2.34 0 0 1 2.333 2.333V13H21a2.333 2.333 0 0 0-2.333 2.333v9.334A2.333 2.333 0 0 0 21 27h10.5zM21 24.667h11.667v-9.334H21v9.334zm4.667-2.917c-.97 0-1.75-.782-1.75-1.75s.78-1.75 1.75-1.75c.968 0 1.75.782 1.75 1.75s-.782 1.75-1.75 1.75z"
                              ></path>
                            </g>
                          </svg>
                          <div className="login-menu-single-link">
                            Gift Cards
                          </div>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Become a Seller
                </a>
              </li>
              <li className="nav-item more-link">
                <a className="nav-link" aria-current="page" href="#">
                  <span>More</span>
                  <svg
                    width="4.7"
                    height="8"
                    viewBox="0 0 16 27"
                    xmlns="http://www.w3.org/2000/svg"
                    className="more-arrowdown"
                    id="moreSvg"
                  >
                    <path
                      d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                      fill="#fff"
                      className="_2gTTdy"
                    ></path>
                  </svg>
                </a>
                <div className="more-menu-container">
                  <div className="more-menu-list">
                    <div className="list-group more-menu-links">
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="more-menu-anchor" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                            className=""
                            viewBox="0 0 12 14"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path d="M-4-3h20v20H-4z"></path>
                              <path
                                fill="#2874F1"
                                d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"
                              ></path>
                            </g>
                          </svg>
                          <div className="more-menu-single-link">
                            Notification Preferences
                          </div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="more-menu-anchor" href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            className=""
                            viewBox="0 0 14 17"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path
                                fill="#2874F0"
                                fill-rule="nonzero"
                                d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"
                              ></path>
                            </g>
                          </svg>
                          <div className="more-menu-single-link">
                            24x7 Customer Care
                          </div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="more-menu-anchor" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                            className=""
                            viewBox="0 0 18 10"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path
                                fill="#2874F0"
                                fill-rule="nonzero"
                                d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"
                              ></path>
                            </g>
                          </svg>
                          <div className="more-menu-single-link">Advertise</div>
                        </a>
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <a className="more-menu-anchor" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                            className=""
                            viewBox="0 0 12 14"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path d="M-4-3h20v20H-4z"></path>
                              <path
                                fill="#2874F0"
                                fill-rule="nonzero"
                                d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"
                              ></path>
                            </g>
                          </svg>
                          <div className="more-menu-single-link">
                            Download App
                          </div>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg
                    className="cart"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="_1bS9ic"
                      d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                      fill="#fff"
                    ></path>
                  </svg>
                  <span>Cart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid categories" style={{ marginTop: "60px" }}>
        <div className="container">
          <div className="d-flex gap-4 justify-content-start catemobile">
            {category.map((category_item) => {
              return (
                <div
                  onClick={() => navigate("/search")}
                  className="items text-center"
                  key={category_item.id}
                >
                  <div className="catimg">
                    <img width="64px" src="/img/category/Mobiles.webp" alt="" />
                  </div>
                  <div className="catname text-capitalize">
                    {category_item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="slidercaro">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/sliders/b1.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/sliders/b2.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/sliders/b3.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/sliders/b4.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row border-bottom mt-3">
          <div className="ps-4">
            <h6>Don't Miss These!</h6>
            <p className="text-secondary">Inspired by your order</p>
          </div>
        </div>
      </div>

      <div className="slider mb-5" id="slider">
        <div className="slide" id="slide">
          <div className="item text-center">
            <img
              src="/img/productimg/product.webp"
              width="200px"
              className="p-4"
            />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p2.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p3.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p4.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p5.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p6.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img
              src="/img/productimg/product.webp"
              width="200px"
              className="p-4"
            />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p2.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p3.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p4.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p5.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
          <div className="item text-center">
            <img src="/img/productimg/p6.webp" width="200px" className="p-4" />
            <p>Mens Caps</p>
          </div>
        </div>
        <button className="ctrl-btn pro-prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button className="ctrl-btn pro-next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2023, All Right Reserved
                    <a href="#">flipkart</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <p className="p-3 p-3 pb-0">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email/Mobile no"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>

                {/* <!-- <div className="mb-3">
                <input type="text" className="form-control" placeholder="Enter OTP">
              </div> --> */}
              </form>
            </div>
            <div className="modal-footer  justify-content-center">
              {/* <!-- <button type="button" className="btn btn-primary">Login</button> --> */}
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
              {/* <!-- <p className="text-sm">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p> --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
