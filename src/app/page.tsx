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
        gridTemplateColumns={'23vw 1fr'}
        h='100vh'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <Navbar />
        <GridItem pl='2' bg='#31363F' area={'main'}>
          Main
        </GridItem>
      </Grid>
    </main>
  );
}
