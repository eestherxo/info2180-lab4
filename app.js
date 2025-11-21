document.getElementById("search-btn").addEventListener("click", () => {

    const searchInput = document.getElementById("search-input").value;

    const sanitizedInput = searchInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const url = `superheroes.php?query=${encodeURIComponent(sanitizedInput)}`;


    fetch(url)
    .then(response => response.text())
    .then(data => {
        const result = document.getElementById("result");
        result.innerHTML = data;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
});