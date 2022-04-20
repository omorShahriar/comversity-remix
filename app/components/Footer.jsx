import { Link } from "remix";
import { Container } from "@mantine/core";
export default function Footer() {
  return (
    <footer>
      <Container
        size="xl"
        className=" px-2 mx-auto  border-t-2 border-t-themeBlue-light pt-2 pb-4 "
      >
        <div className="text-themeGrey flex justify-between w-full sm:text-base text-sm ">
          <span className="text-md">
            ComVersity &copy; {new Date().getFullYear()}
          </span>
          <div>
            <Link
              to="privacy-policy"
              className="px-2 border-r border-themeGrey"
            >
              Privacy Policy
            </Link>
            <Link to="terms-of-use" className="px-2">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
