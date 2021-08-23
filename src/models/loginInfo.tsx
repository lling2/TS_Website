export interface LoginInfo {
  uuid: number;
  imgUrl: string;
}

export const initLogin = (): LoginInfo => ({
  uuid: 1,
  imgUrl: '/'
})