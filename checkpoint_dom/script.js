document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const moinsButton = article.querySelector('.moins');
        const plusButton = article.querySelector('.plus');
        const supprimerButton = article.querySelector('.supprimer');
        const aimerButton = article.querySelector('.aimer');

        moinsButton.addEventListener('click', function() {
            const quantiteElement = article.querySelector('.quantite');
            let quantite = parseInt(quantiteElement.textContent);
            if (quantite > 1) {
                quantite--;
                quantiteElement.textContent = quantite;
                updateTotal(article);
            }
        });

        plusButton.addEventListener('click', function() {
            const quantiteElement = article.querySelector('.quantite');
            let quantite = parseInt(quantiteElement.textContent);
            quantite++;
            quantiteElement.textContent = quantite;
            updateTotal(article);
        });

        supprimerButton.addEventListener('click', function() {
            article.remove();
            updateTotal(article);
        });

        aimerButton.addEventListener('click', function() {
            aimerButton.classList.toggle('aimé');
        });
    });

    function updateTotal(article) {
        const prixUnitaire = parseInt(article.dataset.prix);
        const quantite = parseInt(article.querySelector('.quantite').textContent);
        const prixTotalElement = article.querySelector('.prix-total');
        const prixTotal = prixUnitaire * quantite;
        prixTotalElement.textContent = prixTotal.toLocaleString('fr-FR', { style: 'currency', currency: 'XOF' });

        let prixGlobal = 0;
        articles.forEach(article => {
            const prixTotalArticle = parseInt(article.querySelector('.prix-total').textContent.replace(/\s+/g, '').replace('FCFA', ''));
            prixGlobal += prixTotalArticle;
        });

        const prixTotalGlobalElement = document.getElementById('prix-total-global');
        prixTotalGlobalElement.textContent = prixGlobal.toLocaleString('fr-FR', { style: 'currency', currency: 'XOF' });
    }
});
