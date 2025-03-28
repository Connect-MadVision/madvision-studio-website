
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const AspectRatio = forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    className={cn("relative w-full", className)}
    {...props}
  />
))
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
