import React, { useState } from "react";
import { projects } from "../utilities/projects";
import { Flex, Box, VStack } from "@chakra-ui/react";
import ProjectCategories from "../components/ProjectCategories";
import Navbar from "../components/navbar";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");
  const [tint, setTint] = useState({ color: "", opacity: "0" });

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
        return "url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')";
      case "FULLSTACK":
        return "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')";
      default:
        return "";
    }
  };

  const hover = (color) => {
    if (color) {
      setTimeout(() => {
        setTint({ color, opacity: "0.4" });
      }, 500);
    }
  };

  const hoverLeave = () => {
    setTint((prevTint) => ({
      ...prevTint,
      opacity: "0",
      transition: "opacity 1s",
    }));
  };

  const projectStyle = {
    color: tint.color,
    fontFamily: "Ailerons",
    fontSize: "9rem",
    whiteSpace: "nowrap",
    textAlign: "right",
    WebkitTextStroke: `2px ${tint.color}`,
    transition: "color 0.3s",
    textShadow: `0px 0px 8px ${tint.color}`,
    transitionDuration: "2s",
    transitionDelay: "0.5s",
    filter: "brightness(150%)",
  };

  const backgroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100vw",
  };

  return (
    <Flex style={backgroundStyle}>
      <Box
        w="100vw"
        h="100vh"
        position="absolute"
        zIndex="1"
        bg={tint.color}
        opacity={tint.opacity}
        transition="opacity 1s"
        brightness="100%"
        filter="auto"
      ></Box>
      <Navbar tintColor={tint.color} />
      <ProjectCategories
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <VStack align="flex-end" flexGrow={1} pt="5rem" pr="8rem" zIndex="2">
        {filteredProjects.map((project, index) => (
          <Box key={index} mb="1rem">
            <a
              href={project.href}
              onMouseEnter={() => hover(project.color)}
              onMouseLeave={hoverLeave}
              style={projectStyle}
            >
              {project.name}
            </a>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}
