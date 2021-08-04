function verficar (){

    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('ano');
    let res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Por favor digite o ano valido!');
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

       if (sexo[0].checked) 
       {
             genero = 'Homem';

            if (idade >=0 && idade <= 12) 
            {
                img.setAttribute('src','criancamenino.jpg');

            } else if(idade >12 && idade <= 50)
            {
                img.setAttribute('src','homemadulto.jpg');

            } else 
            {
                img.setAttribute('src','idosohomem.jpg');
            }

       } else if (sexo[1].checked) {

            genero = 'Mulher';

            if (idade >=0 && idade <= 12) 
            {
                img.setAttribute('src','criancamenina.jpg');

            } else if(idade >12 && idade <= 50)
            {
                img.setAttribute('src','mulheradulta.jpg');
            } else 
            {
                img.setAttribute('src','idosomulher.jpg');
            }
       }

       res.innerHTML = `Detectamos, genero <strong>${genero}</strong>, com ${idade} ano(s) de idade`;
       res.appendChild(img);

    }
}