export interface ArrowButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string | undefined;
}

export interface ArrowbtnToProps extends ArrowButtonProps {
  to: string;
}
