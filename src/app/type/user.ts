export type LotteryType = {
  id: number;
  name: string;
  active: boolean;
  start_at: string;
  end_at: string;
  count: number;
};
export type LineFriendType = {
  avatar: string;
  joined_at: string;
  line_id: string;
  name: string;
};
export type UserInfoType = {
  user_id: string;
  line_id: string;
  line_email: string;
  line_friends: LineFriendType[];
  name: string;
  avatar: string;
  next_exp: number;
  point: number;
  today_point: number;
  exp: number;
  level: number;
  share: number;
  lottery: LotteryType[];
};

export type UserInfoRes = {
  data: UserInfoType;
  error: string;
};

export type UserLoginRes = {
  data: string;
  error: string;
};
