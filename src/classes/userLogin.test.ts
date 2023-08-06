import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { UserLogin, NewUser } from "./userLogin";

let userLogin = new UserLogin();
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
};
  
beforeEach(() => {
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});


describe("Login", () => {
  test("Login Success", () => {
    localStorageMock.getItem.mockReturnValueOnce("vikas"); 
    localStorageMock.getItem.mockReturnValueOnce("123"); 
    localStorageMock.getItem.mockReturnValueOnce("active"); 
    let loginResponse = userLogin.Login("vikas","123");
    expect(loginResponse).toBe(true);
  });
});

describe("Login", () => {
  test("Login Failed", () => {
    localStorageMock.getItem.mockReturnValueOnce("vikas"); 
    localStorageMock.getItem.mockReturnValueOnce("1235"); 
    localStorageMock.getItem.mockReturnValueOnce("0"); 
    let loginResponse = userLogin.Login("vikas","123");
    expect(loginResponse).toBe(false);
  });
});


describe("Register", () => {
  test("Successfull Register", () => {
    let user:NewUser = {
        name :"registerName",
        username:"registerUsername",
        password:"registerPassword",
        email:"registerEmail",
    }
    let registerResponse = userLogin.Register(user);
    expect(registerResponse).toBe(true);
  });
});

describe("RetriveUser", () => {
  test("Success retrieving users info", () => {
    localStorageMock.getItem.mockReturnValueOnce("registerName"); 
    localStorageMock.getItem.mockReturnValueOnce("registerUsername"); 
    localStorageMock.getItem.mockReturnValueOnce("registerPassword"); 
    localStorageMock.getItem.mockReturnValueOnce("registerEmail"); 
    let retrivingResponse:NewUser = userLogin.RetriveUser();
    expect(retrivingResponse.name).toBe("registerName");
    expect(retrivingResponse.username).toBe("registerUsername");
    expect(retrivingResponse.password).toBe("registerPassword");
    expect(retrivingResponse.email).toBe("registerEmail");
  });
});

describe("Block User", () => {
  test("Successfull Block", () => {
    let registerResponse = userLogin.BlockUser();
    expect(registerResponse).toBe(true);
  });
});