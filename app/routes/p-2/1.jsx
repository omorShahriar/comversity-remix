import { Button } from "@mantine/core";
import { Link } from "remix";
import PageShell from "~/components/pages/secondPage/PageShell";

const screen = () => {
  return (
    <PageShell>
      <p className="absolute text-justify top-[7%] left-[5%] text-sm max-w-[500px] ">
        A business process is a collection of linked tasks that find their end
        in the delivery of a service or product to a client. The definition of
        the term "business process'' and the development of this definition
        since its conception by Adam Smith in 1776 has led to numerous areas of
        study.
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
    </PageShell>
  );
};

export default screen;
