import { Link } from '@chakra-ui/next-js';
import { Button, Heading, Image, Stack, Text, Card, CardBody, CardFooter } from '@chakra-ui/react'

// Make props optional
interface HorizontalCardProps {
  title?: string;
  imageUrl?: string;
  imageAlt?: string;
  description?: string;
  linkTo?: string;
}

export default function HorizontalCard({
  title = 'Default Title', // Default value for title
  imageUrl = 'https://via.placeholder.com/200', // Default value for imageUrl
  imageAlt = 'Default Image', // Default value for imageAlt
  description = 'Default description', // Default value for description
  linkTo = '' // Default value for linkTo
}: HorizontalCardProps) {
    return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={imageUrl}
        alt={imageAlt}
    />

    <Stack>
        <CardBody>
        <Heading size='md'>{title}</Heading>

        <Text py='2'>
            {description}
        </Text>
        </CardBody>

        <CardFooter>
        <Link href={linkTo} isExternal>
            <Button variant='solid' colorScheme='blue'>
                Go to project
            </Button>
        </Link>
        </CardFooter>
    </Stack>
    </Card>
)}