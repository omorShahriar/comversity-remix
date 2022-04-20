import { Button } from "@mantine/core";
import { Link } from "remix";

const screen = () => {
  return (
    <div className=" bg-[url('/p-2-background.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen relative">
      <div className="  p-[2%] grid h-screen grid-cols-12 gap-x-10 ">
        <div className="col-span-8 flex pt-[20%] ">
          <div className="tania  flex-grow-0">
            <img alt="tania" src="/tania.png" />
          </div>
          <div className=" flex-grow  max-w-[820px] relative ">
            <p className="absolute text-justify top-[5%] left-[5%] text-sm max-w-[500px] ">
              Now, you know what a business process is. There are 8 business
              processes from which you have to choose one.
            </p>
            <Button
              disabled
              className="absolute top-[32%] left-[40%] bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
              radius="lg"
              size="lg"
            >
              Next
            </Button>
            <img src="/dialouge-box.png" alt="dialouge box" />
          </div>
        </div>
        <div className="col-span-4 bg-slate-50/25 rounded-md p-8 flex flex-col gap-y-2 justify-center">
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            The Prospect to Order (PTO)
          </Button>
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            The Order-to-Cash (O2C) cycle
          </Button>
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            The Supply Chain Management (SCM)
          </Button>
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            The Procure to Pay (P2P)
          </Button>
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            The Pricing
          </Button>
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            The Product Management
          </Button>
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            The Account Cycle
          </Button>
          <Button
            component={Link}
            to=""
            size="md"
            radius="md"
            className="bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
          >
            Strategy /Budgeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default screen;
