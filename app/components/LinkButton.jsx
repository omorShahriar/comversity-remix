import { Button } from "@mantine/core";
import { Link } from "remix";
const LinkButton = ({ children, to = "" }) => {
  return (
    <Button
      component={Link}
      to={to}
      className=" bg-[#DBE5FE] text-slate-900 hover:text-white border-2 border-[#039FDC]"
      radius="lg"
      size="lg"
    >
      {children}
    </Button>
  );
};
export default LinkButton;
