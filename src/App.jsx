import React from 'react'
import './App.css'

function App() {
  return (
    <div className='container'>
      <div className="head">
        <header className="container">
          <img src="./logo" alt="" />
          <nav>
            <ul>
              <div className="logo">
                <img src="./logo.png" alt="logo" />
                <div className="dis">
                  <select id="office">
                    <option value="malinovskogo">Офис на Малиновского</option>
                    <option value="malinovskogo">Офис на Малиновского</option>
                    <option value="malinovskogo">Офис на Малиновского</option>
                  </select>
                  <button className='btn'>
                    <i class="fa-solid fa-bars"></i>
                    Каталог
                  </button>
                </div>
              </div>

              <li><a href="#">8-800-550-19-80</a></li>
              <li><a href="#">Подбор запчастей</a></li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Как купить</a></li>
              <li><a href="#">Оплата</a></li>
              <li><a href="#">Акции</a></li>
              <li><a href="#">Контакты</a></li>
              <div className='icon' id='aa'>
                <i class="fa-solid fa-user"></i>
                Войти
              </div>
              <div className='icon'>
                <i class="fa-solid fa-cart-shopping"></i>
                Корзина
              </div>

            </ul>
          </nav>

        </header>
        <div class="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Что ищите?' />
        </div>
      </div>
      <div className="hero">
        <section className='energy'>



          <div className="st">
            <div className="left">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className="right ">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="btn2">
            CHAMPION
          </div>
          <div className="text">
            <h1>
              Фильтр масла <br />
              в подарок
            </h1>
            <div className="rt">
              <h1>подробнее</h1>  <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <img className='en' src="./en.png" alt="" />
          <h1 className='new'>New Energy</h1>
          <div className="cards">

            <div className="card1">
              <h1 className='num'>01</h1>
              <div className="tx">
                <h2>Бесплатный звонок</h2>
                <p>На любые номера РФ</p>
                <h1>8 800 550-19-80</h1>
                <button className='tel1'><i class="fa-brands fa-whatsapp"></i> +7 (928) 107-80-80</button>
              </div>
            </div>

            <div className="card2">
              <h1 className='num'>02</h1>
              <div className="tx">
                <h2>Бесплатный звонок</h2>
                <p>На любые номера РФ</p>
                <h1>8 800 550-19-80</h1>
                <button className='btn3'>Заявка на подбор</button>
              </div>
            </div>
            <div className="card2">
              <h1 className='num'>03</h1>
              <div className="tx">
                <h2>Бесплатный звонок</h2>
                <p>На любые номера РФ</p>
                <h1>8 800 550-19-80</h1>
                <button className='btn3'>Заявка на подбор</button>
              </div>
            </div>



          </div>


        </section>
        <section className='reklama'>
          <div className="div1">
            <h1>Щетки AWM</h1>
            <p className='p' id='pp'>подробнее</p>
          </div>
          <div className="div2">
            <p>Весь январь</p>
            <div className="btn4">Цена снижена</div>
            <h1>скидка 20% <br /> на весь <br /> DOT4</h1>
            <p className='p'>подробнее</p>
          </div>
        </section>
      </div>
      <footer>
        <nav>
          <ul>
            <li><a href="#">Подбор запчастей</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Как купить</a></li>
            <li><a href="#">Оплата</a></li>
            <li><a href="#">Договор оферты</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Реквизиты</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Акции</a></li>
          </ul>
          <div className="icons">
            <div className="icon-div">
              <i class="fa-brands fa-wordpress"></i>
            </div>
            <div className="icon-div">
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div className="icon-div">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default App