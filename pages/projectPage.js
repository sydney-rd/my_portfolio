import React, { useState } from "react";
import { projects } from "../utilities/projects";
import { Flex, Box } from "@chakra-ui/react";
import ProjectCategories from "../components/ProjectCategories";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <Flex>
      <Box w="80%">
        <ProjectCategories
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      </Box>
      <Box>
        {filteredProjects.map((project, index) => (
          <Box key={index}>
            <a className="projectNames" href={project.href}>{project.name}</a>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
