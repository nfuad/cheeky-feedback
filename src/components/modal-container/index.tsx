import { styled } from "@stitches/react";
import { XIcon } from "../../icons/XIcon";

const Container = styled("div", {
  background: "$bg1",
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
  fontFamily: "sans-serif",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
  color: "$text",
  display: "flex",
  alignItems: "center",

  marginBottom: "40px",
  // position: "relative",
});

const CloseButton = styled("button", {
  border: "none",
  background: "none",
  cursor: "pointer",
  outline: "none",
  position: "absolute",
  right: "30px",
});

interface ModalContainerProps {
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
