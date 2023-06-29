import Box from "components/layout/box";
import "pages/Home/styles.css";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      backgroundColor="green"
      tablet={{ backgroundColor: "cadetblue" }}
      desktop={{ backgroundColor: "red" }}
    >
      <div>Home</div>
      <div>menu</div>
    </Box>
  );
}
