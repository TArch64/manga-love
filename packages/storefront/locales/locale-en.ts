export default {
    hello: 'Hello',

    auth: {
        signIn: {
            greetingHello: 'Hello!',
            greeting: 'Welcome back',
            submit: 'Log In',
            toSignUp: 'Sign Up'
        },
        signUp: {
            greeting: 'Welcome'
        },
        form: {
            email: {
                label: 'Email',
                placeholder: 'Type email'
            },
            password: {
                label: 'Password'
            }
        },
        errors: {
            badCredentials: 'Invalid email or password'
        }
    },

    validations: {
        required: '{field} can\'t be empty',
        email: 'Invalid email format',
        passwordConfirmation: 'Passwords should match'
    }
};
