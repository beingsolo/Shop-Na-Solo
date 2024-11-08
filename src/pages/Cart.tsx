function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center text-gray-600">
          Your cart is empty
        </div>
      </div>
    </div>
  );
}

export default Cart;