import React from "react";
import "./projectSection.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import { projects } from "../../assets/data/data";
import ProjectItem from "../projectItem/ProjectItem";

// Swiper config
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/bundle";
SwiperCore.use([Navigation]);

export default function ProjectSection() {
  return (
    <article className="project-section">
      <SectionTitle heading="projects" subheading="Some of my personal" />
      <div className="projects-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            // when window width is less then 648px
            648: {
              slidesPerView: 1,
            },
            // when window width is more then 748px
            768: {
              slidesPerView: 2,
            },
            // when window width is more then 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, i) => {
            // console.log(project);
            return (
              <SwiperSlide key={project.id}>
                <ProjectItem {...project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
}
