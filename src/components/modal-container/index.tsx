import { styled } from "@stitches/react";
import { XIcon } from "../../icons/xicon";

const Container = styled("div", {
  background: "$bg",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid $border",
  borderRadius: "20px",
  padding: "30px",
  maxWidth: "420px",
  position: "relative",
  boxSizing: "border-box",
});

const Header = styled("div", {
  fontFamily: "sans-serif-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
  color: "$text",
  display: "flex",
  alignItems: "center",

  marginBottom: "40px",
});

const CloseButton = styled("button", {
  border: "none",
  background: "none",
  cursor: "pointer",
  outline: "none",
  position: "absolute",
  right: "30px",
});

type ModalContainerProps = {
  headerText?: string;
  children: React.ReactNode;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  headerText = "How was your onboarding?",
  children
}) => {
  return (
    <Container>
      <Header>
        {headerText}
        <CloseButton aria-label="Close Feedback Modal">
          <XIcon />
        </CloseButton>
      </Header>
      {children}
    </Container>
  );
};
