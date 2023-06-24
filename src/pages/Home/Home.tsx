import FlexDiv from "components/layout/flexContainer";
import "pages/Home/styles.css";

export default function Home() {
  return (
    <FlexDiv
      justifyContent="space-around"
      backgroundColor="green"
      tablet={{ backgroundColor: "cadetblue" }}
      desktop={{ backgroundColor: "red" }}
    >
      <div>Home</div>
      <div>menu</div>
    </FlexDiv>
  );
}
