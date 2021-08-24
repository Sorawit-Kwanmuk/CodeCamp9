import { useParams } from 'react-router-dom';

function Product() {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}

export default Product;
