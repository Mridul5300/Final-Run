import ProductCard from "./ProductCard";

const FeteaurdProduct = () => {
     return (
          <div className="my-16">
               <h2 className="text-3xl font-semibold text-center mb-11">Featured Product</h2>
               <ProductCard></ProductCard>
               <ProductCard></ProductCard>
               <ProductCard></ProductCard>
               <ProductCard></ProductCard>
          </div>
     );
};

export default FeteaurdProduct;