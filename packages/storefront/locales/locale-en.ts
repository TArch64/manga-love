export default {
    hello: 'Hello',

    auth: {
        signIn: {
            greetingHello: 'Hello!',
            greeting: 'Welcome back',
            submit: 'Sign in',
            toForgot: 'Forgot Password',
            toSignUp: 'Sign up'
        },
        signUp: {
            greeting: 'Welcome',
            submit: 'Sign up',
            toSignInQuestion: 'Already have account?',
            toSignIn: 'Sign in'
        },
        forgot: {
            heading: 'Restore password',
            resetAsked: 'We\'ve sent reset link to your email'
        },
        form: {
            username: {
                placeholder: 'Type username',
                label: 'Username'
            },
            email: {
                label: 'Email',
                placeholder: 'Type email'
            },
            password: {
                label: 'Password'
            },
            passwordConfirmation: {
                label: 'Confirm password'
            }
        },
        errors: {
            badCredentials: 'Invalid email or password',
            somethingWentWrong: 'Something went wrong',
            unique: '{field} already exists'
        }
    },

    validations: {
        required: '{field} can\'t be empty',
        email: 'Invalid email format',
        passwordConfirmation: 'Passwords should match'
    }
};
