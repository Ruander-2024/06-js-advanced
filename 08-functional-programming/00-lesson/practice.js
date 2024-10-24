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

  // könyvek címeit gyújtsük ki egy tömbbe:

  const titles = books.map(book => book.title);
  console.log(titles);
  console.log('titles');

  // keressük meg azokat a könyveket, amelyeknek az értéke nagyobb, mint 4.2:

const ratings = books.filter(book => book.rating > 4.2);

console.log(ratings);
console.log('ratings');


// keressük meg a fantasy műfajú könyveket:

const fantasyBooks = books.filter(book => book.genres.includes ('fantasy'));
console.log(fantasyBooks);
console.log('fantasyBooks');


// 4-es feletti értékelésű könyvek értékét írjuk ki FT-ban

const totalPriceInHuf = books
    .filter(book => book.rating > 4)
    // .map(book => book.price * 405)  // map -al a megoldás , a reduce helyett
    .reduce((total, book) => total + book.price * 405, 0);

console.log(totalPriceInHuf);   

// könyvek csoportosítása értékelés alapján:
// cím kiírása


// 1.
    const groupedByRatings = books.reduce((groupedBooks, book) => {
        const rating = Math.floor(book.rating); // 4, 3
        if (!groupedBooks[rating]) groupedBooks[rating] = [];
        groupedBooks[rating].push(book.title);
        return groupedBooks;
      }, {});
    
      console.log(groupedByRatings);
    

// 2.      
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

//3.

    books.forEach(book => {
        const rating = Math.floor(book.rating); // Round down the rating
        if (!groupByRating3[rating]) {
        groupByRating3[rating] = []; // If no group for this rating exists, create an empty array
        }
        groupByRating3[rating].push(book.title); // Add the book's title to the corresponding rating group
        });
    
        console.log(groupByRating3);