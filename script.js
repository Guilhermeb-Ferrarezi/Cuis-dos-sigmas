const botao = document.getElementById('botao_vr')

botao.addEventListener('click', () => {
    let pontuaçao = 0

    const p1 = document.querySelector('input[name="pergunta1"]:checked')
    if (p1 && p1.value.toLowerCase().includes("adm")) pontuaçao++

    const p2 = document.querySelector('input[name="pergunta2"]').value.trim().toLowerCase()
    if (p2 === "games edu") pontuaçao++

    const p3 = document.querySelector('input[name="pergunta3"]').value.trim()
    if (p3.length < 4 || p3.length > 6|| isNaN(p3)) {
        alert('Digite uma senha válida')
    } else {
        pontuaçao++
    }

    const p4 = document.querySelector('input[name="pergunta4"]').value
    if (p4 === "1973-06-12") pontuaçao++

    const p5 = Array.from(document.querySelectorAll('input[name="pergunta5"]:checked')).map(c => c.value)
    const corretas5 = ["Ednaldo Pereira", "Cachorro caramelo"]
    if (JSON.stringify(p5.sort()) === JSON.stringify(corretas5.sort())) pontuaçao++

    const p6 = document.querySelector('select[name="pergunta6"]').value
    if (p6 === "AdmSp") pontuaçao++

    const p7 = document.querySelector('input[name="pergunta7"]').value.trim().toLowerCase()
    if (p7 === "adm supremo") pontuaçao++

    const msg = document.getElementById('pontuação')
    msg.textContent = `Você acertou ${pontuaçao} de 7 perguntas!`
})


