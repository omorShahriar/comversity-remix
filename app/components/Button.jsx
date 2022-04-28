import { Button as MantineButton } from "@mantine/core";
const Button = ({ children, ...props }) => {
  return (
    <MantineButton
      {...props}
      className="absolute -bottom-8 left-[40%] bg-white text-slate-900 hover:text-white border-2 border-[#039FDC]"
      radius="lg"
      size="lg"
    >
      {children}
    </MantineButton>
  );
};

export default Button;
