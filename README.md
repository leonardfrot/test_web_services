# test_web_services

## Allumer le serveur
`npm install`<br/>
`node index.js`

## Déployer en Cloud avec Ngrok
Certain test ne fonctionne pas en localhost, dans ce cas, il faut le déployer en Cloud momentanément<br/>
`ngrok http 8080`<br/>
Dans le cas où vous n'avez pas encore de compte, ajouter un autotoken.


## Fonctions
### GET
http://localhost:8080/api/test_get<br/> 
Tester les requêtes GET, notamment les requêtes AJAX depuis un autre fontend.
### POST
http://localhost:8080/api/test_post<br/> 
Tester les requêtes POST, dès qu'il reçoit une requête POST, il le log dans un fichier app.log.<br/>
Il a été utilisé pour tester le Web Hook Gilab et le Reporter Urlwatch.
