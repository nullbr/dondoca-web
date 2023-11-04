import { ClientParams } from "./client";
import { WorkerParams } from "./worker";

export interface ScheduleParams {
  start_at_time: string;
  end_at_time: string;
  client: ClientParams;
  worker: WorkerParams;
}
