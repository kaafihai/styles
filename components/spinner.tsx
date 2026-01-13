import { cn } from "../lib/index";
import { SpinnerIcon, type Icon } from "@phosphor-icons/react";

function Spinner({ className, ...props }: React.ComponentProps<Icon>) {
  return (
    <SpinnerIcon
      role="status"
      aria-label="Loading"
      className={cn("size-8 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
