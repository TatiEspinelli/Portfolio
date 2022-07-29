import { resolveHref } from "next/dist/shared/lib/router/router"

export const skills = [
    {
        skill: "HTML5",
        percentage: 100,
    },

    {
        skill: "CSS3",
        percentage: 100,
    },

    {
        skill: "SASS",
        percentage: 70,
    },

    {
        skill: "JavaScript",
        percentage: 90,
    },

    {
        skill: "React",
        percentage: 80,
    },

    {
        skill: "PHP",
        percentage: 50,
    },

    {
        skill: "MySQL",
        percentage: 60,
    }
]

export const experiences = [ 
    { 
        title: "Diseño y Desarrollo web Freelancer",
        description: "This web page was my first project. This time I used HTML5 y CSS3. With this project I introduced myself to the programming world.",
        pagina: [<a href="https://primerproyectowebtati.netlify.app/" target="blank">My first Web Page</a>]
        
    },

    { 
        title: "Festival de Música",
        description: "This web page is another project that I built while I was doing the course 'Desarrollo Web Completo (HTML5, CSS3, JS AJAX PHP y MySQL') To create this web page I used HTML5, SASS y Gulp",
        pagina: [<a href="https://luminous-longma-575e8a.netlify.app/" target="blank">Music Festival</a>]
    },

    { 
        title: "Mini Supermercado",
        description: "This project was my first project using React. It's a small application that has the functionality of a shopping cart.",
        pagina: [<a href="https://bespoke-hamster-f4ebf0.netlify.app/" target="blank">Mini Market</a>]
        
    }
]

export const projects = [
    {
        name: "Diseño y Desarrollo web Freelancer", 
        description: "This web page was my first project. This time I used HTML5 y CSS3. With this project I introduced myself to the programming world.",
        image: "proyecto1.png"
    },

    {
        name: "FrontEnd Store", 
        description: "FrontEnd Store was one of the first project that I done while I was doing the course 'Desarrollo Web Completo'. This project it's made with HTML5 and CSS3.",
        image: "proyecto2.png"
    },

    {
        name: "Blog de Café", 
        description: "This project is also made with HTML5 and CSS3, and I practiced for the first time with flexbox and css grid. This website is 100% responsive.",
        image: "proyecto3.png"
    },

    {
        name: "Festival de Música", 
        description: "It's a website for a music festival. Project made with SASS and Gulp. This site is 100% responsive. ",
        image: "proyecto4.png"
    },

    {
        name: "Mini Supermercado", 
        description: "This project was my first project using React. It's a small application that has the functionality of a shopping cart.",
        image: "proyecto5.png"
    },

    {
        name: "Buscador de Imágenes", 
        description: "This project is a image finder that I built with React y Formik. This site take the images from the unsplash API.",
        image: "proyecto6.png"
    }
]

export const posts = [
    {
        title: "Mini Market",
        content: "This project was my first project using React. It's a small application that has the functionality of a shopping cart.",
        imageURL: "proyecto5.png"
    },

    {

        title: "Music Festival",
        content: "It's a website for a music festival. Project made with SASS and Gulp. This site is 100% responsive.",
        imageURL: "proyecto4.png"
       
    },

    {
        title: "Buscador de Imágenes",
        content: "This project is a image finder that I built with React y Formik. This site take the images from the unsplash API.",
        imageURL: "proyecto6.png"
    },

]