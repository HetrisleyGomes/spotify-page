//BOM DIA | BOA TARDE | BOA NOITE
const greetingElement = document.getElementById("greeting");

// Pegar a hora
const currentHour = new Date().getHours();

// Verifica a hora
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
  const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
  const tamanhoVar = 250
  const numColumns = Math.floor(containerWidth / tamanhoVar); //número de colunas com base na largura do container

  //largura mínima de 250px e máxima de 1fr (uma fração do espaço disponível).
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(${tamanhoVar}px, 1fr))`;
});
//observando a mudança do elemento
observer.observe(container);
