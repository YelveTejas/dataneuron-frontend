import React, { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import Update from './Update';
import Create from './Create';
const ResponsiveReactGrid = WidthProvider(Responsive);
const NewRezibale = () => {
    const [layout, setLayout] = useState([
        { i: "1", x: 0, y: 0, w: 6, h: 3 },
        { i: "2", x: 6, y: 0, w: 5, h: 3 },
        { i: "3", x: 0, y: 2, w: 6, h: 4 },
      ]);
    
      const onResize = (layout, PreviousItem, newItem) => {
        setLayout(layout.map((item) => (item.i === PreviousItem.i ? newItem : item)));
      };
    
      const handleClick = (e) => {
        e.stopPropagation();
      };
  return (
    <ResponsiveReactGrid
    resizeHandles={["s", "w", "e", "n"]}
    className="layout"
    layouts={{ lg: layout }}
    onResize={onResize}
    cols={{ lg: 14, md: 10, sm: 6, xs: 4, xxs: 2 }}
    rowHeight={100}
  >
    {layout.map((item) => (
      <div
        key={item.i}
        data-grid={item}
        className='box'
        onClick={handleClick}
      >
        <div className="resizable-content">
          {item.i === "1" ? (
            <div>
              <div>
              <Create/>
              </div>
            
            </div>
          ) : item.i === "2" ? (
            <div >
             <div>
              <Update/>
                </div>         
            </div>
          ) : (
            <div  >
              
            <text>Resizable box</text>
            </div>
          )}
        </div>
      </div>
    ))}
  </ResponsiveReactGrid>
  )
}

export default NewRezibale