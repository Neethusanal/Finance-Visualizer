import TransactionForm from "@/components/TransactionForm";
import TransactionTable  from "@/components/TransactionsTable";
export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Personal Finance Visualizer</h1>
      <TransactionForm />
      <TransactionTable/>

    </main>
  );
}
