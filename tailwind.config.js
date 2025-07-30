module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              "&:hover": {},
            },
            h2: {
              fontWeight: "bolder",
              color: "var(--color-green2)",
            },
            h3: {
              fontWeight: "bold",
              color: "var(--color-green2)",
              opacity: "80%",
            },
            h4: {
              fontWeight: "bold",
              color: "var(--color-green2)",
              opacity: "80%",
            },
            p: {
              fontWeight: "thin",
              lineHeight: "1.35",
              opacity: "90%",
            },
            li: {
              color: "var(--color-green2)",
              borderColor: "var(--color-green2)",
              "&::marker": {
                color: "inherit",
              },
            },
            strong: {
              color: "inherit",
            },
            margin: "0 auto",
          },
        },
        invert: {
          css: {
            h2: {
              fontWeight: "bolder",
              color: "var(--color-rosewater)",
            },
            h3: {
              fontWeight: "bold",
              color: "var(--color-rosewater)",
              opacity: "80%",
            },
            h4: {
              fontWeight: "bold",
              color: "var(--color-rosewater)",
              opacity: "80%",
            },

            li: {
              color: "inherit",
              "&::marker": {
                color: "inherit",
              },
            },
          },
        },
      },
    },
  },
};
