import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<Props> = ({ children, className, ...props }) => {
    return <div className={cn(className, "container mx-auto px-4 sm:px-6 lg:px-8")} {...props}>{children}</div>;
}