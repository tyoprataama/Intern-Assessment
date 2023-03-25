import React from "react";

export const PrintBill = React.forwardRef((props, ref) => {
    const {cart, totalAmount} = props;
    return (
      <div ref={ref} className="p-5">
          <table className='table'>
                  <thead>
                    <tr>
                      <td>Menu</td>
                      <td>Harga</td>
                      <td>Jumlah</td>
                      <td>Total</td>
                    </tr>
                  </thead>
                  <tbody>
                    { cart ? cart.map((cartItem, key) => <tr key={key}>
                      <td>{cartItem.title}</td>
                      <td>{cartItem.price}</td>
                      <td>{cartItem.quantity}</td>
                      <td>{cartItem.totalAmount}</td>
                    

                    </tr>)

                    : ''}
                  </tbody>
                </table>
                <h2 className='px-2'>Total Harga: Rp.{totalAmount}</h2>
      </div>
    );
});