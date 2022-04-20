import {
  Container,
  Anchor,
  Title,
  Text,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";

import { Link, Form } from "remix";
import Layout from "~/components/Layout";
const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});
const SignUp = () => {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <Layout>
      <Container
        size="xl"
        className="  min-h-[calc(100vh-138px)] items-center  grid grid-cols-12 mb-8  gap-2"
      >
        <div className="grid xl:items-end mx-auto col-span-12   lg:order-none order-2 max-w-[500px] lg:max-w-full w-full   lg:col-span-6 my-8 lg:my-0">
          <img
            src="/signin-image.svg"
            alt="sign in "
            width="760px"
            height="474px"
          />
        </div>
        <div className="  lg:col-start-9 lg:col-span-4 col-span-12  ">
          {/* Form implementation needed */}
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Welcome!
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5} mb={64}>
            Already have an account?{" "}
            <Anchor component={Link} to="/sign-in" size="sm">
              Log in
            </Anchor>
          </Text>

          <Form onSubmit={form.onSubmit((values) => console.log(values))}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <FloatingLabelInput
                label="first name"
                {...form.getInputProps("firstName")}
              />
              <FloatingLabelInput
                label="last name"
                {...form.getInputProps("lastName")}
              />
            </SimpleGrid>

            <FloatingLabelInput label="user name" />
            <FloatingLabelInput
              label="email"
              {...form.getInputProps("email")}
            />
            <FloatingLabelInput
              label="password"
              type="password"
              {...form.getInputProps("password")}
            />
            <FloatingLabelInput
              label="Confirm Password"
              type="password"
              {...form.getInputProps("confirmPassword")}
            />

            <Button
              fullWidth
              mt="xl"
              className=" bg-themeBlue-default duration-200 "
              type="submit"
              size="xl"
            >
              Sign up
            </Button>
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default SignUp;
