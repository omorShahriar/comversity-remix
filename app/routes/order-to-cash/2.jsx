import { Button } from "@mantine/core";
import { Link } from "remix";
import PageShell from "../../components/pages/orderToCash/PageShell";

const screen = () => {
  return (
    <PageShell>
      <p className="absolute text-justify top-[13.5%] left-[22%] text-sm max-w-[345px] ">
        RAs are the items that are critical for an organization or employee to
        be successful. These Result areas. generally already in place in most
        organizations in one form or another provide a basis to measure current
        efficiency and comparative results of the change in performance.
      </p>
      <Button
        component={Link}
        to="/prototype"
        className="absolute top-[37%] left-[44%] bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
        radius="lg"
        size="lg"
      >
        Next
      </Button>
    </PageShell>
  );
};

export default screen;
