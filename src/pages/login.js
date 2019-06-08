import React from 'react'

import PrimaryAction from '../components/PrimaryAction'

export default () => {
    return (<div className="flex login-wallpaper">
        <div className="login flex">
        <h1>Inscription</h1>

        <form className="flex">
            <label for="name">Nom ou pseudonyme:</label>
            <input id="name" type="text" placeholder="exemple: Adrien" title="exemple: Adrien" />
            <label for="email">Adresse electronique:</label>
            <input type="text" placeholder="exemple: me@onmytravel.net" title="exemple: me@onmytravel.net" />
            <label for="password">Mot de passe:</label>
            <input id="password" type="password" />
            <PrimaryAction onClick={() => {}}>Créer mon compte</PrimaryAction>
        </form>

        <p className="legal">Les informations recueillies à votre connexion sont enregistrées 
        dans un fichier informatisé par OnMyTravel pour permettre l'accès au service offert
         par OnMyTravel. Elles sont conservées pendant la durée d'utilisation du service et 
         sont destinées à OnMyTravel exclusivement. Elles ne sont pas communiquées à des tiers.</p>
        </div>
    </div>);
}