import React, { Fragment } from 'react'

function Result() {
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
          <button type="button" className="go-to-main-btn">
            Повернутися на головну
          </button>
          <h3 className="logo">FindMall</h3>
          <form>
            <label>
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
              <form>
                <input
                  type="checkbox"
                  name="mall-name"
                  defaultValue="victoria-gardens"
                  className="category-checkbox visually-hidden"
                  id="victoria-gardens"
                />
                <label className="category-label" htmlFor="victoria-gardens">
                  Victoria Gardens
                </label>
                <input
                  type="checkbox"
                  name="mall-name"
                  defaultValue="king-kross-leopolis"
                  className="category-checkbox visually-hidden"
                  id="king-kross"
                />
                <label className="category-label" htmlFor="king-kross">
                  King Kross Leopolis
                </label>
                <input
                  type="checkbox"
                  name="mall-name"
                  defaultValue="spartak"
                  className="category-checkbox visually-hidden"
                  id="spartak"
                />
                <label className="category-label" htmlFor="spartak">
                  Spartak
                </label>
                <input
                  type="checkbox"
                  name="mall-name"
                  defaultValue="forum-lviv"
                  className="category-checkbox visually-hidden"
                  id="forum"
                />
                <label className="category-label" htmlFor="forum">
                  Forum Lviv
                </label>
              </form>
              <p className="form-title">Магазини:</p>
              <form>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="clothes-shoes"
                  className="category-checkbox visually-hidden"
                  id="clothes-shoes"
                />
                <label className="category-label" htmlFor="clothes-shoes">
                  Одяг та взуття
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="lingerie"
                  className="category-checkbox visually-hidden"
                  id="lingerie"
                />
                <label className="category-label" htmlFor="lingerie">
                  Спідня білизна
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="accessories"
                  className="category-checkbox visually-hidden"
                  id="accessories"
                />
                <label className="category-label" htmlFor="accessories">
                  Аксесуари
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="sport-goods"
                  className="category-checkbox visually-hidden"
                  id="sport-goods"
                />
                <label className="category-label" htmlFor="sport-goods">
                  Спортивні товари
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="pet-goods"
                  className="category-checkbox visually-hidden"
                  id="pet-goods"
                />
                <label className="category-label" htmlFor="pet-goods">
                  Товари для тварин
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="beauty-health"
                  className="category-checkbox visually-hidden"
                  id="beauty-health"
                />
                <label className="category-label" htmlFor="beauty-health">
                  Краса та здоров’я
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="children-goods"
                  className="category-checkbox visually-hidden"
                  id="children-goods"
                />
                <label className="category-label" htmlFor="children-goods">
                  Товари для дітей
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="presents-home-art"
                  className="category-checkbox visually-hidden"
                  id="presents-home-art"
                />
                <label className="category-label" htmlFor="presents-home-art">
                  Подарунки, дім та <br />
                  творчість
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="optics"
                  className="category-checkbox visually-hidden"
                  id="optics"
                />
                <label className="category-label" htmlFor="optics">
                  Оптика
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="jewelry"
                  className="category-checkbox visually-hidden"
                  id="jewelry"
                />
                <label className="category-label" htmlFor="jewelry">
                  Ювелірні вироби
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="supermarkets-food"
                  className="category-checkbox visually-hidden"
                  id="supermarkets-food"
                />
                <label className="category-label" htmlFor="supermarkets-food">
                  Супермаркети та <br />
                  харчування
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="drinks-tobacco"
                  className="category-checkbox visually-hidden"
                  id="drinks-tobacco"
                />
                <label className="category-label" htmlFor="drinks-tobacco">
                  Напої та тютюн
                </label>
                <input
                  type="checkbox"
                  name="shop-category"
                  defaultValue="electronics-machinery"
                  className="category-checkbox visually-hidden"
                  id="electronics-machinery"
                />
                <label className="category-label" htmlFor="electronics-machinery">
                  Електроніка, <br />
                  техніка та зв’язок
                </label>
              </form>
              <p className="form-title">
                Кафе та
                <br />
                ресторани:
              </p>
              <form>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="cafe"
                  className="category-checkbox visually-hidden"
                  id="cafe"
                />
                <label className="category-label" htmlFor="cafe">
                  Кав’ярня
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="bakery"
                  className="category-checkbox visually-hidden"
                  id="bakery"
                />
                <label className="category-label" htmlFor="bakery">
                  Пекарня
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="pizzeria"
                  className="category-checkbox visually-hidden"
                  id="pizzeria"
                />
                <label className="category-label" htmlFor="pizzeria">
                  Піцерія
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="burger"
                  className="category-checkbox visually-hidden"
                  id="burger"
                />
                <label className="category-label" htmlFor="burger">
                  Бургерна
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="healthy-eating"
                  className="category-checkbox visually-hidden"
                  id="healthy-eating"
                />
                <label className="category-label" htmlFor="healthy-eating">
                  Здорове харчування
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="interactive-cafe"
                  className="category-checkbox visually-hidden"
                  id="interactive-cafe"
                />
                <label className="category-label" htmlFor="interactive-cafe">
                  Інтерактивне кафе
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="icecream-yogurt"
                  className="category-checkbox visually-hidden"
                  id="icecream-yogurt"
                />
                <label className="category-label" htmlFor="icecream-yogurt">
                  Морозиво/йогуртерія
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="ukrainian-food"
                  className="category-checkbox visually-hidden"
                  id="ukrainian-food"
                />
                <label className="category-label" htmlFor="ukrainian-food">
                  Українська кухня
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="european-food"
                  className="category-checkbox visually-hidden"
                  id="european-food"
                />
                <label className="category-label" htmlFor="european-food">
                  Європейська кухня
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="asian-food"
                  className="category-checkbox visually-hidden"
                  id="asian-food"
                />
                <label className="category-label" htmlFor="asian-food">
                  Азійська кухня
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="fastfood"
                  className="category-checkbox visually-hidden"
                  id="fastfood"
                />
                <label className="category-label" htmlFor="fastfood">
                  Фастфуд
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="georgian-food"
                  className="category-checkbox visually-hidden"
                  id="georgian-food"
                />
                <label className="category-label" htmlFor="georgian-food">
                  Грузинська кухня
                </label>
                <input
                  type="checkbox"
                  name="cafe-restaurants"
                  defaultValue="delivery"
                  className="category-checkbox visually-hidden"
                  id="delivery"
                />
                <label className="category-label" htmlFor="delivery">
                  Доставка
                </label>
              </form>
              <p className="form-title">
                Розваги та
                <br />
                послуги:
              </p>
              <form>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="coworking"
                  className="category-checkbox visually-hidden"
                  id="coworking"
                />
                <label className="category-label" htmlFor="coworking">
                  Коворкінг
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="sport-club"
                  className="category-checkbox visually-hidden"
                  id="sport-club"
                />
                <label className="category-label" htmlFor="sport-club">
                  Спортивний зал
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="dry-cleaning"
                  className="category-checkbox visually-hidden"
                  id="dry-cleaning"
                />
                <label className="category-label" htmlFor="dry-cleaning">
                  Хімчистка
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="cinema"
                  className="category-checkbox visually-hidden"
                  id="cinema"
                />
                <label className="category-label" htmlFor="cinema">
                  Кінотеатр
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="bowling"
                  className="category-checkbox visually-hidden"
                  id="bowling"
                />
                <label className="category-label" htmlFor="bowling">
                  Боулінг
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="beauty-studio"
                  className="category-checkbox visually-hidden"
                  id="beauty-studio"
                />
                <label className="category-label" htmlFor="beauty-studio">
                  Студія краси
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="post-office"
                  className="category-checkbox visually-hidden"
                  id="post-office"
                />
                <label className="category-label" htmlFor="post-office">
                  Поштове відділення
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="tourist-services"
                  className="category-checkbox visually-hidden"
                  id="tourist-services"
                />
                <label className="category-label" htmlFor="tourist-services">
                  Туристичні послуги
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="entertainment"
                  className="category-checkbox visually-hidden"
                  id="entertainment"
                />
                <label className="category-label" htmlFor="entertainment">
                  Розваги
                </label>
                <input
                  type="checkbox"
                  name="entertainment-services"
                  defaultValue="services"
                  className="category-checkbox visually-hidden"
                  id="services"
                />
                <label className="category-label" htmlFor="services">
                  Послуги
                </label>
              </form>
            </div>
            <div className="shops-section">
              {/* pdsl */}
              <h1 className="mall-title">spartak</h1>
              <div className="shop-category-wrap">
                <h2 className="shop-title">Магазини</h2>
                <h3 className="category-title">Спортивні товари</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/puma-logo-png-1.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Puma</p>
                      <span className="other-tags">
                        Інші теги: Одяг та взуття, Аксесуари
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/Adidas_Logo.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Adidas</p>
                      <span className="other-tags">
                        Інші теги: Одяг та взуття, Аксесуари
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/new-balance.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">New balance</p>
                      <span className="other-tags">
                        Інші теги: Одяг та взуття, Аксесуари
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/Logo_arena.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Arena</p>
                      <span className="other-tags">
                        Інші теги: Одяг та взуття, Аксесуари
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/Marathon_blue_logo.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Marathon</p>
                      <span className="other-tags">
                        Інші теги: Одяг та взуття, Аксесуари
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="category-title">Товари для тварин</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/master-zoo.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Master zoo</p>
                      <span className="other-tags">Інші теги: - </span>
                    </div>
                  </div>
                </div>
                <h3 className="category-title">Товари для дітей</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/antoshka.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">антошка</p>
                      <span className="other-tags"> Інші теги: Одяг та взуття </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/avtokrisla.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">avtokrisla</p>
                      <span className="other-tags"> Інші теги: - </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/dunalogoslogan.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">duna</p>
                      <span className="other-tags">
                        Інші теги: Спідня білизна Аксесуари, Товари для дому
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="shop-title">Кафе та ресторани</h2>
                <h3 className="category-title">Бургерна</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/SnackBurgers.jpg"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Snack &amp; Burgers</p>
                      <span className="other-tags">
                        Інші теги: Морозиво/йогуртерія, Американська кухня, Доставка
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/the-myaso.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">The М'ясо</p>
                      <span className="other-tags">
                        Інші теги: Американська кухня, Українська кухня, Доставка
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/avocado_logo.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">avocado</p>
                      <span className="other-tags">
                        Інші теги: Здорове харчування, Європейська кухня, Доставка
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="category-title">Азійська кухня</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/la_famiglia.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">la famiglia</p>
                      <span className="other-tags">
                        Інші теги: Піцерія, Європейська кухня, Доставка
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/noa_logo.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">noa</p>
                      <span className="other-tags">
                        Інші теги: Здорове харчування, Доставка
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="category-title">Доставка</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/SnackBurgers.jpg"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Snack &amp; Burgers</p>
                      <span className="other-tags">
                        Інші теги: Морозиво/йогуртерія, Американська кухня, Доставка
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/the-myaso.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">The М'ясо</p>
                      <span className="other-tags">
                        Інші теги: Американська кухня, Українська кухня, Доставка
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/noa_logo.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">noa</p>
                      <span className="other-tags">
                        Інші теги: Здорове харчування, Доставка
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/tomatina.jpg"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">tomatina</p>
                      <span className="other-tags">
                        Інші теги: Здорове харчування, Європейська кухня
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/avocado_logo.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">avocado</p>
                      <span className="other-tags">
                        Інші теги: Здорове харчування, Європейська кухня, Бургерна
                      </span>
                    </div>
                  </div>
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/la_famiglia.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">la famiglia</p>
                      <span className="other-tags">
                        Інші теги: Піцерія, Європейська кухня, Доставка
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className="shop-title">Розваги та послуги</h2>
                <h3 className="category-title">Кінотеатр</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/Multiplex_logo.svg.png"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">multiplex</p>
                      <span className="other-tags">
                        Інші теги: Усі розваги та послуги
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="category-title">Поштове відділення</h3>
                <div className="items-wrap">
                  <div className="shop-item">
                    <div className="image-wrap">
                      <img
                        src="assets/images/nova_poshta.jpg"
                        alt="shop-icon"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="shop-text">
                      <p className="shop-name">Нова пошта</p>
                      <span className="other-tags">
                        Інші теги: Усі розваги та послуги
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="mall-title">forum lviv</h1>
              <div className="shop-category-wrap">
                <h2 className="shop-title">Магазини</h2>
                <h3 className="category-title">Спортивні товари</h3>
                <div className="items-wrap">{/* тут будуть  shop-item Форума */}</div>
              </div>
              {/* gfojp */}
            </div>
          </section>
        </main>
        <footer>
          <h3 className="footer-title">Дякуємо, що користуєтеся нашим сервісом!</h3>
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
  )
}

export default Result