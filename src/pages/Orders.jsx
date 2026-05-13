import { useState } from "react";
import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

export default function Orders() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const statusColor = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div>
      <PageHeader title="Orders" breadcrumb="Order List">
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg hover:opacity-80"
        >
          Add Orders
        </button>
      </PageHeader>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Add Order</h2>
            <label className="text-sm text-gray-500 block mb-1">
              Customer Name
            </label>
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Customer Name"
              onChange={(e) =>
                setForm({ ...form, customerName: e.target.value })
              }
            />
            <label className="text-sm text-gray-500 block mb-1">Status</label>
            <select
              className="w-full border p-2 rounded mb-3"
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <label className="text-sm text-gray-500 block mb-1">
              Total Price (Rp)
            </label>
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Total Price"
              type="number"
              onChange={(e) => setForm({ ...form, totalPrice: e.target.value })}
            />
            <label className="text-sm text-gray-500 block mb-1">
              Order Date
            </label>
            <input
              className="w-full border p-2 rounded mb-5"
              type="date"
              onChange={(e) => setForm({ ...form, orderDate: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded bg-hijau text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="p-4 text-left">Order ID</th>
                <th className="p-4 text-left">Customer Name</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Total Price</th>
                <th className="p-4 text-left">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customerName}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    Rp {order.totalPrice.toLocaleString("id-ID")}
                  </td>
                  <td className="p-4">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
