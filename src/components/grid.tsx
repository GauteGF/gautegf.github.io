'use client'
import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Box, Button, Text } from "@chakra-ui/react";
import { LineChart, Line } from 'recharts';

const ExampleGrid = () => {
   
  const initialLayout = [
    { i: 'item1', x: 0, y: 0, w: 2, h: 3, color: 'red'},
    { i: 'item2', x: 2, y: 0, w: 4, h: 3, color: 'blue'},
    { i: 'item3', x: 6, y: 0, w: 2, h: 3, color: 'green'},
  ];

  // if there is a layout in local storage, use it, otherwise use initial layout
  const getLayout = () => {
    const savedLayout = localStorage.getItem('gridLayout');
    return savedLayout ? JSON.parse(savedLayout) : initialLayout;
  };

  const [layout, setLayout] = useState<GridLayout.Layout[]>(getLayout);

  // A scuffed way to ensure the layout stays 
  useEffect(() => {
    const updateLayoutOnLoad = () => {
      setLayout(getLayout());
    };

    document.addEventListener('DOMContentLoaded', updateLayoutOnLoad);

    return () => {
      document.removeEventListener('DOMContentLoaded', updateLayoutOnLoad);
    };
  }, []);

  // Function to save layout to local storage and update state
  const saveLayout = (newLayout: GridLayout.Layout[]) => {
    localStorage.setItem('gridLayout', JSON.stringify(newLayout));
    setLayout(newLayout);
  };

  // Function to update the layout
  const onLayoutChange = (newLayout: GridLayout.Layout[]) => {
    saveLayout(newLayout);
  };

  // Function to add a new item to the layout
  const addItemToLayout = () => {
    const newItem = {
      i: `item${layout.length + 1}`, // Unique ID based on the length of the layout array
      x: (layout.length * 2) % (12), // This simplistic approach places the new item to the right, wrapping every 12 columns
      y: Infinity, 
      w: 2,
      h: 3,
    };
    const newLayout = [...layout, newItem];
    saveLayout(newLayout);
  };

  // Function to remove an item from the layout
    const removeItemFromLayout = (itemId: string) => {
        const newLayout = layout.filter(item => item.i !== itemId);
        saveLayout(newLayout);
        console.log("Removed item from layout");
        console.log(newLayout);
    };
    
  return (
    <>
    <Button onClick={addItemToLayout} colorScheme="blue" m={4}>Add Item</Button>
    <GridLayout
      className="example-layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={onLayoutChange}
    >
      {layout.map((item) => (
          <Box key={item.i} className="grid-item" bg={"red"}>
            <Text>{item.i}</Text>
            <Button 
            onClick={() => removeItemFromLayout(item.i)} 
            size="sm" 
            colorScheme="red" 
            position="absolute" 
            top="0" 
            right="0"
          >
            X
          </Button>
          </Box>
        ))}
    </GridLayout>
    </>
  );
};

export default ExampleGrid;
