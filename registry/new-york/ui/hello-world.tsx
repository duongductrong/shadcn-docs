import { Button } from "@/components/ui/button"

export interface HelloWorldProps {}

const HelloWorld = (props: HelloWorldProps) => {
  return <Button>Hello World</Button>
}

HelloWorld.displayName = "HelloWorld"

export { HelloWorld }
