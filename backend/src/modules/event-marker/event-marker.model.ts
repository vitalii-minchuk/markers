import { pre, getModelForClass, prop } from "@typegoose/typegoose";

export class EventMarker {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public position: string;
}

export const EventMarkerModel = getModelForClass(EventMarker, {
  schemaOptions: {
    timestamps: true,
  },
});
