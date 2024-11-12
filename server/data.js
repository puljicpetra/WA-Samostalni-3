class Proizvod {
    constructor(id, naziv, cijena, velicine, opis, slike) {
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
        this.opis = opis;
        this.slike = slike;
    }
}

const proizvodi = [
    new Proizvod(1, 'Obična crna majica', 100, ['XS', 'S', 'M', 'L'], 'Opis crne majice', ['https://media.istockphoto.com/id/1142212002/photo/front-of-men-cut-black-t-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=fKanEGXPeuGz98ejzu6SCKRgJCtL0xPLKxm0pg3u7mk=', 'https://communityclothing.co.uk/cdn/shop/files/Female_Classic-T-Shirt_Black_Front_Portrait_4f1b3dcc-9d11-4b63-b6d2-d95b01d7f35b_2048x.jpg?v=1694642896']),
    new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L'], 'Opis traperica', ['https://img.modivo.cloud/zoomapp(2/3/8/9/2389ce5282bfc8403315710a59b838b56badc798_1_5412456008373.jpg,webp)/levis-r-traperice-501-r-00501-0114-tamnoplava-original-fit.webp']),
    new Proizvod(3, 'Zimska kapa', 40, 'onesize', 'Opis zimske kape', ['https://cdni.llbean.net/is/image/wim/507866_442_41']),
    new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42'], 'Opis čarapa', ['https://img01.ztat.net/article/spp-media-p1/189074754abe418fa42cb9791780f32b/ddc372036a0948cd96c1cba6e53e16f0.jpg?imwidth=1800&filter=packshot']),
    new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'], 'Opis tenisica', ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png']),
];

export { Proizvod, proizvodi };