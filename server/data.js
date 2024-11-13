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
        new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L'], ['#FFFFFF'], ['https://cdn.aboutstatic.com/file/images/72f2f38a1368b177fbe020fdbe3f43d3.jpg?brightness=0.96&quality=75&height=1280&width=960'], 'Opis traperica', ['Karakteristika A', 'Karakteristika B'], ['#000000', '#FFFFFF', '#1E3A8A']),
        new Proizvod(3, 'Zimska kapa', 40, ['onesize'], ['#FF0000'], ['https://cdni.llbean.net/is/image/wim/507866_442_41?hei=1125&wid=975&resMode=sharp2&fit=fit,1'], 'Topla zimska kapa', ['Mekani materijal', 'Dostupna u crvenoj boji'], ['#000000', '#FFFFFF', '#1E3A8A']),
        new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42'], ['#FFFFFF', '#000000'], ['https://img01.ztat.net/article/spp-media-p1/189074754abe418fa42cb9791780f32b/ddc372036a0948cd96c1cba6e53e16f0.jpg?imwidth=1800&filter=packshot'], 'Udobne sportske čarape', ['Pamuk', 'Dostupne u bijeloj i crnoj boji'], ['#000000', '#FFFFFF', '#1E3A8A']),
        new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'], ['#FFFFFF', '#0000FF'], ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png'], 'Kvalitetne sportske tenisice', ['Izdržljive', 'Dostupne u bijeloj i plavoj boji'], ['#000000', '#FFFFFF', '#1E3A8A'])
];

export { Proizvod, proizvodi };