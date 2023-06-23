import FlexDiv from "components/layout/flexContainer";
import "pages/Home/styles.css";

export default function Home() {
  return (
    <FlexDiv
      justifyContent="space-around"
      gap="8rem"
      className="me stuff"
      backgroundColor="yellow"
      alignContent="center"
      textAlign="end"
    >
      <div>Home</div>
      <div>menu</div>
    </FlexDiv>
  );
}
