export const CostTable = ({ costs, handleDelete }) => {
  return (
    <div className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <table className="w-full px-3 table-fixed border-separate border-spacing-2 border border-slate-400">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((cost) => (
              <tr key={cost.id}>
                <td>{cost.description}</td>
                <td>{cost.amount}</td>
                <td>{cost.category}</td>
                <td>
                  <button
                    className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                    onClick={() => handleDelete(cost)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{costs.reduce((acc, cost) => cost.amount + acc, 0)}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
