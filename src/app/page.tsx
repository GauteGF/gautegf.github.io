'use client';
import { Link } from '@chakra-ui/next-js'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function Home() {
  return (
    <main>
      <Tabs variant='enclosed' colorScheme='red' size="md" align ='start'>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <h1 className="text-4xl font-bold">Test 2222222222222222222222222222 444444444444444444444444</h1>
      <Link href='/profile' color='blue.400' _hover={{ color: 'blue.500' }}>
      Profile
    </Link>
    </main>
  );
}
