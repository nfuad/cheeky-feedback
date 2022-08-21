import { styled } from "../../theme";

const FormContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "10px",
  
  // padding: "5px",

  overflow: "hidden",
  maxHeight: 0,
  transition: "max-height 0.4s ease-out",
});

const TextArea = styled("textarea", {
  padding: "8px 12px",
  borderRadius: "12px",
  border: "1px solid $border",
  background: "$bg2",
  resize: "none",
  outline: "none",
  transition: "box-shadow 300ms ease-in-out",

  fontFamily: "Roboto",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "140%",
  color: "$text",

  width: "100%",
  minHeight: "112px",
  boxSizing: "border-box",

  // "&:focus": {
  //   boxShadow: "0px 0px 2px 2px $colors$focus",
  // },
});

const Button = styled("button", {
  width: "100%",
  borderRadius: "12px",
  border: "1px solid $border",
  padding: "8px 24px",
  background: "$bg2",

  color: "$btnText",
  fontsize: "14px",
  fontWeight: "500",
  outline: "none",
  cursor: "pointer",
});

export interface FormProps {
  isCollapsed: boolean;
}

export const Form: React.FC<FormProps> = ({ isCollapsed = true }) => {
  return (
    <FormContainer
      css={{
        maxHeight: isCollapsed ? "0px" : "250px",
        marginTop: isCollapsed ? "0px" : "36px",
      }}
    >
      <TextArea id="form-text" placeholder="Tell us what you know..." />
      <Button>Submit</Button>
    </FormContainer>
  );
};
