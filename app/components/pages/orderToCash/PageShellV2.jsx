const PageShellV2 = ({ children }) => {
  return (
    <div className=" bg-[url('/order-to-cash-background.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen relative">
      <div className="  p-[2%] grid h-screen grid-cols-12 gap-x-10 ">
        {children}
      </div>
    </div>
  );
};

export default PageShellV2;
