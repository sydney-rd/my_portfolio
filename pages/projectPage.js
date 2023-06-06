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

  const getBackgroundImage = () => {
    switch (selectedCategory) {
      case "WEB":
        return "url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')";
      case "C++":
        return "url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')";
      case "PYTHON":
        return "url('https://example.com/python-bg.jpg')";
      case "FULLSTACK":
        return "url('https://example.com/fullstack-bg.jpg')";
      default:
        return "";
    }
  };

  const backgroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div className="projectPageContainer" style={backgroundStyle}>
      <Flex>
        <Box>
          <ProjectCategories
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
        </Box>
        <Flex
          direction="column"
          align="flex-end"
          justify="center"
          flexGrow={1}
          pr="4rem"
        >
          {/* Update the flex properties as per your requirement */}
          {filteredProjects.map((project, index) => (
            <Box key={index} mb="1rem">
              <a className="projectNames" href={project.href}>
                {project.name}
              </a>
            </Box>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
