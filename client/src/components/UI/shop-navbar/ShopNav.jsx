import "./ShopNav.css";

const ShopNav = () => {
  return (
    <div className="shop__navbar">
      <ul className="nav__list">
        <a href="#combo">Комбо</a>
        <a href="#">Пиццы</a>
        <a href="#">Роллы</a>
        <a href="#">Десерты</a>
      </ul>
      <div className="cart__btn">Корзина</div>
    </div>
  );
};

export default ShopNav;
