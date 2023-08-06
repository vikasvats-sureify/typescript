enum Status {
  active= "active",
  blocked= "blocked",
}

export interface NewUser {
  name:string;
  username: string;
  password: string;
  email: string;
}


export class UserLogin {
  public Login(username:string, password:string): boolean {
    let  LocalUsername = localStorage.getItem("username");
    let  LocalPassword = localStorage.getItem("password");
    let  Localstatus = localStorage.getItem("status");
    if( LocalUsername == null || LocalUsername != username || LocalPassword != password ||  Localstatus !=  Status.active ) {
      return false;
    } 
    return true;
  }

  public Register(user:NewUser) :boolean{
    localStorage.setItem("name",user.name)
    localStorage.setItem("username",user.username)
    localStorage.setItem("password", user.password)
    localStorage.setItem("email",user.email);
    localStorage.setItem("status",Status.active);
    return true;
  }

  public RetriveUser(): NewUser {
    let storedUser: NewUser = {
        name: localStorage.getItem("name") as string,
        username:localStorage.getItem("username") as string,
        password: localStorage.getItem("password") as string,
        email: localStorage.getItem("email") as string,
    }
    return storedUser
  }
  public BlockUser(): boolean{
    localStorage.setItem("status",Status.blocked);
    return true;
  }
}
export default new UserLogin();