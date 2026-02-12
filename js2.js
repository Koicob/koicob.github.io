function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}

function showAddNew() {
    let filterForm = document.getElementById("filterContent");
    let addForm = document.getElementById("newContent");

    addForm.style.display = "flex";
    filterForm.style.display = "none";
}

function filterArticles() {

    let opinionCheckbox;
    opinionCheckbox = document.getElementById("opinionCheckbox");

    let recipeCheckbox;
    recipeCheckbox = document.getElementById("recipeCheckbox");

    let updateCheckbox;
    updateCheckbox = document.getElementById("updateCheckbox");

    let opinionChecked;
    opinionChecked = opinionCheckbox.checked;
    let recipeChecked;
    recipeChecked = recipeCheckbox.checked;
    let updateChecked;
    updateChecked = updateCheckbox.checked;

    let allArticles;
    allArticles = document.getElementsByTagName("article");

    let i; i = 0;

    while (i < allArticles.length) {

        let currentArticle;
        currentArticle = allArticles[i];

        let articleClass;
        articleClass = currentArticle.className;

        if (articleClass === "opinion") {

            if (opinionChecked === true) {
                currentArticle.style.display = "block";
            }

            if (opinionChecked === false) {
                currentArticle.style.display = "none";
            }
        }

        if (articleClass === "recipe") {

            if (recipeChecked === true) {
                currentArticle.style.display = "block";
            }

            if (recipeChecked === false) {
                currentArticle.style.display = "none";
            }
        }

        if (articleClass === "update") {

            if (updateChecked === true) {
                currentArticle.style.display = "block";
            }

            if (updateChecked === false) {
                currentArticle.style.display = "none";
            }
        }

        i = i + 1;
    }
}

function addNewArticle() {
    let titleInput = document.getElementById("inputHeader");
    let textInput = document.getElementById("inputArticle");

    let title = titleInput.value;
    let text = textInput.value;

    let articleType = "";
    let markerText = "";

    let opinionRadio = document.getElementById("opinionRadio");
    let recipeRadio = document.getElementById("recipeRadio");
    let updateRadio = document.getElementById("lifeRadio");

    if (opinionRadio.checked === true) {
        articleType = "opinion";
        markerText = "Opinion";
    }

    if (recipeRadio.checked === true) {
        articleType = "recipe";
        markerText = "Recipe";
    }

    if (updateRadio.checked === true) {
        articleType = "update";
        markerText = "Update";
    }

    let article = document.createElement("article");
    article.className = articleType;

    let marker = document.createElement("span");
    marker.className = "marker";
    marker.innerText = markerText;

    let heading = document.createElement("h2");
    heading.innerText = title;

    let paragraph = document.createElement("p");
    paragraph.innerText = text;

    let linkParagraph = document.createElement("p");
    let link = document.createElement("a");
    linkParagraph.appendChild(link);

    article.appendChild(marker);
    article.appendChild(heading);
    article.appendChild(paragraph);
    article.appendChild(linkParagraph);

    let articleList = document.getElementById("articleList");
    articleList.appendChild(article);

    titleInput.value = "";
    textInput.value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    updateRadio.checked = false;
}
