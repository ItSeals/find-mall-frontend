import React, { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultShopItem from "../components/ResultShopItem";
import { global, networkCall } from "../helpers/helpers";

function Result() {
  const [searchName, setSearchName] = useState(global.searchName);
  const [filterData, setFilterData] = useState(global.filterData)
  const [malls, setMalls] = useState([])
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [items, setItems] = useState([])

  const searchNameBodyRef = useRef(global.searchName);
  const filterDataRef = useRef(global.filterData);

  const navigate = useNavigate();

  useEffect(() => {
    networkCall(
      { url: `${global.api}/mall`, type: "get" },
      (res) => setMalls(res),
      (error) => console.log("ResultPageGetError/mall", error)
    );
    networkCall(
      { url: `${global.api}/category`, type: "get" },
      (res) => setCategories(res),
      (error) => console.log("ResultPageGetError/category", error)
    );
    networkCall(
      { url: `${global.api}/tag`, type: "get" },
      (res) => setTags(res),
      (error) => console.log("ResultPageGetError/tag", error)
    );
    networkCall(
      {
        url: `${global.api}/item?${
          global.testServer === "true" ? "title_like" : "search"
        }=${searchName === null ? "" : searchName}`,
        type: "get",
      },
      (res) => setItems(res),
      (error) =>
        console.log(
          `ResultPageGetError/item?${
            global.testServer === "true" ? "title_like" : "search"
          }=`,
          error
        )
    );
  }, []);

  // &mall_ids=[1]
  // &category_ids=[1]
  // &tag_ids=[1]

  useEffect(() => {
    networkCall(
      {
        url: `${global.api}/item?${
          global.testServer === "true" ? "title_like" : "search"
        }=${searchName === null ? "" : searchName}${
          !allNoChecked(filterData["malls"])
            ? getArrChecked(filterData["malls"], "&mall_ids=")
            : ""
        }${
          !allNoChecked(filterData["categories"])
            ? getArrChecked(filterData["categories"], "&category_ids=")
            : ""
        }${
          !allNoChecked(filterData["tags"])
            ? getArrChecked(filterData["tags"], "&tag_ids=")
            : ""
        }`,
        type: "get",
      },
      (res) => setItems(res),
      (error) =>
        console.log(
          `ResultPageGetError/item?${
            global.testServer === "true" ? "title_like" : "search"
          }=`,
          error
        )
    );
  }, [searchName, filterData]);

  function backToHome(e) {
    e.preventDefault();
    navigate("/");
  }

  function submitSearchName(e) {
    e.preventDefault();
    setSearchName(searchNameBodyRef.current.value);
  }

  function pushFilterData(obj) {
    filterDataRef.current[obj.name] =
      filterDataRef.current[obj.name] === undefined
        ? []
        : [...filterDataRef.current[obj.name]];
    let found = false;
    for (let i = 0; i < filterDataRef.current[obj.name].length; i++) {
      if (filterDataRef.current[obj.name][i].id === obj.id) {
        found = true;
        break;
      }
    }
    if (!found) {
      filterDataRef.current[obj.name].push({
        id: obj.id,
        isChecked: false,
      });
    }
  }

  function changeFilterData(obj) {
    const pos = filterDataRef.current[obj.name]
      .map((e) => e.id)
      .indexOf(obj.id);
    filterDataRef.current[obj.name][pos].isChecked =
      !filterDataRef.current[obj.name][pos].isChecked;
    setFilterData({ ...filterDataRef.current });
  }

  function allNoChecked(arr) {
    let found = false;
    if (arr !== undefined) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].isChecked) found = true;
      }
    }
    return !found;
  }

  function getArrChecked(arr, prefixStr) {
    let checkedArrElements = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isChecked) checkedArrElements.push(arr[i].id);
    }
    return `${prefixStr}[${checkedArrElements}]`;
  }

  function isCheckedValue(obj) {
    const pos = filterDataRef.current[obj.name].map(e => e.id).indexOf(obj.id);
    return filterDataRef.current[obj.name][pos].isChecked;
  }

  return (
    <Fragment>
      <div className="resPage">
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={6}
            height={6}
            fill="black"
            className="bi bi-arrow-90deg-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
            />
          </svg>
          <button
            type="button"
            className="go-to-main-btn"
            onClick={(e) => backToHome(e)}
          >
            Повернутися на головну сторінку
          </button>
          <h3 className="logo">FindMall</h3>
          <form
            class="header-search-form"
            onSubmit={(e) => submitSearchName(e)}
          >
            <label className="label-bi-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={6}
                height={6}
                fill="black"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                defaultValue={global.searchName}
                ref={searchNameBodyRef}
                type="text"
                name="name-search"
                placeholder="Пошук за назвою"
                className="search-input"
              />
            </label>
          </form>
        </header>
        <main>
          <section className="results">
            <h2 className="results-title">Результати пошуку</h2>
          </section>
          <section className="main-section">
            <div className="categories-forms">
              <p className="form-title">ТРЦ:</p>
              <form class="check-form">
                {malls.map((mall) => {
                  pushFilterData({ name: "malls", id: mall.id });
                  return (
                    <Fragment>
                      <input
                        type="checkbox"
                        name="malls"
                        defaultValue={`mallDV-${mall.id}`}
                        className="category-checkbox visually-hidden"
                        id={`mallId-${mall.id}`}
                        defaultChecked={isCheckedValue({name: "malls", id: mall.id})}
                        onChange={() =>
                          changeFilterData({ name: "malls", id: mall.id })
                        }
                      />
                      <label
                        className="category-label"
                        htmlFor={`mallId-${mall.id}`}
                      >
                        {mall.title}
                      </label>
                    </Fragment>
                  );
                })}
              </form>
              <p className="form-title">Категорії:</p>
              <form class="check-form">
                {categories.map((category) => {
                  pushFilterData({ name: "categories", id: category.id });
                  return (
                    <Fragment>
                      <input
                        type="checkbox"
                        name="categories"
                        defaultValue={`categoryDV-${category.id}`}
                        className="category-checkbox visually-hidden"
                        id={`categoryId-${category.id}`}
                        defaultChecked={isCheckedValue({name: "categories", id: category.id})}
                        onChange={() =>
                          changeFilterData({
                            name: "categories",
                            id: category.id,
                          })
                        }
                      />
                      <label
                        className="category-label"
                        htmlFor={`categoryId-${category.id}`}
                      >
                        {category.title}
                      </label>
                    </Fragment>
                  );
                })}
              </form>
              <p className="form-title">Теги:</p>
              <form class="check-form">
                {tags.map((tag) => {
                  pushFilterData({ name: "tags", id: tag.id });
                  return (
                    <Fragment>
                      <input
                        type="checkbox"
                        name="tags"
                        defaultValue={`tagDV-${tag.id}`}
                        className="category-checkbox visually-hidden"
                        id={`tagId-${tag.id}`}
                        defaultChecked={isCheckedValue({name: "tags", id: tag.id})}
                        onChange={() =>
                          changeFilterData({ name: "tags", id: tag.id })
                        }
                      />
                      <label
                        className="category-label"
                        htmlFor={`tagId-${tag.id}`}
                      >
                        {tag.title}
                      </label>
                    </Fragment>
                  );
                })}
              </form>
            </div>
            <div className="shops-section">
              {/* pdsl */}
              {searchName !== "" && searchName !== null ? (
                <>
                  <div className="request-search-name">
                    Ви ввели: “{searchName}”
                  </div>
                  <div className="request-search-name-small">
                    Шукаємо по запиту: “{searchName}”
                  </div>
                </>
              ) : null}
              {malls.map((mall) => {
                let itemsWithNeedMall = items.filter((item) => {
                  let isMallItem = false;
                  for (let i = 0; i < item.malls.length; i++) {
                    if (mall.id === item.malls[i].id) {
                      isMallItem = true;
                    }
                  }
                  return isMallItem;
                });
                if (itemsWithNeedMall.length > 0) {
                  return (
                    <Fragment>
                      <h1 className="mall-title">{mall.title}</h1>
                      <div className="shop-category-wrap">
                        {categories.map((category) => {
                          let itemsWithNeedCategory = itemsWithNeedMall.filter(
                            (item) => category.id === item.category.id
                          );
                          if (itemsWithNeedCategory.length > 0) {
                            return (
                              <Fragment>
                                <h2 className="shop-title">{category.title}</h2>
                                {tags.map((tag) => {
                                  let itemsWithNeedTag =
                                    itemsWithNeedCategory.filter((item) => {
                                      let isTagItem = false;
                                      for (
                                        let i = 0;
                                        i < item.tags.length;
                                        i++
                                      ) {
                                        if (tag.id === item.tags[i].id) {
                                          isTagItem = true;
                                        }
                                      }
                                      return isTagItem;
                                    });
                                  if (itemsWithNeedTag.length > 0) {
                                    return (
                                      <Fragment>
                                        <h3 className="category-title">
                                          {tag.title}
                                        </h3>
                                        <div className="items-wrap">
                                          {itemsWithNeedTag.map((item) => {
                                            return (
                                              <ResultShopItem
                                                item={item}
                                                unnecessaryTag={tag}
                                              />
                                            );
                                          })}
                                        </div>
                                      </Fragment>
                                    );
                                  }
                                })}
                              </Fragment>
                            );
                          }
                        })}
                      </div>
                    </Fragment>
                  );
                }
              })}
              {/* gfojp */}
            </div>
          </section>
        </main>
        <footer>
          <h3 className="footer-title">
            Дякуємо, що користуєтеся нашим сервісом!
          </h3>
          <div className="footer-wrap">
            <p className="footer-paragraph">
              Більше інформації про ТРЦ можете знайти за посиланнями на офіційні
              веб-сайти
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={10}
              fill="white"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
            <div className="mall-links">
              <div className="footer-mall-item">
                <p className="mall-name">Victoria Gardens:</p>
                <a href="https://victoriagardens.com.ua/" className="mall-link">
                  https://victoriagardens.com.ua/
                </a>
              </div>
              <div className="footer-mall-item">
                <p className="mall-name">King Cross Leopolis:</p>
                <a href="https://www.kingcross.com.ua/" className="mall-link">
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
        </footer>
      </div>
    </Fragment>
  );
}

export default Result;
