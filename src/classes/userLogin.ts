interface UserAccess {
  username: string;
  password: string;
  status: Status;
}

enum Status {
  active= "0",
  blocked= "0",
}

interface NewUser {
name:string
username: string;
password: string;
email: string;
}


class UserLogin {
  active:string;
  blocked:string;
  storedUsername:string;
  storedPassword:string;

  constructor() {
        this.active  = localStorage.getItem("active") as string;
        this.blocked  = localStorage.getItem("blocked") as string;
        this.storedUsername = localStorage.getItem("username") as string;
        this.storedPassword = localStorage.getItem("password") as string;
        }


  Login(username:string, password:string): boolean {
    if(this.storedUsername == null || this.storedUsername != username || this.storedPassword != password || this.blocked != "0" ) 
    {
      return false;
    } 
    return true;
  }

  public Register(user:NewUser) :boolean{
    localStorage.setItem("name",user.name)
    localStorage.setItem("username",user.username)
    localStorage.setItem("password", user.password)
    localStorage.setItem("email",user.email);
    localStorage.setItem("blocked","0");
    localStorage.setItem("active","1");
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
    localStorage.setItem("blocked","1");
    return true;
  }
}
export default new UserLogin();