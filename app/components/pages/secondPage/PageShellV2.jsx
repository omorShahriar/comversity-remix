const PageShell = ({ children }) => {
  return (
    <div className=" bg-[url('/p-2-background.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen relative">
      <div className="  p-[2%] grid h-screen grid-cols-12 gap-x-10 ">
        <div className="col-span-8 flex pt-[20%] ">
          <div className="tania flex-grow-0">
            <img alt="tania" src="/tania.png" />
          </div>
          <div className=" flex-grow pt-20  max-w-fit ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageShell;
