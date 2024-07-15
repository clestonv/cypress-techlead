describe('Funcionalidade de Login', () => {
    it('Igualdade', () => {
        // código do teste
        const a = 1;
        /**
        * Espero que A seja igual há 1
        */
        expect(a).equal(1); // Não Retorna erro
        //expect(a).equal(2); // Retorna erro
        /**
        * Espero que A seja igual há 1
        */
        expect(a).to.be.equal(1); // Não Retorna Erro
        //expect('a').to.be.equal(1); // Retorna erro
        expect('a').not.to.be.equal(1); // Estou negando
    });

    it('Verdade', () => {
        // código do teste
        const a = true;
        const b = null;
        let c;
        /**
        * Espero que A seja verdadeiro
        */
        expect(a).to.be.true; // Não Retorna erro
        expect(true).to.be.true;
        expect(b).to.be.null;
        expect(a).not.to.be.null; // Negativa modo 01
        expect(a).to.be.not.null; // Negativa modo 02
        //expect(c).to.be.not.undefined; // Valor indefinido
      });
      
      it('Validando Objetos', () => {
        // código do teste
          const obj = {
              a: 1,
              b: 2,
          }
        /**
        * Comparando ele com ele mesmo
        */
        expect(obj).equal(obj);
        expect(obj).equals(obj);
        expect(obj).eq(obj);
        expect(obj).to.be.equal(obj);
        /**
        * Comparando o que está dentro do Objeto
        **/
        // expect(obj).to.be.equal({a: 1, b: 2}); // Retorna Erro
        expect(obj).to.be.deep.equal({a: 1, b: 2}); // Não retorna Erro
        expect(obj).eql({a: 1, b: 2}); // Modo mais curto
        expect(obj).include({a: 1}); //Valida só uma propriedade do obj
        expect(obj).to.have.property('b'); //Valida se possui a propriedade B
        expect(obj).to.have.property('b', 2); //Valida a propriedade B e se o valor dela é 2
        expect(obj).to.not.be.empty; //Valida que não está vazio
        expect({}).to.be.empty; //Valida também que não está vazio
      });
      
      it('Array', () => {
        // código do teste
        const arr = [1,2,3]
        /**
        * Validando os valores dentro do Array
        */
        expect(arr).to.have.members([1, 2, 3]); //Validando tudo
        expect(arr).to.include.members([1, 3]); //Validando alguns
        expect(arr).to.not.be.empty; //Validando que não está vazio
        expect([]).to.be.empty; //Validno que está vazio
      });

      it('Tipo', () => {
        // código do teste
        const num = 1;
        const str = 'String'
        /**
        * Validando os tipos
        */
        expect(num).to.be.a('number');
        expect(str).to.be.a('string');
        expect({}).to.be.an('object'); //Validando Objeto
        expect([]).to.be.an('array'); //Validando Array
      });

      it('Strings', () => {
        // código do teste
        const str = 'String de teste';
        /**
        * Validando Strigs
        */
        expect(str).to.be.equal('String de teste'); //Texto igual
        expect(str).to.have.length(15); //Tamanho da String
        expect(str).to.contains('teste'); //Trecho da String
        /**
        * Validando Usando ReGex
        */
        expect(str).to.match(/String/); //Se o texto existe
        expect(str).to.match(/^String/); //Se o texto inicia com String
        expect(str).to.match(/teste$/); //Se o texto termina com teste
        expect(str).to.match(/.{15}/); //Tamanho da String
        expect(str).to.match(/\W+/); //Só existe letras
        expect(str).to.match(/\D+/); //Não contém números	
      })

      it.only('Numeros', () => {
        // código do teste
        const number = 4;
        const floatNumber = 5.2123
        
        /**
        * Validando Números
        */
        expect(number).to.be.equal(4); //Igual 4
        expect(floatNumber).to.be.equal(5.2123); //Igual
        expect(number).to.be.above(3); //Valor maior que 3
        expect(number).to.be.below(7); //Abaixo de 4
        expect(floatNumber).to.be.closeTo(5.2, 0.1); //Valor proximo 5.2123
        expect(floatNumber).to.be.above(5); //Valor acima de 5
      })
  });
  