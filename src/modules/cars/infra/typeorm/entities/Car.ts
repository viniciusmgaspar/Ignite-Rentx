import {v4 as uuidv4} from "uuid"
import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn} from "typeorm"
import { Category } from "./Category"
import { Specification } from "./Specification"

@Entity("cars")
class Car{

    @PrimaryColumn()
    id:string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    daily_rate: number

    @Column()
    available: boolean

    @Column()
    license_plate: string

    @Column()
    fine_amount: number

    @Column()
    brand: string

    //Varios carros para uma categoria
    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id"})
    category: Category

    @Column()
    category_id: string

    @ManyToMany(()=> Specification)
    @JoinTable({
        name:"specifications_cars",
        joinColumns: [{name:"car_id"}],                     //referencia a tabela da entidade que estou trabalhando
        inverseJoinColumns: [{name: "specification_id"}]    //referencia a tabela da entidade que estou que estou querendo inserir
    })
    specifications: Specification[]

    @CreateDateColumn()
    created_at: Date
    

    constructor(){
        if (!this.id){
            this.id = uuidv4();
            this.available = true
        }
    }
}

export {Car} 
