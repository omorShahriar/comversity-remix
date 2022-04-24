import { Button } from "@mantine/core";
import { Link, Outlet } from "remix";
import PageShell from "~/components/pages/secondPage/PageShellV2";

const screen = () => {
  return (
    <PageShell>
      <div className="col-span-8 flex pt-[20%] ">
        <div className="tania  flex-grow-0">
          <img alt="tania" src="/tania.png" />
        </div>
        <div className=" flex-grow  max-w-[820px] relative ">
          <Outlet />
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
          to="2"
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
    </PageShell>
  );
};

export default screen;
