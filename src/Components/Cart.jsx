import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextValue';

function Cart() {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);
  const [orderNumber, setOrderNumber] = useState('');

  const completeDemoCheckout = (event) => {
    event.preventDefault();
    setOrderNumber(`DEMO-${Date.now().toString().slice(-6)}`);
    clearCart();
  };

  if (orderNumber) {
    return (
      <section className="mx-auto max-w-2xl px-6 pb-16 pt-32 text-center">
        <div className="rounded-2xl border border-pink-200 bg-pink-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-700">Demo order created</p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900">Thanks for trying checkout</h1>
          <p className="mt-3 text-gray-700">Your demo order number is <strong>{orderNumber}</strong>.</p>
          <p className="mt-2 text-sm text-gray-600">No payment was processed and no order was sent to a store.</p>
          <Link to="/shop" className="mt-6 inline-flex rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700">
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Your Cart</h1>
      <p className="mb-8 text-gray-600">Review your items, then try the demo checkout.</p>

      {cart.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">Your cart is empty.</p>
          <Link to="/shop" className="mt-4 inline-block font-semibold text-pink-700 hover:underline">Browse the shop</Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm" aria-label="Cart items">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">Items</h2>
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 py-4">
                  <div className="min-w-0 break-words">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">${Number(item.price).toFixed(2)} × {item.quantity}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex justify-between border-t border-gray-200 pt-5 text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>${getTotal()}</span>
            </div>
          </section>

          <form onSubmit={completeDemoCheckout} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Demo checkout</h2>
            <p className="mb-5 mt-1 text-sm text-gray-600">Enter sample details to preview the checkout flow.</p>

            <label className="mb-4 block text-sm font-medium text-gray-700">
              Full name
              <input name="name" autoComplete="name" required className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-100" />
            </label>
            <label className="mb-4 block text-sm font-medium text-gray-700">
              Email
              <input name="email" type="email" autoComplete="email" required className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-100" />
            </label>
            <label className="mb-5 block text-sm font-medium text-gray-700">
              Delivery address
              <textarea name="address" autoComplete="street-address" required rows="3" className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-100" />
            </label>

            <div className="mb-5 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
              This is a demo only. It does not collect card details, charge money, or submit a real order.
            </div>
            <button type="submit" className="w-full rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Complete demo checkout · ${getTotal()}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
