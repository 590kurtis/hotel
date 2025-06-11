function modifier(type, delta) {
    const input = document.getElementById(type);
    let value = parseInt(input.value) + delta;
    value = Math.max(0, value);
    input.value = value;
  
    if (type === "etudiant") afficherChampsAges(value);
  }
  
  function afficherChampsAges(nombre) {
    const container = document.getElementById("agesContainer");
    container.innerHTML = '';
    for (let i = 1; i <= nombre; i++) {
      const div = document.createElement('div');
      div.classList.add('mb-2');
      div.innerHTML = `<label> Moyenne ${i} :</label><input type="number" min="0" class="form-control" />`;
      container.appendChild(div);
    }
  }
  
  function valider() {
        document.getElementById("resProfesseur").textContent = document.getElementById("professeur").value;
    document.getElementById("resEtudiant").textContent = document.getElementById("etudiant").value;
    document.getElementById("resSalle").textContent = document.getElementById("salle").value;
    document.getElementById("resTravail").textContent = document.getElementById("travail").checked ? "Oui" : "Non";
  }