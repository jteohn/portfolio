import Navbar from "../components/Navbar";
import ProjectsData from "../components/ProjectsData";

function Portfolio() {
  return (
    <div className="App h-max-100vh flex flex-col justify-start">
      <Navbar />
      <div className="flex justify-center mb-12 mt-10">
        <div className="relative text-5xl z-10 font-bold md:text-6xl lg:text-7xl text-grey-400 dark:text-beige-300">
          PORTFOLIO
          <div className="absolute inset-x-0 bottom-0 h-4 bg-white z-[-1] md:h-6 lg:h-7 w-full dark:bg-grey-500" />
        </div>
      </div>

      <div className="container mx-auto mb-8 p-6 lg:p-0 xl:pt-8">
        <div className="grid justify-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="card w-78 glass text-grey-600 dark:bg-grey-600"
            >
              <figure>
                <div className="carousel w-full">
                  <div
                    id={`${project.id}1`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={project.image1}
                      alt={project.title}
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href={`#${project.id}4`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❮
                      </a>
                      <a
                        href={`#${project.id}2`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id={`${project.id}2`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={project.image2}
                      alt={project.title}
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href={`#${project.id}1`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❮
                      </a>
                      <a
                        href={`#${project.id}3`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id={`${project.id}3`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={project.image3}
                      alt={project.title}
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href={`#${project.id}2`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❮
                      </a>
                      <a
                        href={`#${project.id}4`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id={`${project.id}4`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={project.image4}
                      alt={project.title}
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href={`#${project.id}3`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❮
                      </a>
                      <a
                        href={`#${project.id}1`}
                        className="btn btn-circle h-8 w-8 opacity-80"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="card-body text-grey-500 dark:bg-grey-600 dark:bg-opacity-70 dark:text-grey-200">
                <div className="flex flex-row items-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="card-title font-bold tracking-wide hover:text-grey-200 dark:text-beige-300 dark:hover:text-beige-200 transition duration-300 ease-in">
                      {project.title}{" "}
                    </h2>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xs tracking-wide rounded-full border-none bg-grey-200 text-white p-2.5 py-1 hover:bg-grey-500 hover:text-white transition duration-500 ease-in dark:bg-beige-500 dark:text-grey-600 dark:hover:bg-beige-200">
                      GitHub
                    </div>
                  </a>
                </div>
                <p className="text-left text-sm dark:text-beige-500">
                  <span className="dark:text-beige-300">
                    <strong>{project.subheader}</strong>
                  </span>
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((role) => (
                    <div
                      key={role}
                      className="badge border-none bg-grey-400 p-3 text-white dark:bg-beige-300 dark:text-grey-600"
                    >
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
