export interface LoginInfo {
  uuid: number;
  imgUrl?: string;
  userToken: string;
  userName: string;
}

export const initLogin = (): LoginInfo => ({
  uuid: 19961202,
  imgUrl: '',
  userToken: '',
  userName: 'admin',
})