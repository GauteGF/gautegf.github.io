'use client';
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from '@/components/navbar';
export default function Home() {
  return (
    <main>
<Grid
  templateAreas={`"nav main"
                  "nav footer"`}
  gridTemplateRows={'100vh 1fr 0px'}
  gridTemplateColumns={'25vw 1fr'}
  h='100vh'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <Navbar />
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
    </main>
  );
}
