module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // maxWidth: "1024px",
            a: {
              "&:hover": {},
              textDecoration: "none",
            },
            h2: {
              fontWeight: "bolder",
              color: "var(--color-green2)",
            },
            h3: {
              fontWeight: "bold",
              color: "var(--color-green2)",
            },
            h4: {
              fontWeight: "bold",
              color: "var(--color-green2)",
            },
            p: {
              lineHeight: "1.35",
            },
            ul: {
              margin: "0",
            },
            li: {
              margin: "0",
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
            },
            h4: {
              fontWeight: "bold",
              color: "var(--color-rosewater)",
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
