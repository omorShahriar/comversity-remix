import LinkButton from "~/components/LinkButton";
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
        <div className="col-span-4 bg-slate-50/25 rounded-md p-8 flex flex-col gap-y-2 justify-center relative">
          <LinkButton>The Prospect to Order (PTO)</LinkButton>
          <LinkButton to="/order-to-cash">
            The Order-to-Cash (O2C) cycle
          </LinkButton>
          <LinkButton>The Supply Chain Management (SCM)</LinkButton>
          <LinkButton>The Procure to Pay (P2P)</LinkButton>
          <LinkButton>The Pricing</LinkButton>
          <LinkButton>The Product Management</LinkButton>
          <LinkButton>The Account Cycle</LinkButton>
          <LinkButton>Strategy /Budgeting</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default PageShell;
