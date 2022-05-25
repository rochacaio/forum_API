import { SignUpController } from "./signup";

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
    })
})