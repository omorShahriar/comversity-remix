import {
  createStyles,
  Header,
  Menu,
  Group,
  Button,
  Burger,
  Container,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { Link } from "remix";

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

const BrandLink = () => (
  <Link to="/" className="font-bold  md:text-3xl text-2xl text-themeBrown  ">
    ComVersity
  </Link>
);

const HeaderMenu = ({ links }) => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.link}
        className={`${classes.link} text-themeGrey-default`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Header
      height={70}
      className=" border-b-0 pt-4 pb-2 from-themeBlue-default/40 to-transparent bg-gradient-to-b fixed"
    >
      <Container size="xl">
        <div className={classes.inner}>
          <BrandLink />
          <Group spacing="xl" className={classes.links}>
            {items}
            <Button
              component={Link}
              to="/sign-up"
              size="md"
              radius="md"
              className=" bg-themeBlue-default font-medium duration-200   text-white hover:bg-themeBlue-default/90 "
            >
              Sign Up
            </Button>
          </Group>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
};

export default HeaderMenu;
