export default {
    errors: {
        somethingWentWrong: 'Something went wrong',
        unique: '{field} already exists'
    },

    validations: {
        required: '{field} can\'t be empty',
        email: 'Invalid email format',
        password: 'Password should has at least 8 symbols, one uppercase, lowercase and digit ',
        passwordConfirmation: 'Passwords should match'
    },

    auth: {
        signIn: {
            greetingHello: 'Hello!',
            greeting: 'Welcome back',
            submit: 'Sign in',
            toForgot: 'Forgot Password',
            toSignUp: 'Sign up',

            errors: {
                badCredentials: 'Invalid email or password'
            }
        },

        signUp: {
            greeting: 'Welcome',
            submit: 'Sign up',
            toSignInQuestion: 'Already have account?',
            toSignIn: 'Sign in'
        },

        forgot: {
            heading: 'Reset password',
            note: 'Note: We will send reset password link to your email',
            submit: 'Reset',
            resetAsked: 'We\'ve sent reset link to your email',
            toSignIn: 'Sign in',

            errors: {
                invalidEmail: 'No account with with email found'
            }
        },

        resetPassword: {
            heading: 'Reset password',
            submit: 'Reset',
            toForgot: 'Try again',

            errors: {
                invalidCode: 'Sorry but seems like this link is not valid'
            }
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
        }
    }
};
