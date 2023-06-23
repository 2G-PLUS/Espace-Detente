// eslint-disable-next-line
import axios from 'axios';
import AuthProvider from "@/services/AuthProvider";

// eslint-disable-next-line
const API_URL = 'https://exemple-api-authentification.com';

// function login(username, password) {
//     // Construisez l'objet de données pour la requête
//     const data = {
//         username: username,
//         password: password
//     };
//
//     // Effectuez la requête de connexion à l'API d'authentification
//     return axios.post(`${API_URL}/login`, data)
//         .then(response => {
//             // Gérez la réponse de l'API en cas de succès de l'authentification
//             const token = response.data.token;
//             // Stockez le token dans le local storage ou dans un cookie pour une utilisation ultérieure
//             // Vous pouvez également mettre à jour les en-têtes d'authentification de vos requêtes HTTP
//             return token;
//         })
//         .catch(error => {
//             // Gérez les erreurs de l'API en cas d'échec de l'authentification
//             throw new Error('Échec de l\'authentification. Veuillez vérifier vos informations d\'identification.');
//         });
// }

let error = '';

// eslint-disable-next-line
function login(username, password) {
    return new Promise((resolve, reject) => {
        // Effectuez ici l'appel à votre API d'authentification pour vérifier les informations d'identification
        // Vous pouvez utiliser Axios ou une autre bibliothèque pour effectuer l'appel

        // Exemple de vérification factice pour les besoins de l'exemple
        if (username === 'admin' && password === 'admin') {
            AuthProvider.login(username, password);
            resolve();
        } else {
            const error = new Error('Identifiants invalides');
            reject(error);
        }
    });
}


function getError() {
    return error;
}

export default {
    login,
    getError,
};
