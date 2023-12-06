function f_elefante(){
    fetch("http://localhost:3000/personagem")
        .then(response => {
            return response.json()
        }).then(dadosJson => {
    
            console.log(dadosJson)  
    
            document.getElementById("conteudo").innerHTML = " "
    
            
                document.getElementById("conteudo").innerHTML += 
                "<p></p>" + dadosJson[0].img +
                "<p> <b>Nome:</b> " + dadosJson[0].nome +
                "<p> <b>Personalidade:</b> "+ dadosJson[0].personalidade +"<p>"  +
                "<p> <b>Força:</b> "+ dadosJson[0].forca +"<p>"  +
                "<p> <b>Habilidade:</b> "+dadosJson[0].habil +"<p>" 
   
            
        });
    
    }
 function f_girafa(){
      fetch("http://localhost:3000/personagem")
          .then(response => {

              return response.json()
          }).then(dadosJson => {
      
              console.log(dadosJson)  
      
              document.getElementById("conteudo").innerHTML = " "
      
              
                  document.getElementById("conteudo").innerHTML += 
                  "<p></p>" + dadosJson[1].img+
                  "<p> <b>Nome:</b> " + dadosJson[1].nome +
                  "<p> <b>Personalidade:</b> "+ dadosJson[1].personalidade +"<p>"  +
                  "<p> <b>Força:</b> "+ dadosJson[1].forca +"<p>"  +
                  "<p> <b>Habilidade:</b> "+ dadosJson[1].habil +"<p>" 
                 
              
          });
      
      }

        function f_macaco(){
          fetch("http://localhost:3000/personagem")
              .then(response => {
                  return response.json()
              }).then(dadosJson => {
          
                  console.log(dadosJson)  
          
                  document.getElementById("conteudo").innerHTML = " "
          
                  
                      document.getElementById("conteudo").innerHTML += 
                      "<p></p>" + dadosJson[2].img +
                      "<p> <b>Nome:</b> " + dadosJson[2].nome +
                      "<p> <b>Personalidade:</b> "+ dadosJson[2].personalidade +"<p>"  +
                      "<p> <b>Força:</b> "+ dadosJson[3].forca +"<p>"  +
                      "<p> <b>Habilidade:</b> "+ dadosJson[2].habil +"<p>"
                  
                  
              });
          
          }

          function f_tigre(){
            fetch("http://localhost:3000/personagem")
                .then(response => {
                    return response.json()
                }).then(dadosJson => {
            
                    console.log(dadosJson)  
            
                    document.getElementById("conteudo").innerHTML = " "
            
                    
                        document.getElementById("conteudo").innerHTML += 
                        "<p></p>" + dadosJson[3].img+
                        "<p> <b>Nome:</b> " + dadosJson[3].nome +
                        "<p> <b>Personalidade:</b> "+ dadosJson[3].personalidade +"<p>"  +
                        "<p> <b>Força:</b> "+ dadosJson[3].forca +"<p>"  +
                        "<p> <b>Habilidade:</b> "+ dadosJson[3].habil +"<p>"
                        
                    
                });
            
            }

            function f_leao(){
              fetch("http://localhost:3000/personagem")
                  .then(response => {
                      return response.json()
                  }).then(dadosJson => {
              
                      console.log(dadosJson)  
              
                      document.getElementById("conteudo").innerHTML = " "
              
                      
                          document.getElementById("conteudo").innerHTML += 
                          "<p></p>" + dadosJson[4].img +
                          "<p> <b>Nome:</b> " + dadosJson[4].nome +
                          "<p> <b>Personalidade:</b> "+ dadosJson[4].personalidade +"<p>"  +
                          "<p> <b>Força:</b> "+ dadosJson[4].forca +"<p>"  +
                          "<p> <b>Habilidade:</b> "+ dadosJson[4].habil +"<p>" 
                       
                      
                  });
              
              }

              function f_zebra(){
                fetch("http://localhost:3000/personagem")
                    .then(response => {
                        return response.json()
                    }).then(dadosJson => {
                
                        console.log(dadosJson)  
                
                        document.getElementById("conteudo").innerHTML = " "
                
                        
                            document.getElementById("conteudo").innerHTML += 
                            "<p></p>" + dadosJson[5].img+
                            "<p> <b>Nome:</b> " + dadosJson[5].nome +
                            "<p> <b>Personalidade:</b> "+ dadosJson[5].personalidade +"<p>"  +
                            "<p> <b>Força:</b> "+ dadosJson[5].forca +"<p>"  +
                            "<p> <b>Habilidade:</b> "+ dadosJson[5].habil +"<p>" 
                           
                        
                    });
                
                }

            