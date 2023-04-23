const Dashboard = ({ children }) => {
  return (
    <section>
      <main className="p-5">
        <div className="bg-stone-200 shadow-xl rounded-xl p-2 flex flex-col justify-center gap-6">
          {children}
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
