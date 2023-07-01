import Box from "../box";

export default function Page({ children }: any) {
  return (
    <Box
      name="pageBox"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr )"
      gridTemplateRows="repeat(13, 1fr)"
      columnGap="1rem"
      height="100vh"
      width="100vw"
      background="#FFFAF1"
    >
      {children}
    </Box>
  );
}
