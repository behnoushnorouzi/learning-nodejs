# Projet Pédagogique Javascript Avancé & NodeJS.

-----
#API G-Bay

Pour votre projet pédagogique de troisième année, vous devrez construire une API suivant les méthodologies vu en cours.

## Présentation : 

G-Bay a pour but de devenir une plateforme d'enchères réservée aux personnes du réseau GES. Votre mission est de concevoir la partie serveur, une API WEB en NodeJS permettant aux futurs différents clients (mobile, web, desktop) d'intéragir avec celle-ci.

 
### 1 - Regles d'acces
- Les services suivant seront publiques : 
     - Permettre de consulter l'ensemble des produits disponible sur la plateforme,
     - Permettre de filter les produits disponibles par categories
     - Permettre de filtrer les produits par vendeurs
     - Permettre de d'ordonner les produit par prix 
     - Permettre de paginer les résultats disponibles
     - Permettre d'avoir la liste des vendeurs
     - Permettre d'avoir la note moyenne d'un vendeur
     - Permettre de s'inscrire
     - Permettre de s'authentifier
    
- Les services nécessitant d'être authentifié seront :
     - Permettre d'ajouter un produit sur la plateforme
     - Permettre d'éditer un produit de la plateforme
     - Permettre de supprimer un produit de la plateforme
     - Permettre de laisser un avis sur un vendeur
     - Permettre de noter un vendeur
     - Permettre de supprimer un avis sur un vendeur
     - Permettre d'éditer un avis sur un vendeur
     - Permettre de mettre un produit en achat direct
     - Permettre de consulter un historique des produits qui ont été vendu sur la plateforme
     - Permettre de filtrer cet historique par vendeur
     - Permettre de supprimer son compte
     - Permettre de s'authentifier
     - Permettre d'enchérir sur un produit
     - Permettre d'acheter un produit directement si l'option est disponible
    
    


### 2 - Regles fonctionelles
- L'ensemble des échanges sera fera via le `Content-Type: application/json`.
- Le prix d'un element ne peut être négatif
- La modification/supression d'un produit ne peut se faire que par le vendeur associé à celui-ci.
- Un vendeur ne peut acheter/encherir sur ses produits
- Une note ne peut être délivré qu'a partir d'un achat ou obtention (sur fin d'enchère) d'un produit
- L'edition d'information personelle (adresse, nom, prénom, etc...) d'un user ne peut être fait que par celui-ci
- L'édition d'un avis sur un vendeur ne peut être fait que par le createur de cet avis.
- L'achat ou enchere d'un produit ne peut être fait que si l'utilisateur dispose de crédit suffisant
- L'ajout d'un credit d'un user ne peut se faire que par celui-ci
- Le retrait de crédit ne peut se faire que sur un achat ou une obtention d'enchere.
    - attention lors d'une enchere, si un utilisateur n'obtient pas le produit, les credit encheris devront être recrédité aux users.
- La consultation de l'historique des produits vendu sur la plateformes ne pourra être fait que par un membre de G-Bay.
- La supression d'un compte engendre la supression de tous les produits mis en vente/enchere par le vendeur, dans le cas d'une enchere en cours, les credits seront recrédités aux potentiels acheteurs.
- Lors d'un achat finalisé, les credit dépensées par l'acheteur seront crédités au vendeur.

### 3 - Livraison
Le projet devra être livré 48h avant la soutenance via un gestionnaire de version (github, gitlab, ou bitbucket) des instructions sur l'installation devront être fournies pour que les jurées puisse installer votre projet sur leur poste.

Les slides de la soutenance devront être livré 24h avant la soutenance.

**ATTENTION** : Tout retard de livraison engendrera une pénalité sur la note.


### 4 - Notation 
Le projet sera noté sur 40 et la noté ramené sur 20.

 - Une note sur 20 concernant la qualité de code et le respect du cahier des charges.
 - Une note sur 20 concernant la qualité de la prestation orale, de la compréhension générale et des bonnes réponses aux questions qui seront posées lors de la soutenance.

