import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
];

export default routes;
