import { Button } from "@mantine/core";
import { Link } from "remix";
import PageShellV2 from "~/components/pages/orderToCash/PageShellV2";

const screen = () => {
  return (
    <PageShellV2>
      <div className="flex flex-col gap-y-5 col-span-4 py-20 pl-24">
        <div className="mt-10 flex flex-col ">
          <div className="relative">
            <div className="rounded-md absolute z-10 bg-white/50 max-w-[320px] flex flex-col gap-y-2 -top-20 -right-36  p-10 border-[#039FDC] border-2">
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Order Management
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Credit Management
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Order Fulfillment & Returns
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Order Shipping (Pick & Pack)
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Customer Invoicing
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Accounts Receivable and Collection
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Cash Application (Acc. Reconciliations)
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Dispute Management
              </Button>
              <Button
                component={Link}
                to="order-management"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Reporting and Data Management
              </Button>
            </div>
            <Button
              component={Link}
              to="/order-to-cash/result-area"
              className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
            >
              Result Area
            </Button>
          </div>
          <div className="shelf shadow-md  ">
            <img alt="shelf" src="/shelf.png" className=" w-full " />
          </div>
        </div>
        <div className="mt-10 flex flex-col ">
          <div className="relative ">
            <Button
              disabled
              className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
            >
              Competency
            </Button>
          </div>
          <div className="shelf shadow-md">
            <img alt="shelf" src="/shelf.png" className=" w-full " />
          </div>
        </div>
        <div className="mt-10">
          <div className="shelf shadow-md">
            <img alt="shelf" src="/shelf.png" className=" w-full " />
          </div>
        </div>
        <div className="mt-10">
          <div className="shelf shadow-md">
            <img alt="shelf" src="/shelf.png" className=" w-full " />
          </div>
        </div>
      </div>
      <div className="col-span-8 grid  grid-cols-12 gap-x-5 pt-[10%] ">
        <div className="col-start-2 col-span-7 pt-[10%]   relative ">
          <p className="absolute text-justify top-[15%] left-[22%] text-sm max-w-[340px] ">
            The Order to Cash Cycle consists of 9 result areas. Please choose
            one result area you want to work on.
          </p>
          <Button
            disabled
            className="absolute top-[35%] left-[44%] bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
            radius="lg"
            size="lg"
          >
            Next
          </Button>
          <img src="/dialouge-box-mirror.png" alt="dialouge box" />
        </div>
        <div className="tania col-start-9 col-span-4 ">
          <img alt="tania" src="/tania-mirror.png" />
        </div>
      </div>
    </PageShellV2>
  );
};

export default screen;
