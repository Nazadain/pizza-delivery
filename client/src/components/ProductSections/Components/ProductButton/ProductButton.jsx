import { memo } from "react";

const ProductButton = memo(({ className, children, addToCart, ...props }) => {
  return (
    <div className={className} onClick={addToCart}>
      {children}
    </div>
  );
});

export default ProductButton;
