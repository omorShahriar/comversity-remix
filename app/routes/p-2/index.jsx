import { DialougeBoxRight } from "~/components/DialougeBox";
import NextButton from "~/components/NextButton";
import TextBox from "~/components/TextBox";

const screen = () => {
  return (
    <DialougeBoxRight>
      <TextBox>
        Hi there! I am Tania. I am here to help you go through the process
      </TextBox>
      <NextButton to="1">Next</NextButton>
    </DialougeBoxRight>
  );
};

export default screen;
