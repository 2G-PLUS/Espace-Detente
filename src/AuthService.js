// eslint-disable-next-line
import axios from 'axios';
import AuthProvider from "@/services/AuthProvider";
// import AuthProvider from "@/services/AuthProvider";

// eslint-disable-next-line
const API_URL = 'http://45.147.99.71:8000/api';

async function login(username, password) {
    // Construisez l'objet de données pour la requête
    return new Promise((resolve, reject) => {
        const data = {
            username: username,
            password: password
        };
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // Effectuez la requête de connexion à l'API d'authentification

        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
        axios({
            method: 'post',
            url: `${API_URL}/login`,
            data: data,
            headers: headers

        }).then(response => {
            const token = response.data.token;
            console.log('token', token);
            resolve(token);
            // Stockez le token dans le local storage ou dans un cookie pour une utilisation ultérieure
            // Vous pouvez également mettre à jour les en-têtes d'authentification de vos requêtes HTTP
            AuthProvider.login(username, password);
        }).catch(error => {
            reject(error);
            throw new Error('Échec de l\'authentification. Veuillez vérifier vos informations d\'identification. erreur : ' + error);
        })
    });
}

let error = '';

// eslint-disable-next-line
// function login(username, password) {
//     return new Promise((resolve, reject) => {
//         // Effectuez ici l'appel à votre API d'authentification pour vérifier les informations d'identification
//         // Vous pouvez utiliser Axios ou une autre bibliothèque pour effectuer l'appel
//
//         // Exemple de vérification factice pour les besoins de l'exemple
//         if (username === 'admin' && password === 'admin') {
//             AuthProvider.login(username, password);
//             resolve();
//         } else {
//             const error = new Error('Identifiants invalides');
//             reject(error);
//         }
//     });
// }


function getError() {
    return error;
}

export default {
    login,
    getError,
};
