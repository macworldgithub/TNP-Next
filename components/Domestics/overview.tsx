const Overview = ({ text }: any) => {
  return (
    <div className="p-6 lg:p-0">
      <h1 className="text-white text-2xl font-bold ">Overview</h1>
      <p className="text-white">{text}</p>
    </div>
  );
};
export default Overview;
