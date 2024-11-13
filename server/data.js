class Proizvod {
    constructor(id, naziv, cijena, velicine, opis, slike, karakteristika, boje) {
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
        this.opis = opis;
        this.slike = slike;
        this.karakteristika = karakteristika;
        this.boje = boje;
    }
}

const proizvodi = [
        new Proizvod(1, 'Obična crna majica', 100, ['XS', 'S', 'M', 'L'], ['Obična crna majica'], ['https://www.shutterstock.com/image-photo/front-back-views-man-wearing-260nw-2407770025.jpg'], ['Karakteristika 1', 'Karakteristika 2'], ['#000000', '#FFFFFF', '#1E3A8A']),
        new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L'], ['#FFFFFF'], ['https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UL1500_.jpg'], 'Opis traperica', ['Karakteristika A', 'Karakteristika B'], ['#000000', '#FFFFFF', '#1E3A8A']),
        new Proizvod(3, 'Zimska kapa', 40, ['onesize'], ['#FF0000'], ['https://m.media-amazon.com/images/I/71c8IVPgsNL._AC_UL1500_.jpg'], 'Topla zimska kapa', ['Mekani materijal', 'Dostupna u crvenoj boji'], ['#000000', '#FFFFFF', '#1E3A8A']),
        new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42'], ['#FFFFFF', '#000000'], ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf4d458d0a7f4f1290a3abdb010f81e0_9366/Performance_Crew_Socks_6_Pairs_Multicolor_DZ9355_21_model.jpg'], 'Udobne sportske čarape', ['Pamuk', 'Dostupne u bijeloj i crnoj boji'], ['#000000', '#FFFFFF', '#1E3A8A']),
        new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'], ['#FFFFFF', '#0000FF'], ['https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47a5241c-d1a0-4599-b951-8ae394850497/air-force-1-07-shoe-FM2kz5.png'], 'Kvalitetne sportske tenisice', ['Izdržljive', 'Dostupne u bijeloj i plavoj boji'], ['#000000', '#FFFFFF', '#1E3A8A'])
];

export { Proizvod, proizvodi };