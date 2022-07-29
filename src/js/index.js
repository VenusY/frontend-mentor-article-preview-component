const shareButton = document.querySelector("#article-info__share-button");

function showShareSection(e) {
    const shareButtonIcon = document.querySelector("#share-button__icon");
    const shareSection = document.querySelector("#main__share-section");

    shareButton.classList.toggle("article-info__share-button--active");
    shareButtonIcon.classList.toggle("share-button__icon--active");
    shareSection.classList.toggle("main__share-section--hidden");
}

shareButton.addEventListener("click", showShareSection);