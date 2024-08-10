import useCarts from "../../../hooks/useCarts";

const Cart = () => {
  const [cart] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold p-3 mb-3  border-orange-600 border-b-4">
        My Cart
      </h2>
      <div className="flex justify-around text-xl p-4">
        <h2>Total Items: {cart.length}</h2>
        <h2>Total Price: {totalPrice}</h2>
        <button className="btn bg-orange-600 text-white">Pay Now</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item) => (
                <tr key={cart._id}>
                  <th>
                    <label>{1 + 1}</label>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2>{item.name}</h2>
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
