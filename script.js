const cardContents = [
  {
    img: "https://dulcet-klepon-06a2a8.netlify.app/images/triangle.png",
    name: "Triangle",
    formula: {
      law: "Area = 0.5 x b x h",
      var1: "Base",
      var2: "Height",
    },
    id: 1,
  },
  {
    img: "https://dulcet-klepon-06a2a8.netlify.app/images/rectangle.png",
    name: "Rectangle",
    formula: {
      law: "Area = l x w",
      var1: "Length",
      var2: "Width",
    },
    id: 2,
  },
  {
    img: "https://dulcet-klepon-06a2a8.netlify.app/images/parallelogram.png",
    name: "Parallelogram",
    formula: {
      law: "Area = b x h",
      var1: "Base",
      var2: "Height",
    },
    id: 3,
  },
  {
    img: "https://dulcet-klepon-06a2a8.netlify.app/images/rhombus.png",
    name: "Rhonbus",
    formula: {
      law: "Area = 0.5 x p x q",
      var1: "Diagonal-p",
      var2: "Diagonal-q",
    },
    id: 4,
  },
  {
    img: "https://dulcet-klepon-06a2a8.netlify.app/images/pentagon.png",
    name: "Pentagon",
    formula: {
      law: "Area = 0.5 x p x a",
      var1: "Perimeter",
      var2: "Apothem",
    },
    id: 5,
  },
  {
    img: "https://dulcet-klepon-06a2a8.netlify.app/images/ellipse.png",
    name: "Ellipse",
    formula: {
      law: "Area = π x a x b",
      var1: "a-axis",
      var2: "b-axis",
    },
    id: 6,
  },
];

const cardSection = document.getElementById("card-section");
const mapCard = () => {
  for (const card of cardContents) {
    createCard(card);
  }
};

const createCard = (card) => {
  const { img, name, formula, id } = card;
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
  <img  src="${img}">
  <div class="card-text">
    <div>
      <h4>${name}</h4>
      <p>${formula.law}</p>
    </div>
    <div class="input-feild">
      <div>
        <input type="text" placeholder="${formula.var1}">
      </div>
      <div>
        <input type="text" placeholder="${formula.var2}">
      </div>
    </div>
    <button id="${id}">Calculate</button>
  </div>
  
  `;
  cardSection.appendChild(cardDiv);
};

mapCard();
