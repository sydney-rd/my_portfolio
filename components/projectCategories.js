import { Box, VStack, Flex } from "@chakra-ui/react";

export default function ProjectCategories({
  selectedCategory,
  onCategoryClick,
}) {
  const categories = ["WEB", "C++", "PYTHON"];

  return (
      <VStack justify="center" align="left" height="100vh" zIndex="2" position="fixed">
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

