import { PropsWithChildren } from "react";

interface Props {
    bgImg: string;
}

const PageSectionHeader = ({ children, bgImg }: PropsWithChildren<Props>) => {
  return (
    <div className={`bg-stone-900 bg-no-repeat rounded-3xl mx-5 bg-cover bg-center ${bgImg} lg:bg-contain lg:bg-left`}>
      {children}
    </div>
  )
}

export default PageSectionHeader
