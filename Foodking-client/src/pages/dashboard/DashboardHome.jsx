import React from 'react'

const DashboardHome = () => {
    return (
        <div>
            {/* Top Navbar */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Welcome Back, Admin 👋</h2>
          <input
            type="search"
            placeholder="Search here..."
            className="border border-gray-300 px-4 bg-white py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            { title: "Total Orders", value: "12,480", color: "green" },
            { title: "Total Revenue", value: "$56,920", color: "blue" },
            { title: "New Users", value: "1,230", color: "purple" },
            { title: "Active Items", value: "87", color: "yellow" },
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-${card.color}-100 text-${card.color}-800 p-5 rounded-xl shadow-md transition hover:scale-105`}
            >
              <h3 className="text-sm font-semibold">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          ))}
        </section>

        {/* Order Summary + Reviews */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Orders */}
          <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">Customer</th>
                  <th>Item</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Alice", item: "Burger", status: "Delivered", amount: "$8.50" },
                  { name: "Rahim", item: "Pizza", status: "Pending", amount: "$12.00" },
                  { name: "Jon", item: "Sandwich", status: "Cancelled", amount: "$5.00" },
                ].map((order, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-100">
                    <td className="py-2">{order.name}</td>
                    <td>{order.item}</td>
                    <td>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reviews */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Reviews</h3>
            <ul className="space-y-4">
              {[
                { user: "Sabrina", rating: 5, comment: "Amazing taste!" },
                { user: "Alex", rating: 4, comment: "Fast delivery and fresh food!" },
              ].map((review, i) => (
                <li key={i} className="border p-3 rounded-lg hover:shadow">
                  <p className="font-medium">{review.user}</p>
                  <p className="text-yellow-500">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </p>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </div>
    )
}

export default DashboardHome
