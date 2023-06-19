import { Box, VStack, Flex } from "@chakra-ui/react";

export default function ProjectCategories({
  selectedCategory,
  onCategoryClick,
}) {
  const categories = ["WEB", "C++", "PYTHON"];

  return (
      <VStack justify="center" align="left" height="100vh" zIndex="10" position="fixed" cursor="pointer" font="calibri" fontSize=".7rem">
        {categories.map((category, index) => (
          <Box p="2" key={index} onClick={() => onCategoryClick(category)}>
            <p
              className={`projectCategories ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </p>
          </Box>
        ))}
      </VStack>
  );
}

