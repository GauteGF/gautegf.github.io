'use client'

import { Box, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import HorizontalCard from "@/components/horizontal_card";
import ExampleGrid from "@/components/grid";

export default function PageContent() {
  return (
    <main>
      <Box gap={30} display={"flex"} flexDirection={"column"}>
              <ExampleGrid />
        </Box>
    </main>
  );
}