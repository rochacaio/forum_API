import { SignUpController } from "./signup";
import { MissingParamError } from "../errors/missing-param-error";

describe('signUpController',() => {
    test('Should return 400 if no name is provided',() => {
        const sut = new SignUpController();
        const httpRequest = {
            body:{
                email:'any@mail.com',
                password:'any_pass',
                passwordConfirmation: 'any_pass'
            }
        }
       const httpResponse =  sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })
    test('Should return 400 if no email is provided',() => {
        const sut = new SignUpController();
        const httpRequest = {
            body:{
                name:'Caio',
                password:'any_pass',
                passwordConfirmation: 'any_pass'
            }
        }
       const httpResponse =  sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })
    test('Should return 400 if no password is provided',() => {
        const sut = new SignUpController();
        const httpRequest = {
            body:{
                name:'Caio',
                email:'any@mail.com',
                passwordConfirmation: 'any_pass'
            }
        }
       const httpResponse =  sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('password'))
    })
    test('Should return 400 if no passwordConfirmation is provided',() => {
        const sut = new SignUpController();
        const httpRequest = {
            body:{
                name:'Caio',
                email:'any@mail.com',
                password:'any_pass',
            }
        }
       const httpResponse =  sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
    })
})