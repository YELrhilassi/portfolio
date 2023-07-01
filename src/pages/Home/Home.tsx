import Box from "components/layout/box";
import { BoxProps } from "components/layout/layoutTypes";
import "pages/Home/styles.css";

export default function Home() {
  return (
    <Box
      name="homeContentBox"
      display="grid"
      background="#eee"
      margin="0 auto"
      position="relative"

      // height="100%"
    ></Box>
  );
}
