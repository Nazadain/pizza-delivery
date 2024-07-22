const ProductButton = ({ className, children, addToCart, ...props }) => {
  return (
    <div className={className} onClick={addToCart}>
      {children}
    </div>
  );
};

export default ProductButton;
