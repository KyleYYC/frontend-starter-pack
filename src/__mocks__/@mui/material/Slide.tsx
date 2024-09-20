import React from 'react'

const Slide = ({
  children,
  in: inProp,
}: {
  children: React.ReactNode
  in: boolean
}) => (inProp ? <>{children}</> : null)

export default Slide
