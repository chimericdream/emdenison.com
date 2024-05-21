import { PropsWithChildren } from "react";

interface Props {
    className?: string;
}

const BodyCopy = ({ className = "pb-3", children }: PropsWithChildren<Props>) => {
  return (
    <p className={className}>{children}</p>
  )
}

export default BodyCopy
