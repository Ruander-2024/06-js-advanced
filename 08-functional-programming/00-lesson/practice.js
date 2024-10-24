const books = [
    {
      title: 'Good Omens',
      authors: ['Terry Pratchett', 'Neil Gaiman'],
      rating: 4.25,
      genres: ['fiction', 'fantasy'],
      price: 20,
    },
    {
      title: 'Bone: The Complete Edition',
      authors: ['Jeff Smith'],
      rating: 4.42,
      genres: ['nonfiction', 'graphic novel', 'fantasy'],
      price: 40,
    },
    {
      title: 'American Gods',
      authors: ['Neil Gaiman'],
      rating: 4.11,
      genres: ['fiction', 'fantasy'],
      price: 30,
    },
    {
      title: 'A Gentleman in Moscow',
      authors: ['Amor Towles'],
      rating: 3.36,
      genres: ['fiction', 'historical fiction'],
      price: 10,
    },
  ];

  //könyv címének kikeresése
  const titles = books.map(book => book.title);
  console.log(titles);
  
  // 4,2 nagyobb érték kikeresése
  const ratings = books.filter(book => book.rating > 4.2)
  console.log(ratings);

  // fantasy könyvek keresése
  const fantasy = books.filter(book => book.genres.includes('fantasy'));
  console.log(fantasy);

  // 4-es értékelésű könyv felett összege forintban
  const totalPrice = books
  .filter(book => book.rating > 4)
  .reduce((total, book) => total + book.price * 405, 0);
  console.log(totalPrice);