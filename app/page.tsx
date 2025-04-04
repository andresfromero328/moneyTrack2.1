import Accounts from "@/components/pages/dashboard/Accounts/Accounts";
import Budgets from "@/components/pages/dashboard/Budgets/Budgets";
import Subscriptions from "@/components/pages/dashboard/Subs/Subscriptions";
import UpcomingBill from "@/components/pages/dashboard/UpcomingBills/UpcomingBill";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto flex flex-col gap-5 p-5">
      <h1>Dashoboard</h1>

      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 gap-5">
        <small className="col-span-2 grid place-items-center">
          [area chart]
        </small>

        <Accounts />
        <UpcomingBill />
        <Budgets />
        <Subscriptions />
      </div>
    </main>
  );
}
