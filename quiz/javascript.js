	function enviarQuiz() {

		var arrayContador = document.getElementsByClassName('question');
        //qntd perguntas
		var questaoContador = 0;
		for (var i = 0, length = arrayContador.length; i < length; i++) {
			questaoContador++;
		} 

        var pontos=0;
	    // calcular a pontuação usando a fuinção respcerta
        for(i=1;i<=questaoContador;i++){
			var pontosUnidade = respCerta('q'+i);
	        pontos = Number(pontos) + Number(pontosUnidade);
        //console.log("pontos: " + pontos); // testando
        }

	    // Função que retorna a opção correta
		function correctAnswer (c, q) 
        {
            
			return ("A resposta correta para questão " + q + ": &nbsp;<strong>" +
				(document.getElementById(c).innerHTML) + "</strong>");
        }
        // pegar a resposta certa
		function respCerta(q) {
			var opcao = document.getElementsByName(q);

			for (var i = 0, length = opcao.length; i < length; i++) {
   				if (opcao[i].checked)
                {
		          	//transformando para um
				  	var valorResp = Number(opcao[i].value);
				}
			}
			// Caso opção nula mudar para zero
			if (isNaN(valorResp)) {
				valorResp = 0;
			}
            
			return valorResp;
		}
        
   
        
        
	   //Imprimir as respostas certas caso a resp esteja errada(Chamando a função correctAnswer )
        for(var i=1;i<=questaoContador;i++){
            if (respCerta('q'+i) === 0) 
			document.getElementById('respcorreta'+i).innerHTML = correctAnswer('correctString'+i, i);   
        }
        


	   // Mostrar a pontuação
		var pontuacao = "Pontuação: " + pontos +"/" + questaoContador;
	   // Caso Acerte todas as opções
		if (pontos === questaoContador) {
			pontuacao = pontuacao + "&nbsp; <strong>Parabéns, Acertou Tudo!</strong>"
		};
		//Exibi no html
        document.getElementById('pontos').innerHTML = pontuacao;
        document.getElementById('resposta').style.display="block";
    
    
	}
       

    
    
