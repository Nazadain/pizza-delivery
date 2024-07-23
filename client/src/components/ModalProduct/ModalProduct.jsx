import { memo, useContext } from "react";
import { ModalContext } from "../../context";
import "./ModalProduct.css";

const ModalProduct = memo(({ addToCartClick, ...props }) => {
  const [modalData, setModalData] = useContext(ModalContext);

  if (!modalData) return <></>;

  const addToCart = () => {
    addToCartClick(modalData);
    setModalData(null);
  };

  const closeModal = (e) => {
    const isCloseBtn = e.target.classList.contains("close__btn");
    const isModalBackground = e.target.classList.contains("modal__product");

    if (!isCloseBtn && !isModalBackground) return;

    setModalData(null);
  };

  return (
    <div className="modal__product" onClick={closeModal}>
      <div className="modal__product__block" data-id={modalData.id}>
        <div className="close__btn">
          <img
            src={`${process.env.REACT_APP_API_URL}/close-btn/white-btn.svg`}
            className="close__btn"
          />
        </div>

        <img src={`${process.env.REACT_APP_API_URL}/${modalData.img}`} />
        <div className="content">
          <div className="main__content">
            <h3 className="title">{modalData.title}</h3>
            <p className="body">{modalData.body}</p>
          </div>
          <div className="cart__btn" onClick={addToCart}>
            В корзину за {modalData.price}₽
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModalProduct;
