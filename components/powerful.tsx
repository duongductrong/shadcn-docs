"use client"

import { cn } from "@/lib/utils"
import { Crown, Cuboid, Diamond, PackageOpen } from "lucide-react"
import { ComponentProps, ReactNode } from "react"

interface PowerfulProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Powerful({ className, ...props }: PowerfulProps) {
  return (
    <div {...props} className={cn("grid grid-cols-12 gap-4", className)}>
      <h2 className="col-span-12 text-4xl md:text-5xl font-bold">Powerful.</h2>
      <p className="col-span-12 text-sm md:text-base text-muted-foreground mb-4">
        We believe in the power of open source and the ability to build powerful tools that help you
        build your own documentation site.
      </p>

      <PowerfulCard
        title="Open source"
        description="Free and open source, built with modern technologies. Available on GitHub for anyone to use, modify, and contribute to the project."
        image="Open"
        block={<PackageOpen className="size-16 mb-5" />}
        className="col-span-12"
      />
      <PowerfulCard
        title="Boilerplate"
        description="Built with Next.js 14, React Server Components, TypeScript, Tailwind CSS, and shadcn/ui components for a modern development experience."
        image="Stack"
        block={<Cuboid className="size-16 mb-5" />}
        className="col-span-12 md:col-span-4"
      />
      <PowerfulCard
        title="Feature Rich"
        description="Includes built-in dark mode, full-text search, SEO optimization, responsive design, and MDX support for writing documentation with ease."
        image="Features"
        block={<Crown className="size-16 mb-5" />}
        className="col-span-12 md:col-span-4"
      />
      <PowerfulCard
        title="Developer Experience"
        description="Clean code structure, type safety, hot reloading, and excellent documentation to help you build and customize your docs site efficiently."
        image="DX"
        block={<Diamond className="size-16 mb-5" />}
        className="col-span-12 md:col-span-4"
      />
    </div>
  )
}

export interface PowerfulCardProps extends ComponentProps<"div"> {
  title: string
  description: string
  image: string
  block?: ReactNode
}

export const PowerfulCard = ({
  title,
  description,
  image,
  className,
  block,
  ...props
}: PowerfulCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-background rounded-lg border border-dashed border-border min-h-[200px] p-6",
        className
      )}
    >
      {block}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
