import React, { useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import { cn } from '../utilis/cn.js';
import SampleSplitter from './SampleSplitter.jsx';
import Create from './Create.jsx';
import Update from './Update.jsx';


const MyResizableLayout = () => {
  const [flag,setFlag] = useState(false)
//  console.log(flag,'flag')
    const {
      isDragging:isTerminalDragging,
      position:terminalH,
      splitterProps:terminalDragBarProps
    } = useResizable({
      axis:"y",
      initial:150,
      min:50,
      reverse:true
    })

    const {
      isDragging: isFileDragging,
      position: fileW,
      splitterProps: fileDragBarProps
    } = useResizable({
      axis: "x",
      initial: 250,
      min: 300
    });
    const {
      isDragging: isPluginDragging,
      position: pluginW,
      splitterProps: pluginDragBarProps
    } = useResizable({
      axis: "x",
      initial: 200,
      min: {
        left: 200, // Minimum width for the left side
        right: 300 // Minimum width for the right side
      },
      reverse: true
    });
    

    return (
      <div
      className={
        "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
      }
    >
      <div className={"flex grow"}>
        <div
          className={cn("shrink-0 contents", isFileDragging && "dragging")}
          style={{ width: fileW }}
        >
         <Create setFlag={setFlag}/>
        </div>
        <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={"flex grow"}>
          <div
            className={cn("shrink-0 contents", isPluginDragging && "dragging")}
            style={{ width: pluginW }}
          >
           <Update flag={flag}/>
          </div>
        </div>
      </div>
      <SampleSplitter
        dir={"horizontal"}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div
        className={cn(
          "shrink-0 bg-darker contents",
          isTerminalDragging && "dragging"
        )}
        style={{ height: terminalH }}
      >
        Terminal
      </div>
    </div>
    )
};

export default MyResizableLayout;
