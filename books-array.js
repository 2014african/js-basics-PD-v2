/* a) Izveidojiet failu `books-array.js`.
b) Izveidojiet masīva tipa mainīgo `books`, kurā ir saraksts ar grāmatām. Katras grāmatas dati tiek glabāti
objektā ar trim īpašībām: `title`, `author` un `isAvailable` (attiecīgi: nosaukums, autors un ir/nav pieejama).
Masīvā izveidojiet divas grāmatas, no kurām viena ir, bet otra nav pieejama.
c) Ar `for` cikla palīdzību izvadiet katras grāmatas nosaukumu un pieejamību konsolē sekojošā formātā, piem.,"Nosaukums: Mazais pūķis Kokosrieksts (nav pieejama)". */


const books = [
    { title: "harijs Potters", author: "Adrians polis", isAvailable: true},
    { title: "Tigeris uz akmens", author: "Rinalds gorsanovs", isAvailable: false}
]

for (let i = 0; i < books.length; i++) {
    if (books[i].isAvailable == true)
        console.log("Nosaukums: " + books[i].title + " (pieejama)")
    else {
        console.log("Nosaukums: " + books[i].title + " (nav pieejama)")
    }

}