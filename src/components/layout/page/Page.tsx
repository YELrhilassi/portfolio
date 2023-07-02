import Box from "../box";
import { BoxProps } from "../layoutTypes";

export default function Page({ children, ...rest }: BoxProps) {
  return (
    <Box
      name="pageBox"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr )"
      gridTemplateRows="repeat(13, 1fr)"
      columnGap="1rem"
      height="100vh"
      width="100vw"
      {...rest}
    >
      {children}
    </Box>
  );
}
