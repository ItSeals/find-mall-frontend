import React, { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { global } from "../helpers/helpers";

const Home = () => {
  const searchNameRef = useRef("");

  const navigate = useNavigate()

  function SearchNameSubmit(e, searchName) {
    e.preventDefault();
    global.searchName = searchName;
    navigate("/result");
  }

  function onClickMall(e, img, mallName) {
    console.log("e", e.target.innerText)
    if (e.currentTarget.parentNode.style.background === `linear-gradient(rgba(59, 45, 70, 0.55), rgba(59, 45, 70, 0.55)) 0% 0% / cover, url(\"assets/images/${img}\")`) {
      e.currentTarget.parentNode.style.background = `linear-gradient(rgba(252, 170, 88, 0.45), rgba(252, 170, 88, 0.45)), url(assets/images/${img})`;
      e.currentTarget.parentNode.style.backgroundSize = "cover";
      e.target.innerText = `ШУКАЄМО В\n${mallName}`;
    } else {
      e.currentTarget.parentNode.style.background = `linear-gradient(rgba(59, 45, 70, 0.55), rgba(59, 45, 70, 0.55)), url(assets/images/${img})`;
      e.currentTarget.parentNode.style.backgroundSize = "cover";
      e.target.innerText = `ОБРАТИ\n${mallName}`;
    }
  }

  return (
    <Fragment>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-12 header fill-background">
              <a href="#golovna" className="golovna-button btn-style">Головна</a>
              <a href="#trc" className="trc-button btn-style">ТРЦ</a>
              <a href="#categories" className="categories-button btn-style">Категорії</a>
              <span
                className="main-name"
                style={{ fontFamily: "FixelText-Medium" }}
              >
                FindMall
              </span>
              <img
                src="assets/logo_transparent.png"
                alt="Logo"
                width="25"
                height="25"
              />
              <a
                href="#searchByName" 
                className="name-search-button btn-style"
                style={{ lineHeight: "9px" }}
              >
                Пошук за назвою
              </a>
              <a href="#mape" className="map-button btn-style">Мапа</a>
            </div>
          </div>
          <div id="golovna" className="row background">
            <div className="col-12 entry-page" style={{ display: "flex" }}>
              <div className="col guide-text">
                твій гід <br />
                у трц <br />
                м. львів
              </div>
              <div className="col">
                <a href="#trc" className="start-search-button"> Почати пошук</a>
              </div>
            </div>
          </div>
          <div className="row dostupni-trc">
            <div
              id="trc"
              className="col-6 fill-background"
              style={{ marginTop: "25px", width: "222px", height: "48px" }}
            >
              <h2 className="trc-text">Доступні для пошуку ТРЦ</h2>
              <p className="dostupni-trc-text">
                Натисніть на фото ТРЦ, у якому бажаєте здійснити пошук <br />
                (так, можна обрати декілька)
              </p>
            </div>
          </div>
          <div className="row trc-labels" style={{ marginTop: "40px" }}>
            <div className="col-6">
              {/* <!-- image VICTORIA GARDENS --> */}
              <div 
                className="vg-div"
                style={{
                  background:
                    "linear-gradient(rgba(59, 45, 70, 0.55), rgba(59, 45, 70, 0.55)), url(assets/images/2.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <button className="choose-trc" onClick={e => onClickMall(e, "2.jpg", "VICTORIA GARDENS")}>ОБРАТИ<br />VICTORIA GARDENS</button>
              </div>
            </div>
            <div className="col-6">
              {/* <!-- info VICTORIA GARDENS --> */}
              <h3 style={{ marginTop: "27px", marginLeft: "15px" }}>
                VICTORIA GARDENS
              </h3>
              <p className="info">
                Час роботи: 10:00-21:00
                <br />
                Розташування:
                <br />
                м. Львів, вул. Кульпарківська, 226А
              </p>
            </div>
          </div>
          <div className="row trc-labels">
            <div className="col-6">
              {/* <!-- info KING CROSS --> */}
              <h3 style={{ marginTop: "27px" }}>KING CROSS LEOPOLIS</h3>
              <p className="info">
                Час роботи: 10:00-20:00
                <br />
                Розташування:
                <br />
                с. Сокільники, вул. Стрийська, 30
              </p>
            </div>
            <div className="col-6">
              <div
                className="vg-div"
                style={{
                  background:
                    "linear-gradient(rgba(59, 45, 70, 0.55), rgba(59, 45, 70, 0.55)), url(assets/images/3.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <button className="choose-trc" onClick={(e) => onClickMall(e, "3.jpg", "KING CROSS LEOPOLIS")}>
                  ОБРАТИ<br />KING CROSS LEOPOLIS
                </button>
              </div>
            </div>
          </div>
          <div className="row trc-labels">
            <div className="col-6">
              <div
                className="vg-div"
                style={{
                  background:
                    "linear-gradient(rgba(59, 45, 70, 0.55), rgba(59, 45, 70, 0.55)), url(assets/images/4.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <button className="choose-trc" onClick={(e) => onClickMall(e, "4.jpg", "SPARTAK")}>
                  ОБРАТИ<br />SPARTAK
                </button>
              </div>
            </div>
            <div className="col-6">
              {/* <!--  info SPARTAK--> */}
              <h3 style={{ marginTop: "27px", marginLeft: "15px" }}>
                СТРЦ SPARTAK
              </h3>
              <p className="info">
                Час роботи: 10:00-22:00
                <br />
                Розташування:
                <br />
                м. Львів, вул. Гетьмана Мазепи, 1Б
              </p>
            </div>
          </div>
          <div className="row trc-labels">
            <div className="col-6">
              {/* <!-- info FORUM --> */}
              <h3 style={{ marginTop: "27px" }}>FORUM LVIV</h3>
              <p className="info">
                Час роботи: 10:00-21:00
                <br />
                Розташування:
                <br />
                м. Львів, вул. Під Дубом, 7Б
              </p>
            </div>
            <div className="col-6">
              {/* <!-- image FORUM --> */}
              <div
                className="vg-div"
                style={{
                  background:
                    "linear-gradient(rgba(59, 45, 70, 0.55), rgba(59, 45, 70, 0.55)), url(assets/images/5.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <button className="choose-trc" onClick={(e) => onClickMall(e, "5.jpg", "FORUM LVIV")}>
                  ОБРАТИ<br />FORUM LVIV
                </button>
              </div>
            </div>
          </div>

          <div id="categories" className="row outline-row">
            <div className="col-12">
              <h2>Оберіть категорії пошуку</h2>
              <p>
                Натисніть на шукану категорію та оберіть підкатегорії зі списку
                (знову ж таки, можете обрати декілька, сміливіше)
              </p>
            </div>
          </div>

          <div className="row categories-photo-block">
            {/* <!-- 3 photos --> */}
            <div className="col-4" style={{ padding: "0" }}>
              <div
                className="category-div"
                style={{
                  background:
                    "linear-gradient(rgba(59, 45, 70, 0.6), rgba(59, 45, 70, 0.068)), url(assets/images/6.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="choose-category">Магазини</button>
              </div>
            </div>
            <div className="col-4" style={{ padding: "0" }}>
              <div
                className="category-div"
                style={{
                  background:
                    "linear-gradient(rgba(59, 45, 70, 0.6), rgba(59, 45, 70, 0.068)), url(assets/images/7.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="choose-category">Кафе та ресторани</button>
              </div>
            </div>
            <div className="col-4" style={{ padding: "0" }}>
              <div
                className="category-div"
                style={{
                  background:
                    "linear-gradient(rgba(59, 45, 70, 0.6), rgba(59, 45, 70, 0.068)), url(assets/images/8.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="choose-category">Розваги та послуги</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12" style={{ marginTop: "32px" }}>
              <button className="srch-btn">Почати пошук</button>
              <h2
                id="searchByName"
                style={{
                  textAlign: "center",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "10px",
                  lineHeight: "14px",
                  color: "#000000",
                  fontFamily: "FixelText-Medium",
                  marginTop: "26px",
                }}
              >
                Або скористатися пошуком за назвою
              </h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "10px",
              }}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>

          <div className="row name-search-type-field fill-background div-search">
            <form className="searchbar form-search-field" role="search">
              <input
                ref={searchNameRef}
                type="search"
                className="search-field"
                placeholder="Введіть назву магазину/кафе/послуги та натисніть на знак пошуку..."
                aria-label="Search"
                onChange={() => console.log("searchNameRef", searchNameRef.current.value)}
              />
              <button className="button" onClick={(e) => SearchNameSubmit(e, searchNameRef.current.value)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlnsSvgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  width="12px"
                  height="12px"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
                      fill="#ffffff"
                      data-original="#000000"
                    />
                  </g>
                </svg>
              </button>
            </form>
          </div>

          <div id="mape" className="row map-block">
            {/* <!-- tyt mapa --> */}
            <button className="my-location"></button>
          </div>

          <div className="row fill-background">
            <div className="col-12 fill-background">
              <h2
                style={{
                  display: "block",
                  marginTop: "17px",
                  fontFamily: "FixelText-SemiBold",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "6px",
                  lineHeight: "8px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Дякуємо, що користуєтеся нашим сервісом!
              </h2>
              <div className="footer-wrap">
                <p className="footer-paragraph">
                  Більше інформації про ТРЦ можете знайти за посиланнями на
                  офіційні веб-сайти
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="white"
                  className="bi bi-arrow-right"
                  style={{ marginLeft: "10px" }}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
                <div className="mall-links">
                  <div className="footer-mall-item">
                    <p className="mall-name">Victoria Gardens:</p>
                    <a
                      href="https://victoriagardens.com.ua/"
                      className="mall-link"
                    >
                      https://victoriagardens.com.ua/
                    </a>
                  </div>
                  <div className="footer-mall-item">
                    <p className="mall-name">King Cross Leopolis:</p>
                    <a
                      href="https://www.kingcross.com.ua/"
                      className="mall-link"
                    >
                      https://www.kingcross.com.ua/
                    </a>
                  </div>
                  <div className="footer-mall-item">
                    <p className="mall-name">Spartak:</p>
                    <a href="https://spartak.city/" className="mall-link">
                      https://spartak.city/
                    </a>
                  </div>
                  <div className="footer-mall-item">
                    <p className="mall-name">Forum Lviv: </p>
                    <a href="https://forumlviv.com/" className="mall-link">
                      https://forumlviv.com/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
