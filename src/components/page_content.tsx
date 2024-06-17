'use client'

import { Box, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import HorizontalCard from "./horizontal_card";


export default function PageContent() {
  return (
    <main>
      <Box gap={30} display={"flex"} flexDirection={"column"}>
              <Text fontSize="xl">Projects</Text>
              <Box padding='6' boxShadow='lg' bg='white' borderRadius={5}>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                </Box>
                <HorizontalCard 
                title='Tradjectory' 
                description='Analysis of Propulse rockets tradejectory compared to the tracking of our Radionor radio.'
                imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIvif0A3L9TqcOoaBKIwj3BJCPvnOa6rV5A&s'
                linkTo='https://folk.ntnu.no/gautegf/Bifrost_launch.html'
                />
                <HorizontalCard />
            </Box>
    </main>
  );
}