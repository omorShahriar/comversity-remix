import { Button } from "@mantine/core";
import { Link } from "remix";
const Screen = () => {
  return (
    <>
      <p className="absolute text-justify top-[5%] left-[5%] text-sm max-w-[500px] ">
        The Order to Cash cycle represents the entire group of processes from
        order entry to cash application, often referred to generally as the
        Order-to-Cash Cycle (OTC or O2C) and specifically divided into the
        Order-to-Invoice (OTI) and Invoice-to-Cash (ITC) cycles.
      </p>
      <Button
        component={Link}
        to="/order-to-cash"
        className="absolute top-[32%] left-[40%] bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
        radius="lg"
        size="lg"
      >
        Next
      </Button>
    </>
  );
};

export default Screen;
