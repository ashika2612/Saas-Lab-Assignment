import './index.css';

import React, { useEffect, useState } from 'react';

import Paginator from './components/Paginator';
import ProjectTable from './components/Table';
import {fetchProjects}  from './utils/api';

const ProjectDashboard = () => {
  const RECORDS_PER_PAGE = 5;
  const [projectList, setProjectList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const fetchProjectData = async () => {
      const projects = await fetchProjects();
      
      setProjectList(projects);
    };
    fetchProjectData();

    return () => clearTimeout(loadingDelay);
  }, []);

  const totalPageCount = Math.ceil(projectList.length / RECORDS_PER_PAGE);
  const currentStartIndex = (activePage - 1) * RECORDS_PER_PAGE;
  const displayedProjects = projectList.slice(
    currentStartIndex,
    currentStartIndex + RECORDS_PER_PAGE
  );

  const goToNextPage = () => setActivePage((prev) => Math.min(prev + 1, totalPageCount));
  const goToPreviousPage = () => setActivePage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setActivePage(pageNumber);

  return (
    <div className='main'>
      <h1 className='title'>Kickstarter Project</h1>
      <div className='container1'>
        {isLoading ? (
          <div className='spinner'>Loading...</div>
        ) : (
          <div className='container'>
            <ProjectTable displayedProjects={displayedProjects} />
            <Paginator
              currentPage={activePage}
              totalPages={totalPageCount}
              onNext={goToNextPage}
              onPrevious={goToPreviousPage}
              onPageChange={goToPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDashboard;