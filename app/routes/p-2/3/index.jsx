import { Button } from "@mantine/core";
const Screen = () => {
  return (
    <>
      <p className="absolute text-justify top-[5%] left-[5%] text-sm max-w-[500px] ">
        Now, you know what a business process is. There are 8 business processes
        from which you have to choose one.
      </p>
      <Button
        disabled
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
