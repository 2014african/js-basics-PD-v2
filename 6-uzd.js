/* 6.uzdevums: problēmas risinājums
Klubs uztur biedru sarakstu. Katrs biedrs tiek attēlots kā objekts ar četrām īpašībām: vārds, uzvārds, loma un stundas. Lomas var būt "leader" (vadītājs) vai "member" (biedrs). Stundas nosaka brīvprātīgo stundu skaitu mēnesī katram biedram.

Izveidojiet testa datus, lai jūsu izveidotā programma spētu veikt uzdevumu.
Ir jāizveido saraksts, kurā ir 2 vadītāji un 5 biedri.

Programmai jāsniedz atbildes uz trim jautājumiem:
1. Kas ir vadītāji?
Izdrukājiett konsolē visus biedrus, kuriem ir loma "leader".

2. Cik liels ir kopējais brīvprātīgo stundu skaits?
Aprēķiniet un izvadiet summu visiem biedriem kopā. */

const saraksts = [
{vards: "1", uzvards: "1a", loma: "leader", stundas: 23},
{vards: "2", uzvards: "2a", loma: "leader", stundas: 52},
{vards: "3", uzvards: "3a", loma: "member", stundas: 41},
{vards: "4", uzvards: "4a", loma: "member", stundas: 21},
{vards: "5", uzvards: "5a", loma: "member", stundas: 12},
{vards: "6", uzvards: "6a", loma: "member", stundas: 52},
{vards: "7", uzvards: "7a", loma: "member", stundas: 12},

]

for (let i = 0; i < saraksts.length; i++) {
    if (saraksts[i].loma == "leader")
       console.log(saraksts[i].vards)

}

let summa = 0

