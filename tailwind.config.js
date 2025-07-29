module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-green2)",
            a: {
              "&:hover": {},
            },
            h2: {
              fontWeight: "bolder",
              color: "inherit",
            },
            h3: {
              fontWeight: "bold",
              color: "inherit",
              opacity: "80%",
            },
            h4: {
              fontWeight: "bold",
              color: "inherit",
              opacity: "80%",
            },
            p: {
              color: "var(--color-gray-700)",
              fontWeight: "thin",
              lineHeight: "1.35",
              opacity: "90%",
            },
            margin: "0 auto",
          },
        },
        invert: {
          css: {
            color: "var(--color-rosewater)",
            p: {
              color: "var(--color-gray3)",
            },
          },
        },
      },
    },
  },
};
