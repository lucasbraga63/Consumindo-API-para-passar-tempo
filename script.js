async function mudarFrase() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) {
      throw new Error("Não é possível carregar o arquivo json");
    }
    const data = await response.json();
    const div = document.querySelector('.conselhos')
   
    div.innerHTML = 
    `
    <p>${data.slip.advice}</p>
    `
    
  }
  catch (error) {
    console.error(error)
  }
}
