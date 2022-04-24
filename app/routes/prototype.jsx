import { Button } from "@mantine/core";
import { Link } from "remix";

const Screen = () => {
  return (
    <div className=" relative bg-[url('/begin.png')] bg-cover bg-no-repeat bg-center h-screen w-screen ">
      <Button
        component={Link}
        to="/p-2"
        className=" bg-sky-500 top-1/2 left-[48%] absolute  "
      >
        Let's begin
      </Button>
    </div>
  );
};

export default Screen;
