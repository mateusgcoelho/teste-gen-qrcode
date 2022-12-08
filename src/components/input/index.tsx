import { styled } from "../../styles";

export const Input = styled("input", {
  backgroundColor: "white",
  padding: "12px 16px",
  width: "100%",
  color: "black",
  border: "1px solid $gray",
  fontWeight: "normal",
  fontSize: 16,
  borderRadius: 4,

  "&+&": {
    marginTop: 16,
  },

  "&::placeholder": {
    color: "$gray",
  },
});
