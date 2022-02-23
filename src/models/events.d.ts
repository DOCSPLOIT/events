export interface KonfEvents {
  count: number;
  events: Event[];
  loading: string;
}

export interface Event {
  name: string;
  event_id: string;
  event_url: string;
  start_date: Date;
  start_time: string;
  end_date: Date;
  end_time: string;
  is_free: boolean;
  is_virtual: boolean;
  is_live: boolean;
  created_at: Date;
  is_past: boolean;
  is_future: boolean;
  is_running: boolean;
}
