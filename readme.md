# Web scraping percent of complete Eth Dev Program

Web scraping to get percent of complete courses of Ethereum developer program of Platzi

## Instalación

```
npm install
```

## Ejecución

```
npm start
```

## Modo de uso

en la url `http://localhost:3000/course-status/:username` remplazar el username por el usuario de platzi

### Estructura devuelta

```json
{
    "percentComplete": "0.25",
    "coursesCompleted": 6,
    "coursesTotal": 24,
    "coursesStatus": [
        {
            "course": "Curso Gratis de Marca Personal",
            "completed": true
        },
        {
            "course": "Fundamentos de Ingeniería de Software",
            "completed": true
        },
        {
            "course": "Curso de Estrategias para Aprender en Línea",
            "completed": true
        },
        {
            "course": "Curso de React Avanzado",
            "completed": false
        },
        {
            "course": "Curso de Gestión Efectiva del Tiempo",
            "completed": true
        },
        {
            "course": "Curso de Ethereum para Developers",
            "completed": true
        },
        {
            "course": "Cómo Prepararte Profesionalmente para el Futuro",
            "completed": true
        },
        {
            "course": "Curso de Implementación de Tokens en Ethereum: ERC-20",
            "completed": false
        },
        {
            "course": "Curso de Inglés para Developers",
            "completed": false
        },
        {
            "course": "Curso de Introducción al Desarrollo Blockchain: Smart Contracts",
            "completed": false
        },
        {
            "course": "Curso de Creación de Portafolio y CV",
            "completed": false
        },
        {
            "course": "Curso de Introducción a Solidity",
            "completed": false
        },
        {
            "course": "Curso para Conseguir Trabajo en Tecnología",
            "completed": false
        },
        {
            "course": "Curso de Introducción a Tokens en Ethereum",
            "completed": false
        },
        {
            "course": "Curso de Optimización del Perfil Profesional",
            "completed": false
        },
        {
            "course": "Curso de Dapps: Introducción al Desarrollo de Aplicaciones Descentralizadas",
            "completed": false
        },
        {
            "course": "Curso de Oratoria para Hablar en Público",
            "completed": false
        },
        {
            "course": "Curso de Desarrollo Frontend de Aplicaciones Descentralizadas con Web3.Js",
            "completed": false
        },
        {
            "course": "Curso de Inglés para Entrevistas de Trabajo",
            "completed": false
        },
        {
            "course": "Curso de OpenZeppelin",
            "completed": false
        },
        {
            "course": "Curso para Triunfar en Entrevistas de Trabajo",
            "completed": false
        },
        {
            "course": "Curso de Introducción a Seguridad de Smart Contracts",
            "completed": false
        },
        {
            "course": "Audiocurso de Fundamentos de Web3",
            "completed": false
        },
        {
            "course": "Audiocurso de Historia de Ethereum y Smart Contracts",
            "completed": false
        }
    ]
}
```
