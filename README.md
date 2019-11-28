Le starterkit permet de lancer des projets avec Babel, un compileur.

Marche à suivre SI Babel n'est pas installé sur la machine :
  - vérifier que Babel n'est pas installé en ouvrant le terminal et entrer : "babel --version"
  - si rien ne s'affiche, entrer "npm install -g babel"
  
Ensuite, avant de lancer un projet, se déplacer avec le terminal dans le dossier staterkit puis :
  - créer un fichier input.js qui sera le fichier qui accueillera notre code js à compiler
  - dans le terminal entrer "babel input.js -o output.js". Cette commande indique :
    - "babel, va chercher le code dans input.js et crée un dossier output.js avec le code compilé"
  - dans le terminal entrer "npm init" pour lancer une série de questions. On peut laisser vide tout le long si on veut. Cela va créer un fichier "package.json"
  - dans le terminal entrer "npm install babel-preset-env" permet de créer le dossier node_module
  - dans le terminal entrer "babel input.js --out-file output.js --presets env" finalise l'installation de babel en précisant le fichier JS de départ avec notre code et le fichier JS d'arrivée avec la version simplifiée


ATTENTION : au-dessus était une première ébauche. Par la suite, dans notre dossier starterkit on va apporter quelques modifications :
- création d'un dossier "src" dans lequel se trouvera notre fichier "input.js"
- création d'un dossier "public" dans lequel se trouvera un dossier "scripts" pour notre fichier "output.js"
- suppresion du fichier "output.js" qui sera remplacé par "bunble.js"
- déplacer "input.js", que l'on renomme "index.js", dans le dossier "src"
- dans le terminal, se déplacer sur le dossier "starterkit" puis entrer "babel src/index.js --out-file public/scripts/bundle.js --presets env


AIDE : on peut se simplifier la vie pour éviter de rentrer à chaque fois la longue ligne de commande
- direction "package.json", dans l'object "scripts". 
- supprimer "test": "echo \"Error: no test specified\" && exit 1"
- remplacer par "build": "babel src/index.js --out-file public/scripts/bundle.js --presets env"
- dans le terminal entrer "npm run build" pour lancer la commande associée

AIDE ++ : pour ne pas avoir à rentrer à chaque changement "npm run build", on peut ajouter une option pour que babel "watch" en continue nos changements et les applique tout seul
- direction "package.json", dans l'object "scripts". 
- ajouter " --watch" comme ceci : "build": "babel src/index.js --out-file public/scripts/bundle.js --presets env --watch"


SUITE : 
- suppression de babel-cli et live-server au niveau global pour les installer localement. Si on lance live-server depuis le terminal ça ne marchera pas si on installe juste en local (dans le projet) mais si on lance un script dans le terminal qui se trouve dans package.json, alors on a accès à tous les éléments installés localement car ils se trouvent dans le même fichier que le script.
  - Par exemple, dans l'object script on rajoute la ligne "server": "live-server public" et donc dans le terminal"# WebpackBabelVersionNotesApp" 
