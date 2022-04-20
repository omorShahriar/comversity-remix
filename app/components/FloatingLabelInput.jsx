import { useState, useRef } from "react";

import { TextInput, PasswordInput, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, { floating }) => ({
  root: {
    position: "relative",
  },

  label: {
    position: "absolute",
    zIndex: 2,
    top: 7,
    left: theme.spacing.lg,
    pointerEvents: "none",
    color: floating
      ? theme.colorScheme === "dark"
        ? theme.white
        : theme.colors.themeGray[0]
      : theme.colorScheme === "dark"
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: "transform 150ms ease, color 150ms ease, font-size 150ms ease",
    transform: floating ? `translate(-${theme.spacing.lg}px, -30px)` : "none",
    fontSize: floating ? theme.fontSizes.sm : theme.fontSizes.lg,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: "opacity 150ms ease",
    opacity: floating ? 1 : 0,
  },

  input: {
    "&::placeholder": {
      transition: "color 150ms ease",
      color: !floating ? "transparent" : undefined,
    },
  },
}));

export function FloatingLabelInput({
  type = "text",
  label,
  placeholder = "",
  ...otherProps
}) {
  const [focused, setFocused] = useState(false);

  const input = useRef(null);

  const { classes } = useStyles({
    floating: input.current?.value || focused,
  });

  return type === "text" ? (
    <TextInput
      label={label}
      placeholder={placeholder}
      classNames={classes}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      variant="filled"
      radius="md"
      size="md"
      mb={32}
      ref={input}
      autoComplete="nope"
      {...otherProps}
    />
  ) : (
    <PasswordInput
      label={label}
      placeholder={placeholder}
      classNames={classes}
      ref={input}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      variant="filled"
      radius="md"
      size="md"
      mb={32}
      autoComplete="nope"
      {...otherProps}
    />
  );
}
