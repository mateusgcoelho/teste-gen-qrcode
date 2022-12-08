import { globalCss, styled } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Arial",
    fontWeight: 400,
  },
});

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});

export const Spacer = styled("div", {
  height: 32,
});

export const HStack = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",

  margin: "0 auto",
});

export const VStack = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",

  width: "100%",

  margin: "0 auto",
});
