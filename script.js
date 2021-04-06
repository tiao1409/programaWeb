function helloWorld() {
    var inputs =  document.getElementsByTagName('input');
    var input = inputs[0];
    var nome = input.value.trim();
    if (nome === ''){
      alert('O campo nome está vazio, por favor digite se nome.');
      return;
    }
    console.log('Nome:', nome);
    window.alert('Hello World,' + nome + '!');
    input.value = '';
  }