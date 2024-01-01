import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { clear, deleteFromCart } from "../../rtk/slices/CartSlice";

function Cart() {
  let products = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let totalPrice = products.reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);
  return (
    <Container className="my-5 py-5">
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          dispatch(clear());
        }}
      >
        Clear All
      </button>
      <h2>Total Price {totalPrice.toFixed(2)} $</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>$ {product.price}</td>
                <td>
                  <img src={product.image} alt="/" className="cart-img" />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(deleteFromCart(product));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
