import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Powerful } from "@/components/powerful"
import { Button } from "@/components/ui/button"

const title = "Build your own documentation site"
const description =
  "A modern documentation starter template with built-in search, dark mode and more. Built with Next.js, MDX, Tailwind CSS and shadcn/ui components."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(
          description
        )}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(
          description
        )}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href="/docs/installation">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>

      <div className="container-wrapper h-[75vh]">
        <div className="container py-6">
          <Powerful />
        </div>
      </div>
    </>
  )
}
