import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


export enum AstronautaTipo {
   Comandante = 'Comandante',
   Tripulante = 'Tripulante'
};

@Schema()
export class Astronauta {

   @Prop({required:true})
   nombre: string;
   @Prop({required:true})
   mission: string;
   @Prop({default:AstronautaTipo.Tripulante})
   type: AstronautaTipo;

}

export const AstronautaSchema = SchemaFactory.createForClass(Astronauta);