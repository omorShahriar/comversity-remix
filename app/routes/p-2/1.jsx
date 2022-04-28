import NextButton from "~/components/NextButton";
import { DialougeBoxRight } from "~/components/DialougeBox";
import TextBox from "~/components/TextBox";
const screen = () => {
  return (
    <DialougeBoxRight>
      <TextBox>
        A business process is a collection of linked tasks that find their end
        in the delivery of a service or product to a client. The definition of
        the term "business process'' and the development of this definition
        since its conception by Adam Smith in 1776 has led to numerous areas of
        study.
      </TextBox>
      <NextButton to="/p-2/2">Next</NextButton>
    </DialougeBoxRight>
  );
};

export default screen;
