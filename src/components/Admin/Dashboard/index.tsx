import { ReactNode } from "react";

type DashboardProps = {
  children: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <section>
      <main className="bg-white p-10 flex flex-col justify-center gap-6">
        {children}
      </main>
    </section>
  );
};

export default Dashboard;
