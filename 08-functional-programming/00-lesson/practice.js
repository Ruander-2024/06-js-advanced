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


  //könyvek címeit gyűjtsük ki

const titles = books.map(book => book.title)

console.log(titles);


//keressük meg a 4.2 nél nagyobb értékelése van

const ratings = books.filter(book => book.rating > 4.2)

console.log(ratings);


//keressük meg a fantasy műfajú könyveket

console.log('------------------------');

const fantasyBooks = books.filter(book => book.genres.includes('fantasy'));
console.log(fantasyBooks);

console.log('------------------------');

/// 4 nél magasabb  értékelésű könyvek összértékű értékét írjuk ki forintban

const totalPriceInHUF = books
  .filter(book => book.rating > 4)       
  .reduce((total, book) => total + book.price * 405, 0); 

console.log(`Total price in HUF: ${totalPriceInHUF} Ft`);

console.log('------------------------');

//könyvek csoportosítása értékelések alapján lefelé kerekítve 
//, csak a címét szeretném kiiratni mindegyiknek


const groupByRating = books.reduce((groupedBooks, book) => {
    const rating = Math.floor(book.rating); 
    if (!groupedBooks[rating]) {
        groupedBooks[rating] = [];  
    }
    groupedBooks[rating].push(book.title); 
    return groupedBooks;
}, {});

console.log(groupByRating);