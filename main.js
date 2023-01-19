var listaFilmes = [
    "https://m.media-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_.jpg",
    "https://m.media-amazon.com/images/I/811SBSeF3tL._AC_SY879_.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/87/30/15/20028674.jpg"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }