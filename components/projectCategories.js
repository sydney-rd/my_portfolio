import { Box, VStack, Flex } from "@chakra-ui/react";

export default function ProjectCategories({
  selectedCategory,
  onCategoryClick,
}) {
  const categories = ["WEB", "C++", "PYTHON", "FULLSTACK"];

  return (
      <VStack justify="center" align="left" height="100vh" zIndex="2" >
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

