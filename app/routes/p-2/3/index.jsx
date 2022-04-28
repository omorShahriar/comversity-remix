import Button from "~/components/Button";
import { DialougeBoxRight } from "~/components/DialougeBox";
import TextBox from "~/components/TextBox";
const Screen = () => {
  return (
    <DialougeBoxRight>
      <TextBox>
        Now, you know what a business process is. There are 8 business processes
        from which you have to choose one.
      </TextBox>
      <Button disabled>Next</Button>
    </DialougeBoxRight>
  );
};

export default Screen;
