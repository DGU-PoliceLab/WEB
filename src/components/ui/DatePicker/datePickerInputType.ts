export interface DateInputType {
  target: {
    name: string;
    value: string | DateWithTime;
  };
}

export interface DateWithTime {
  date: string;
  time: string;
}

export interface DateWithTimeObj extends DateWithTime {
  id: string;
}
