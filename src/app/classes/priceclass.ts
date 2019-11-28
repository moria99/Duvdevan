
class PriceList {
    public MisShura: number;
    public TeurParit: string;
    public Mehir: number;
    public Kamut: number;
    public SachHakol: number

    constructor(MisShura: number, TeurParit: string,
        Mehir: number, Kamut: number, SachHakol: number) {
        this.MisShura = MisShura;
        this.TeurParit = TeurParit;
        this.Mehir = Mehir;
        this.Kamut = Kamut;
        this.SachHakol = SachHakol;
    }


}
export { PriceList }


