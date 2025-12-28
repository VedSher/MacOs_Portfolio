import { locations } from "#constants"
import useLocationStore from "#store/Location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {

    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleOpenProjectFinder = (project) => {
        // logic to open Finder window for the project
        setActiveLocation(project);
        openWindow('finder');
        
    };

    useGSAP(() => {
        // initialize Draggable on elements with the `folder` class
        try {
            Draggable.create(".folder");
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Draggable init failed:', err);
        }
    }, []);

  return (
    <section id="home">
        <ul>
            {projects.map((project) => (
                <li
                    key={project.id}
                    className={clsx("group folder", project.windowPosition)}
                    onClick={() => handleOpenProjectFinder(project)}
                >
                    <img src="/images/folder.png" alt={project.name} />
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home