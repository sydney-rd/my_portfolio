import { Box } from "@chakra-ui/react";

export default function ProjectCategories({ selectedCategory, onCategoryClick }) {
  const categories = ["WEB", "C++", "PYTHON", "FULLSTACK"];

  return (
    <Box>
      {categories.map((category, index) => (
        <Box p="4" key={index} onClick={() => onCategoryClick(category)}>
          <p className={`projectCategories ${selectedCategory === category ? "active" : ""}`}>
            {category}
          </p>
        </Box>
      ))}
    </Box>
  );
}
