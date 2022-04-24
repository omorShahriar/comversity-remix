import { Button } from "@mantine/core";
import { Link } from "remix";
import PageShellV2 from "~/components/pages/orderToCash/PageShellV2";

const screen = () => {
  return (
    <PageShellV2>
      <div className="flex flex-col gap-y-5 col-span-4 py-20 pl-24">
        <div className="mt-10 flex flex-col ">
          <div className="relative">
            <Button
              disabled
              className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
            >
              Result Area
            </Button>
          </div>
          <div className="shelf shadow-md  ">
            <img alt="shelf" src="/shelf.png" className=" w-full " />
          </div>
        </div>
        <div className="mt-10  flex flex-col">
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
        <div className="mt-10 flex flex-col">
          <div className="relative ">
            <div className="rounded-md absolute z-10 bg-white/50 max-w-[320px] flex flex-col gap-y-2 -top-20 -right-36  p-10 border-[#039FDC] border-2">
              <Button
                component={Link}
                to="/prototype"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Functional
              </Button>
              <Button
                component={Link}
                to="technical"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Technical
              </Button>
              <Button
                component={Link}
                to="operational"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Operational
              </Button>
              <Button
                component={Link}
                to="behavioral"
                className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              >
                Behavioral
              </Button>
            </div>
            <Button
              component={Link}
              to="/order-to-cash/dimension"
              className="bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
            >
              Dimension
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
      </div>
      <div className="col-span-8 grid  grid-cols-12 gap-x-5 pt-[10%] ">
        <div className="col-start-2 col-span-7 pt-[10%]   relative ">
          <p className="absolute text-justify top-[15%] left-[22%] text-sm max-w-[340px] ">
            Great! Now we will start working with the basic building blocks
            which are the Sub-Competencies. But before selecting any particular
            sub-competency, you have to define which particular dimension you
            are interested to work on. There are 4 common dimensions, choose
            one.
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
