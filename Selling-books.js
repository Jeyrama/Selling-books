/*
A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. 
Each book has a code of at least 3 characters. 
The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, 
which indicates the quantity of books of this code in stock.

Task:
  You will receive the bookseller's stocklist and a list of categories. 
  Your task is to find the total number of books in the bookseller's stocklist, 
  with the category codes in the list of categories. 

  Note: the codes are in the same order in both lists.
  Return the result as a string described in the example below.

  If any of the input lists is empty, 
  return an empty string, or an empty array.

Example:
  # the bookseller's stocklist:
  "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

  # list of categories: 
  "A", "B", "C", "W"

  # result:
  "(A : 20) - (B : 114) - (C : 50) - (W : 0)"

  Explanation:
    category A: 20 books (ABART)
    category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
    category C: 50 books (CDXEF)
    category W: 0 books
*/


// Solution

function stockList(listOfArt, listOfCat) {
  let qs = {};
  if (!listOfArt.length) return '';

  listOfArt.forEach(function(art) {
    var cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
  });

  return listOfCat.map(function(c) {
    return '(' + c + ' : ' + (qs[c] | 0) + ')';  
  }).join(' - ');  
}

// or

function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return ''
  return listOfCat.map(w => {
    const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
    return `(${w} : ${s})`
  }).join(' - ')
}