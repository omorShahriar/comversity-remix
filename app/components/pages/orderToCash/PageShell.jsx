const PageShell = ({ children }) => {
  return (
    <div className=" bg-[url('/order-to-cash-background.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen relative">
      <div className="  p-[2%] grid h-screen grid-cols-12 gap-x-10 ">
        <div className="flex flex-col gap-y-5 col-span-4 py-20 pl-36">
          <div className="pt-10">
            <div className="shelf shadow-md  ">
              <img alt="shelf" src="/shelf.png" />
            </div>
          </div>
          <div className="pt-10">
            <div className="shelf shadow-md">
              <img alt="shelf" src="/shelf.png" />
            </div>
          </div>
          <div className="pt-10">
            <div className="shelf shadow-md">
              <img alt="shelf" src="/shelf.png" />
            </div>
          </div>
          <div className="pt-10">
            <div className="shelf shadow-md">
              <img alt="shelf" src="/shelf.png" />
            </div>
          </div>
        </div>
        <div className="col-span-8 grid  grid-cols-12 gap-x-5 pt-[10%] ">
          <div className="col-start-2 col-span-7 pt-[10%]   relative ">
            {children}
            <img src="/dialouge-box-mirror.png" alt="dialouge box" />
          </div>
          <div className="tania col-start-9 col-span-4 ">
            <img alt="tania" src="/tania-mirror.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageShell;
