import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export class EventMarker {
  @prop({ required: true })
  public title: string;

  @prop()
  public description?: string;

  @prop({ required: true })
  public lat: number;

  @prop({ required: true })
  public lng: number;

  @prop({ default: 20 })
  public radius?: number;
}

export const EventMarkerModel = getModelForClass(EventMarker, {
  schemaOptions: {
    timestamps: true,
  },
});
