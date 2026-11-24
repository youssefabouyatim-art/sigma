SIGMA — Mise à jour PC et téléphone

Contenu à publier à la racine du dépôt GitHub Pages :
- index.html : application PC et téléphone, filtres, vues enregistrées, tableau de bord et suivi d’actions
- data.enc : données SIGMA chiffrées utilisées par l’application
- sw.js : cache hors ligne, version renouvelée
- manifest.webmanifest et icône-*.png : installation sur téléphone

Nouveautés :
- Comparaison des retards, lignes à livrer et retards avec stock nul par rapport au dernier fichier importé dans ce navigateur.
- Contrôle rapide des statuts vides, fournisseurs manquants et doublons DA/ligne.
- Cliquer sur un fournisseur, acheteur, statut ou mois d’un graphique pour filtrer le tableau.
- Colonne « Désignation » resserrée pour réduire l’espace avant « Catégorie ».
- Plan d’action exportable/importable au format JSON.

Partage du plan d’action : enregistrer l’action depuis le détail d’une ligne, exporter SIGMA_plan_action.json, déposer le fichier dans le dossier partagé, puis l’importer sur l’autre appareil. La synchronisation n’est pas en direct. La comparaison d’extractions et le contrôle qualité sont conservés dans le navigateur de chaque appareil.

Publication : décompresser l’archive, téléverser les fichiers à la racine du dépôt GitHub Pages et valider les changements. Conserver ces fichiers ensemble. Après publication, ouvrir le lien SIGMA puis actualiser la page sur les appareils.

Nouvelle fonction : redimensionner les colonnes du tableau PC en faisant glisser le bord droit de l’en-tête. Les largeurs restent mémorisées sur le navigateur utilisé. Le bouton « Réinitialiser les largeurs » restaure les dimensions initiales.
