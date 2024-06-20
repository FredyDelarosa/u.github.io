import Graph from "../models/Graph.mjs"; // Importa la clase Graph desde tu archivo Graph.js

document.addEventListener('DOMContentLoaded', function() {
    const graph = new Graph(); // Crea una instancia de la clase Graph al cargar la página

    // Formulario para agregar vértices
    const addVertexForm = document.getElementById('addVertexForm');
    addVertexForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const vertexNameInput = document.getElementById('vertexName');
        const vertexName = vertexNameInput.value.trim();

        if (vertexName !== '') {
            graph.addV(vertexName);
            console.log(`Vértice agregado: ${vertexName}`);
            vertexNameInput.value = ''; // Limpiar el campo después de agregar el vértice
        } else {
            console.log('Ingrese un nombre válido para el vértice.');
        }
    });

    // Formulario para agregar aristas
    const addEdgeForm = document.getElementById('addEdgeForm');
    addEdgeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const startVertexInput = document.getElementById('startVertex');
        const endVertexInput = document.getElementById('endVertex');
        const weightInput = document.getElementById('weight');

        const startVertex = startVertexInput.value.trim();
        const endVertex = endVertexInput.value.trim();
        const weight = parseInt(weightInput.value);

        if (startVertex !== '' && endVertex !== '' && !isNaN(weight)) {
            const added = graph.addConexion(startVertex, endVertex, weight);
            if (added) {
                console.log(`Arista agregada de ${startVertex} a ${endVertex} con peso ${weight}`);
                startVertexInput.value = '';
                endVertexInput.value = '';
                weightInput.value = '';
            } else {
                console.log('No se pudo agregar la arista. Verifique los vértices.');
            }
        } else {
            console.log('Ingrese valores válidos para los vértices y el peso.');
        }
    });

    // Botón para realizar recorrido en profundidad (DFS)
    const dfsBtn = document.getElementById('dfsBtn');
    dfsBtn.addEventListener('click', function() {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = ''; // Limpiar resultados anteriores

        graph.dfs((vertex) => {
            console.log(`Visitando vértice: ${vertex}`);
            resultContainer.innerHTML += `${vertex} `;
        });
    });

});
