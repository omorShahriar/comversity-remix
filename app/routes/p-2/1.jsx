import { Button } from "@mantine/core";
import { Link } from "remix";

const screen = () => {
  return (
    <div className=" bg-[url('/p-2-background.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen relative">
      <div className=" pt-[15%] p-[2%] grid h-screen grid-cols-12 gap-x-10 ">
        <div className="col-span-8 flex ">
          <div className="tania flex-grow-0">
            <img alt="tania" src="/tania.png" />
          </div>
          <div className=" flex-grow  max-w-[820px] relative ">
            <p className="absolute text-justify top-[7%] left-[5%] text-sm max-w-[500px] ">
              A business process is a collection of linked tasks that find their
              end in the delivery of a service or product to a client. The
              definition of the term "business process'' and the development of
              this definition since its conception by Adam Smith in 1776 has led
              to numerous areas of study.
            </p>
            <Button
              component={Link}
              to="/p-2/2"
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
