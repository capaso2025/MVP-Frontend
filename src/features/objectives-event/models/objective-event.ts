export interface ObjectiveEvents {
  id: string;
  objectiveId: string;
  scheduledAt: string;
  status: 'PENDING' | 'COMPLETED' | 'MISSED';
  markedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
