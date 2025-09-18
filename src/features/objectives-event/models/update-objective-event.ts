export interface UpdateObjectiveEventResponse {
  message: string;
}

export interface UpdateObjectiveEventPayload {
  id: string;
  action: 'complete' | 'fail';
}
