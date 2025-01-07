# Samostalni zadatak za vježbu 3
Vaš zadatak je nadograditi aplikaciju ```webshop``` dodavanjem novih funkcionalnosti.

Kako već imate iskustva u razvoju klijentske strane aplikacije, morate implementirati sljedeće
funkcionalnosti:
1. Instalirajte i podesite ```vue-router``` za navigaciju između stranica. Aplikacija mora imati dvije stranice: početnu stranicu (```/proizvodi```) koja će prikazivati sve proizvode kao kartice s osnovnim detaljima (vi ih odaberite i dizajnirajte kartice) i stranicu za prikaz pojedinog proizvoda koju imate već definiranu (```/proizvodi/:id```).
2. Implementirajte funkcionalnost gdje korisnik može stisnuti na određenu karticu proizvoda i biti
preusmjeren na stranicu s detaljima proizvoda.
3. Jednom kad korisnik pristupi stranici s detaljima (```/proizvodi/:id```), mora se poslati GET zahtjev na Express poslužitelj za dohvat podataka o jednom proizvodu s odgovarajućim ```id``` parametrom. Naravno, na početnoj stranici ```/proizvodi``` morate u ```onMounted``` hook u kojem ćete poslati GET zahtjev za dohvat svih proizvoda.

**Nadogradite Express poslužitelj** na način da ćete za svaki proizvod dodati još nekoliko atributa:
- ```dostupne_boje``` (npr. crna, bijela, plava, crvena)
- ```karakteristike``` (npr. materijal, težina, informacije o održavanju)

Definirajte nekoliko proizvoda i nadopunite ih s novim atributima u ```data.js``` datoteci.

Nadogradite klijentsku stranu na način da ćete prikazati sve nove podatke o proizvodu na stranici s detaljima.

Kada korisnik odabere proizvod i pritisne gumb "Dodaj u košaricu", nemojte poslati narudžbu kao što je to sad slučaj, već spremite podatke u vanjsku ```js``` datoteku, npr. ```narudzbe.js``` ili ```kosarica.js``` ili u ```localStorage```/```sessionStorage```. Na ovaj način pohranjujete podatke o narudžbi lokalno na strani klijenta (naučit ćemo kako to raditi bolje).

Nakon što korisnik doda proizvod, preusmjerite ga na početnu stranicu. Na početnoj stranici prikažite broj proizvoda u košarici, a ispod broja proizvoda dodajte još jedan gumb "Naruči proizvode" koji će poslati POST zahtjev ```/narudzbe``` na Express poslužitelj s podacima o narudžbi u tijelu zahtjeva.
