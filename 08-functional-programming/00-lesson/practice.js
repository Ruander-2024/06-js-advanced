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

  // könyvek címeit gyűjtsük ki egy tömbbe

  const titles = books.map(book => book.title);
  console.log(titles);
  console.log('titles');

  // keressük meg azokat a könyveket, amelyeknek az értékelése nagyobb mint 4.2

  const ratings = books.filter(book => book.rating > 4.2)

  console.log(ratings);
  console.log('ratings');

  // keressünk meg a fantasy műfajú könyveket

  const fantasyBooks = books.filter(book => book.genres.includes('fantasy'));
  console.log(fantasyBooks);
  console.log('fantasyBooks');

  // 4-es feletti értékelésű könyvek értékét írjuk ki forintban

  const totalPriceInHuf = books
    .filter(book => book.rating > 4)
    // .map(book => book.price * 405)
    .reduce((total, book) => total + book.price * 405, 0);

console.log(totalPriceInHuf);

// könyvek csoportosítása értékelés alapján
// cím kiírása

const groupedByRatings = books.reduce((groupedBooks, book) => {
    const rating = Math.floor(book.rating); // 4, 3
    if (!groupedBooks[rating]) groupedBooks[rating] = [];
    groupedBooks[rating].push(book.title);
    return groupedBooks;
  }, {});

  console.log(groupedByRatings);

  const groupedByRatings2 = books.reduce((groupedBooks, book) => {
    const rating = Math.floor(book.rating) // 4, 3
    if(!groupedBooks[rating]){
        groupedBooks[rating] = []
    }
        groupedBooks[rating].push(book.title);
        return groupedBooks;

}, {})

console.log(groupedByRatings);
console.log(groupedByRatings2);

  //   '3': [ 'A Gentleman in Moscow' ],
  //   '4': [ 'Good Omens', 'Bone: The Complete Edition', 'American Gods' ]