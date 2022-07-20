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
            note: 'Please, enter your email address so that we can send you a confirmation letter',
            submit: 'Reset',
            resetAsked: 'We\'ve sent reset link to your email',
            toSignIn: 'Sign in',

            errors: {
                invalidEmail: 'No account with with email found'
            }
        },

        resetPassword: {
            confirm: 'Reset',
            toForgot: 'Try again',
            toSignUp: 'Sign up',
            toHome: 'Back to home',

            pending: {
                title: 'Hi, {username}',
                description: 'Please, enter the new password'
            },

            success: {
                title: 'SUCCESS!',
                description: 'Your email changed'
            },

            error: {
                title: 'Ooops...',
                description: 'Sorry but seems like this link is not valid'
            }
        },

        emailVerification: {
            confirm: 'Confirm my email',
            toHome: 'Back to home',

            pending: {
                title: 'Hi, {username}',
                description: 'You can confirm your email by clicking on the button bellow. If you did not registered, please ignore this letter.'
            },

            success: {
                title: 'SUCCESS!',
                description: 'Your email confirmed'
            },

            error: {
                title: 'Ooops...',
                description: 'This link for confirming email is expired or invalid'
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
            },
            newPassword: {
                label: 'New Password'
            },
            newPasswordConfirmation: {
                label: 'Confirm new password'
            }
        }
    },

    layout: {
        navigation: {
            links: {
                home: 'Home',
                library: 'Library',
                notifications: 'Notifications',
                profile: 'Profile',
                'sign-in': 'Sign In'
            }
        }
    }
};
