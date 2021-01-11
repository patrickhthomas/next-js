import * as React from "react"
import { Frame, Scroll } from "framer"

export function Scroll() {
  return (
    <Scroll height={200} width={200}>
      <Frame size={300}>Hello World!</Frame>
    </Scroll>
  )
}