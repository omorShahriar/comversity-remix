import { Button } from "@mantine/core";
import { Link } from "remix";

const screen = () => {
  return (
    <div className=" bg-[url('/p-2-background.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen relative">
      <div className="  p-[2%] grid h-screen grid-cols-12 gap-x-10 ">
        <div className="col-span-8 flex pt-[20%] ">
          <div className="tania flex-grow-0">
            <img alt="tania" src="/tania.png" />
          </div>
          <div className=" flex-grow  max-w-[820px] relative ">
            <p className="absolute text-justify top-[5%] left-[5%] text-sm max-w-[500px] ">
              A business process has also been defined as a set of activities
              and tasks that, once completed, will accomplish an organizational
              goal. Processes can be simple or complex based on the number of
              steps required, number of systems involved, etc. They can be short
              or long running, with longer processes tending to have multiple
              dependencies and a greater documentation requirement
            </p>
            <Button
              component={Link}
              to="/p-2/3"
              className="absolute top-[32%] left-[40%] bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
              radius="lg"
              size="lg"
            >
              Next
            </Button>
            <img src="/dialouge-box.png" alt="dialouge box" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default screen;
