import { Button } from "@mantine/core";
import { Link } from "remix";
import PageShell from "~/components/pages/secondPage/PageShell";

const screen = () => {
  return (
    <PageShell>
      <p className="absolute text-justify top-[5%] left-[5%] text-sm max-w-[500px] ">
        A business process has also been defined as a set of activities and
        tasks that, once completed, will accomplish an organizational goal.
        Processes can be simple or complex based on the number of steps
        required, number of systems involved, etc. They can be short or long
        running, with longer processes tending to have multiple dependencies and
        a greater documentation requirement
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
    </PageShell>
  );
};

export default screen;
