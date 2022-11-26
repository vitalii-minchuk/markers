import { EventMarkerModel } from "./event-marker.model";

export async function createEventMarker(eventMarker) {
  return EventMarkerModel.create(eventMarker);
}
