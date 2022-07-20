const express = require("express");
const router = express.Router();
const { webkit } = require('playwright')



const courses = [
    "Curso Gratis de Marca Personal",
    "Fundamentos de Ingeniería de Software",
    "Curso de Estrategias para Aprender en Línea",
    "Curso de React Avanzado",
    "Curso de Gestión Efectiva del Tiempo",
    "Curso de Ethereum para Developers",
    "Cómo Prepararte Profesionalmente para el Futuro",
    "Curso de Implementación de Tokens en Ethereum: ERC-20",
    "Curso de Inglés para Developers",
    "Curso de Introducción al Desarrollo Blockchain: Smart Contracts",
    "Curso de Creación de Portafolio y CV",
    "Curso de Introducción a Solidity",
    "Curso para Conseguir Trabajo en Tecnología",
    "Curso de Introducción a Tokens en Ethereum",
    "Curso de Optimización del Perfil Profesional",
    "Curso de Dapps: Introducción al Desarrollo de Aplicaciones Descentralizadas",
    "Curso de Oratoria para Hablar en Público",
    "Curso de Desarrollo Frontend de Aplicaciones Descentralizadas con Web3.Js",
    "Curso de Inglés para Entrevistas de Trabajo",
    "Curso de OpenZeppelin",
    "Curso para Triunfar en Entrevistas de Trabajo",
    "Curso de Introducción a Seguridad de Smart Contracts",
    "Audiocurso de Fundamentos de Web3",
    "Audiocurso de Historia de Ethereum y Smart Contracts",
]

const getCoursesCompleted = async (username) => {
    try {
        const browser = await webkit.launch()
        const page = await browser.newPage()
        await page.goto(`https://platzi.com/p/${username}/`)
        const courses = await page.locator('.Course-title')
        const coursesTitles = await courses.allInnerTexts()
        await browser.close()
        return coursesTitles
    } catch (error) {
        console.log(error)
    }
}

const getCoursesMetrics = async ({ username, courses }) => {
    try {

        const coursesCompleted = await getCoursesCompleted(username)
        const coursesStatus = []
        const coursesAccount = courses.length
        let coursesCompletedAccount = 0;
        for (let course of courses) {
            let completed = false
            if (coursesCompleted.includes(course)) {
                coursesCompletedAccount++
                completed = true
            }
            coursesStatus.push({
                course,
                completed
            })

        }
        const coursesMetrics = {
            percentComplete: (coursesCompletedAccount / coursesAccount).toFixed(2),
            coursesCompleted: coursesCompletedAccount,
            coursesTotal: coursesAccount,
            coursesStatus
        }
        return coursesMetrics
    } catch (error) {
        console.log(error)
    }
}


router.get("/course-status/:username", async (req, res, next) => {
    try {
        const { username } = req.params
        const coursesMetrics = await getCoursesMetrics({ username, courses })
        return res.status(200).json(coursesMetrics);
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;