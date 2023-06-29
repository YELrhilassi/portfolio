import Box from "components/layout/box";
import "pages/Home/styles.css";

export default function Home() {
  return (
    <>
      <Box backgroundColor="yellow" width="80%" margin="0 auto">
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

        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          ratione cumque fuga repellat quibusdam dolores odio, quisquam
          voluptate, omnis aspernatur sunt?
        </Box>
      </Box>
    </>
  );
}
