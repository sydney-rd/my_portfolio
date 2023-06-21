import { Box, VStack, Flex } from '@chakra-ui/react'

export default function ProjectCategories({
  selectedCategory,
  onCategoryClick
}) {
  const categories = ['WEB', 'C++', 'PYTHON']

  return (
    <VStack
    justify="left"
    align="left"
    position="fixed"
    backgroundColor="transparent"
    zIndex="10"
    cursor="pointer"
    color="red"
    fontFamily="calibri"
    fontSize=".7rem"    
    >
      {categories.map((category, index) => (
        <Box p="2" key={index} onClick={() => onCategoryClick(category)}>
          <p
            className={`projectCategories ${
              selectedCategory === category ? 'active' : ''
            }`}
          >
            {category}
          </p>
        </Box>
      ))}
    </VStack>
  )
}
