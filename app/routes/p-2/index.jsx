import { Button } from "@mantine/core";
import { Link } from "remix";
import PageShell from "~/components/pages/secondPage/PageShell";
const screen = () => {
  return (
    <PageShell>
      <p className="absolute top-[5%] left-[5%] text-sm max-w-prose "> </p>
      <Button
        component={Link}
        to="1"
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
