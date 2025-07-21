'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);
console.log(transactions,"jjjj")
  return (
    // <div className="p-4">
    //   <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
    //   <div className="border rounded-lg overflow-hidden">
    //     <table className="w-full text-sm">
    //       <thead className="bg-gray-100">
    //         <tr>
    //           <th className="p-2 text-left">Title</th>
    //           <th className="p-2 text-left">Amount</th>
    //           <th className="p-2 text-left">Category</th>
    //           <th className="p-2 text-left">Type</th>
    //           <th className="p-2 text-left">Date</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {transactions.map((txn, idx) => (
    //           <tr key={idx} className="border-t">
    //             <td className="p-2">{txn.title}</td>
    //             <td className="p-2">₹{txn.amount}</td>
    //             <td className="p-2">{txn.category}</td>
    //             <td className="p-2">
    //               <span className={`text-white px-2 py-1 rounded text-xs ${txn.type === 'Income' ? 'bg-green-500' : 'bg-red-500'}`}>
    //                 {txn.type}
    //               </span>
    //             </td>
    //             <td className="p-2">{new Date(txn.date).toLocaleDateString()}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <Card>
  <CardContent className="p-4">
    <table className="w-full text-sm">
      <thead>
        <tr>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Amount</th>
          <th className="p-2 text-left">Type</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn, idx) => (
          <tr key={idx}>
            <td className="p-2">{txn.title}</td>
            <td className="p-2">₹{txn.amount}</td>
            <td className="p-2">
              <Badge variant={txn.type === "Income" ? "default" : "destructive"}>
                {txn.type}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </CardContent>
</Card>
  );
}
