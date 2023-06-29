import { BoxProps } from "components/layout/layoutTypes";

export default function stylesAndEventsFromProps(props: BoxProps) {
  const { children, className, ...rest } = props;
  const styles: any = Object.fromEntries(
    Object.entries(rest).filter(([k]) => !k.match(/^on/g))
  );

  const events: any = Object.fromEntries(
    Object.entries(rest).filter(([k]) => k.match(/^on/g))
  );
  return { styles, events };
}
