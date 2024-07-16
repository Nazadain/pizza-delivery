import ModalProduct from "../components/UI/modal-product/ModalProduct";
import ProductSections from "../components/ProductSections";
import { useState } from "react";

const ShopContainer = ({ types }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const productClickHandler = (value) => {
    setModalData(value);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <ProductSections types={types} onClick={productClickHandler} />
      {isModalOpen ? (
        <ModalProduct
          isOpen={isModalOpen}
          product={modalData}
          onClick={closeModalHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShopContainer;
