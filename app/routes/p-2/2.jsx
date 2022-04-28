import { DialougeBoxRight } from "~/components/DialougeBox";
import NextButton from "~/components/NextButton";
import TextBox from "~/components/TextBox";

const screen = () => {
  return (
    <DialougeBoxRight>
      <TextBox>
        A business process has also been defined as a set of activities and
        tasks that, once completed, will accomplish an organizational goal.
        Processes can be simple or complex based on the number of steps
        required, number of systems involved, etc. They can be short or long
        running, with longer processes tending to have multiple dependencies and
        a greater documentation requirement
      </TextBox>
      <NextButton to="/p-2/3">Next</NextButton>
    </DialougeBoxRight>
  );
};

export default screen;
