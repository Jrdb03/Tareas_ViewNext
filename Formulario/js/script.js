document.getElementById("contactForm").addEventListener("submit", function(event) {
    
    event.preventDefault(); 

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;

    const query = document.querySelector('input[name="query"]:checked');
    
    const summary = `
        <div id="titleSummary">
            <h1>Summary</h1>
        </div>
        <div id="info">
            <div class="dataHeader">
                <div class="campo">
                    <p>Nombre: </p>
                </div>
                <div class="campo">
                    <p>Apellidos: </p>
                </div>
                <div class="campo">
                    <p>Email: </p>
                </div>
                <div class="campo">
                    <p>Mensaje: </p>
                </div>
            </div>
            <div class="dataBody">
                <div class="valor">
                    <p>${fname}</p>
                </div>
                <div class="valor">
                    <p>${lname}</p>
                </div>
                <div class="valor">
                    <a href="${email}">${email}</a>
                </div>
                <div class="valor">
                    <p>${message}</p>
                </div>
            </div>
        </div>

        <div id="buttons">
            <button class="btn-accept" id="volver">Aceptar</button>
            <button class="btn-cancel" id="cancel">Cancelar</button>
        </div>
        
    `;

    document.getElementById("card").hidden = true;
    document.body.style.backgroundColor = "#def1e8a9;";
 
    const divSummary = document.getElementById("divSummary");
    divSummary.innerHTML = summary;

    document.getElementById("divSummary").hidden = false;

    document.getElementById("volver").addEventListener("click", () => {
        document.getElementById("contactForm").reset();
        document.getElementById("divSummary").hidden = true;
        document.getElementById("card").hidden = false;
    });

    document.getElementById("cancel").addEventListener("click", () => {
        document.getElementById("divSummary").hidden = true;
        document.getElementById("card").hidden = false;
    });
});
