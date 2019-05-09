export class Producto{
  constructor(private _id: number, private _nombre:string, private _precio:number, private _disponible: number, private _imagen:string){}

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get precio(): number {
    return this._precio;
  }

  get disponible(): number {
    return this._disponible;
  }

  get imagen(): string {
    return this._imagen;
  }

  set disponible(value: number) {
    this._disponible = value;
  }
}
