import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ContentPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement>;

export function Content({ children }: ContentPropsType) {
    return <div className="content">
        {children}
    </div>
}