const Projects = ({ projects, title }) => {


    // console.log(projects);

    return (
        <div>
            <h2>{title}</h2>
            {projects.map((project) => (
                <div className="card border-primary mb-3" key={project.id}>
                    <h3 className="card-header">{project.name}</h3>

                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">{project.name}</text>

                    <div className="card-body">
                        <p className="card-text">{project.description}</p>
                    </div>
                    <div className="card-body">
                        <a href={project.link} className="card-link">Link</a>
                        <a href={project.repo} className="card-link">Repository</a>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Projects;