import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customers from "../data/customers";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const loyaltyColor = {
    Gold: "bg-yellow-100 text-yellow-700",
    Silver: "bg-gray-100 text-gray-600",
    Bronze: "bg-orange-100 text-orange-700",
  };

  return (
    <div>
      <PageHeader title="Customers" breadcrumb="Customer List">
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg hover:opacity-80"
        >
          Add Customer
        </button>
      </PageHeader>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Add Customer</h2>
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
            <label className="text-sm text-gray-500 block mb-1">Email</label>
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Email"
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <label className="text-sm text-gray-500 block mb-1">Phone</label>
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Phone"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <label className="text-sm text-gray-500 block mb-1">Loyalty</label>
            <select
              className="w-full border p-2 rounded mb-5"
              onChange={(e) => setForm({ ...form, loyalty: e.target.value })}
            >
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
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
                <th className="p-4 text-left">Customer ID</th>
                <th className="p-4 text-left">Customer Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust) => (
                <tr key={cust.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{cust.id}</td>
                  <td className="p-4">{cust.customerName}</td>
                  <td className="p-4">{cust.email}</td>
                  <td className="p-4">{cust.phone}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${loyaltyColor[cust.loyalty]}`}
                    >
                      {cust.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
