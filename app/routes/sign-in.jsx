import {
  Checkbox,
  Anchor,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { Link, Form } from "remix";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";
import Layout from "~/components/Layout";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const SignIn = () => {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Layout>
      {" "}
      <Container
        size="xl"
        className=" min-h-[calc(100vh-138px)] place-content-center   grid grid-cols-12  gap-2"
      >
        <div className="grid xl:items-end mx-auto col-span-12   lg:order-none order-2 max-w-[500px] lg:max-w-full w-full 2xl:col-span-5  lg:col-span-6 my-8 lg:my-0">
          <img
            src="/signin-image.svg"
            alt="sign in"
            width="760px"
            height="474px"
          />
        </div>
        <div className=" lg:col-start-9 lg:col-span-4 col-span-12 ">
          {/* Form implementation needed here */}

          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Welcome back!
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5} mb={64}>
            Do not have an account yet?{" "}
            <Anchor component={Link} to="/sign-up" size="sm">
              Create account
            </Anchor>
          </Text>

          <Form>
            <FloatingLabelInput
              label="email"
              {...form.getInputProps("email")}
            />
            <FloatingLabelInput
              label="password"
              type="password"
              {...form.getInputProps("password")}
            />
            <Group position="apart" mt="md">
              <Checkbox
                label="Remember me"
                classNames={{ label: " text-themeGrey-default " }}
              />
              <Anchor component={Link} to="forgot-password" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              fullWidth
              mt="xl"
              className=" bg-themeBlue-default "
              type="submit"
              size="xl"
            >
              Sign in
            </Button>
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default SignIn;
