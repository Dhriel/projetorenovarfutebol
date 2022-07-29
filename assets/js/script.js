let c = (el) => document.querySelector(el)
let cs = (el)=> document.querySelectorAll(el);
soma = 0


c('main').style.backgroundImage = 'url(assets/image/background4.png)';
c('.main--right div').style.backgroundImage = 'url(assets/image/arte.png)';

const sorted = playersJson.sort((a,b)=>{
    return a.gols - b.gols
})
sorted.reverse()
sorted.map((item,index)=>{
    soma += item.gols
    let infoPlayer = c('.addPlayer').cloneNode(true)
    infoPlayer.querySelector('.playerId').innerHTML = index+1
    infoPlayer.querySelector('.playerName').innerHTML = item.name
    infoPlayer.querySelector('.playerGols').innerHTML = item.gols < 10 ? `0${item.gols}` : item.gols
    c('.list--players').append(infoPlayer)
  
})
c('.info--gols').innerHTML = '+'+soma

function closeList(){
    c('.openList').style.display = 'flex'
    c('.closeList').style.display = 'none'

    c('.list--players').style.opacity = '0.5'
    setTimeout(() => {
        c('.list--players').style.display = 'none'
        c('.list--infos').style.display = 'none'
    }, 200);
}function openList(){
    c('.openList').style.display = 'none'
    c('.closeList').style.display = 'flex'

    c('.list--players').style.display = 'flex'
    c('.list--infos').style.display = 'flex'
    setTimeout(() => {
        c('.list--players').style.opacity = '1'
    }, 100);
}

artilhariaMes.reverse();
artilhariaMes.forEach((item)=>{ 
    let container = c('.artilharia--box').cloneNode(true);
    container.querySelector('.artilharia--ano').innerHTML = item.titulo;
    container.querySelector('.artilharia--ano').style.display = 'block'
    container.querySelector('.artilharia--grid').style.display = item.display;

    visibleDisplay = container.querySelector('.artilharia--grid').style.display;
    if (visibleDisplay === 'grid'){
        container.querySelector('.artilharia--ano').style.backgroundColor = '#101010'
        container.querySelector('.artilharia--ano').style.color = '#FFFF'
    }else if(visibleDisplay === 'none'){
        container.querySelector('.artilharia--ano').style.backgroundColor = '#FFFF'
        container.querySelector('.artilharia--ano').style.color = '#101010'
    }

    container.querySelector('.artilharia--ano').addEventListener('click', ()=>{
        visibleDisplay = container.querySelector('.artilharia--grid').style.display;
        if (visibleDisplay === 'grid'){
         
            container.querySelector('.artilharia--grid').style.display = 'none';

        }else if(visibleDisplay === 'none'){
            container.querySelector('.artilharia--grid').style.display = 'grid';
        }
    });

    item.ano.reverse();
    item.ano.forEach((item2,index)=>{
        let container2 = c('.artilharia--container').cloneNode(true)
        container2.querySelector('.artilharia--title').innerText = item2.mes

        let listaPorGols = item2.artilharia.sort((a,b)=>{
            return b.gols - a.gols
        });

        let artilharia = [];
        listaPorGols.forEach((perfil)=>{
            artilharia.push(perfil.gols);
        })


        let maiorGol = Math.max(...artilharia);

        listaPorGols.map((jogador,index)=>{
            let tabela = container2.querySelector('.artilharia--tabelas').cloneNode(true);
            tabela.querySelector('.nome').innerHTML = jogador.nome;
            tabela.querySelector('.gols').innerHTML = jogador.gols;

            if (jogador.gols == maiorGol){
                tabela.querySelector('.nome').style.color = '#f8f52d';
                tabela.querySelector('.gols').style.color = '#f8f52d';
            };

            container2.append(tabela)
        });

        container.querySelector('.artilharia--grid').append(container2)

    });

    c('.sec--artilharia').append(container);

});


allPhotos.reverse();
allPhotos.forEach((item)=>{
    let box = c('.photos--box').cloneNode(true);
    box.style.display = 'block'
    box.querySelector('.photos--year').style.display = 'flex';
    box.querySelector('.photos--year').innerHTML = item.titulo;
    let counter = box.querySelector('.photos--counter');
    counter.style.display = item.display;
    
    box.querySelector('.photos--year').addEventListener('click', ()=>{
        let visibleDisplay = counter.style.display;

        if (visibleDisplay === 'block'){

           counter.style.display = 'none';

        }else if(visibleDisplay === 'none'){

            counter.style.display = 'block';
        }

    });
   


    
    itemAno = item.ano;
    itemAno.reverse();
    itemAno.forEach((item2)=>{
        let container = c('.photos--container').cloneNode(true);
        container.style.display = 'flex'
        container.querySelector('.photos--title').innerHTML = item2.mes;

        let fotosOrdenadas = item2.fotos.sort((a,b)=>{
            return b.gols - a.gols
        });

        fotosOrdenadas.reverse();
        fotosOrdenadas.map((cadaFoto)=>{
            let div = document.createElement('div');
            let imagem = document.createElement('img');
            imagem.src = `${cadaFoto.foto}`
            imagem.setAttribute('loading', 'lazy')
            div.append(imagem);
            container.querySelector('.photos--grid').append(div);

            div.querySelector('img').addEventListener('click', (e)=>{
                let clickerImagem = imagem.src
                let modal = document.querySelector('.janela--modal');
                modal.style.display = 'flex';
                c('.img--modal').src = clickerImagem;
            });
            
        });
        counter.append(container);
        box.append(counter);
    });

    c('.sec--photos').append(box)
});


c('.btn--fechar').addEventListener('click',()=>{
    c('.janela--modal').style.display = 'none'
});

c('.janela--modal').addEventListener('click',()=>{
    c('.janela--modal').style.display = 'none'
})
