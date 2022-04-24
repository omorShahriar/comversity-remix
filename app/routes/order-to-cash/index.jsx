import { Button } from "@mantine/core";
import { Link } from "remix";
import PageShell from "../../components/pages/orderToCash/PageShell";

const screen = () => {
  return (
    <PageShell>
      <p className="absolute text-justify top-[15%] left-[22%] text-sm max-w-[340px] ">
        Great! You have selected The Order to Cash (O2C) Cycle business process.
        Now you have to choose a Result Area. But first let's know something
        about Result Areas (RAs).
      </p>
      <Button
        component={Link}
        to="2"
        className="absolute top-[35%] left-[44%] bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
        radius="lg"
        size="lg"
      >
        Next
      </Button>
    </PageShell>
  );
};

export default screen;
