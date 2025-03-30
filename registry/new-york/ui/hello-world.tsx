import React from "react"
import { Button } from "@/components/ui/button"

type Props = {}

const HelloWorld = (props: Props) => {
  return <Button>Hello World</Button>
}

HelloWorld.displayName = "HelloWorld"

export { HelloWorld }
