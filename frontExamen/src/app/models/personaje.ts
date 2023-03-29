export class Personaje{
    id:number;
    name:string;
    status:string;
    // species:string;
    gender:string;
    // origin:object;
    // location:object;
    image:string;
    // episode:[any];
    // url:string;
    // created:string;

    constructor(id:number, name:string, status:string, gender:string, image:string) {
        this.id = id;
        // this.species = species;
        this.name = name;
        this.status =status;
        this.gender = gender;
        // this.origin =origin;
        // this.location =location;
        this.image = image;
        // this.episode = episode;
        // this.url = url;
        // this.created = created;
    }
}