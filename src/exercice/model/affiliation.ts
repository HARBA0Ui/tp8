import { Departement, Fonction } from "./types";

export class Affiliation {
    constructor(
        public fonction:Fonction,
        public departement:Departement
    ){}
}
