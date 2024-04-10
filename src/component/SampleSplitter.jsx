import React, { useState } from 'react'
import { cn } from '../utilis/cn'
const SampleSplitter = ({id='drag-bar',dir,isDragging,...props}) => {
    const [isfocused,setFocused] = useState(false)
  return (
    <div
    id={id}
    data-testid={id}
    tabIndex={0}
    className={cn(
      'sample-drag-bar',
      dir === 'horizontal' && 'sample-drag-bar--horizontal',
      (isDragging || isfocused) && 'sample-drag-bar--dragging'
    )}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    {...props}
  />
  )
}

export default SampleSplitter