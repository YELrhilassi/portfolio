import FlexDiv from "components/layout/flexContainer";
import "pages/Home/styles.css";

export default function Home() {
  return (
    <FlexDiv
      justifyContent="space-around"
      gap="9rem"
      className="me stuff"
      backgroundColor="red"
      alignContent="center"
    >
      <div>Home</div>
      <div>menu</div>
    </FlexDiv>
  );
}
