import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PublicUrlService } from '@manga-love/core';
import { map, Observable, OperatorFunction, tap } from 'rxjs';
import { Response } from 'express';
import { MICROSERVICES } from '../microservices.config';
import { AuthStrategy } from './auth.strategy';
import { QLResponse } from './response.decorator';
import {
    AskResetPasswordArgs,
    UserActionStateArgs,
    UserActionStateType,
    SignInArgs,
    GoogleSignInArgs,
    SignUpArgs,
    SuccessType,
    ResetPasswordArgs,
    VerifyEmailBody
} from './models';

@Resolver()
export class AuthResolver {
    constructor(
        @Inject(MICROSERVICES.AUTH)
        private readonly authService: ClientProxy,
        @Inject(PublicUrlService.API)
        private readonly apiUrl: PublicUrlService
    ) {}

    private authOperator(response: Response): OperatorFunction<string, SuccessType> {
        return (token$: Observable<string>) => token$.pipe(
            tap((token: string) => this.writeAuthCookie(response, token)),
            this.mapSuccessType
        );
    }

    private writeAuthCookie(response: Response, token: string): void {
        response.cookie(AuthStrategy.COOKIE, token, {
            signed: true,
            secure: true,
            httpOnly: true
        });
    }

    private mapSuccessType(source$: Observable<unknown>): Observable<SuccessType> {
        return source$.pipe(map(() => ({ success: true })));
    }

    @Mutation(() => SuccessType)
    public signIn(@QLResponse() response: Response, @Args() args: SignInArgs): Observable<SuccessType> {
        return this.authService.send<string>('sign-in', args).pipe(this.authOperator(response));
    }

    @Mutation(() => SuccessType)
    public googleSignIn(@QLResponse() response: Response, @Args() args: GoogleSignInArgs): Observable<SuccessType> {
        return this.authService.send<string>('google-sign-in', args).pipe(this.authOperator(response));
    }

    @Mutation(() => SuccessType)
    public signUp(@QLResponse() response: Response, @Args() args: SignUpArgs): Observable<SuccessType> {
        return this.authService.send<string>('sign-up', args).pipe(this.authOperator(response));
    }

    @Mutation(() => SuccessType)
    public askResetPassword(@Args() args: AskResetPasswordArgs): Observable<SuccessType> {
        return this.authService.send('ask-reset-password', args.email).pipe(this.mapSuccessType);
    }

    @Query(() => UserActionStateType)
    public resetPasswordState(@Args() args: UserActionStateArgs): Observable<UserActionStateType> {
        return this.authService.send('reset-password-state', args.code);
    }

    @Mutation(() => SuccessType)
    public resetPassword(@QLResponse() response: Response, @Args() args: ResetPasswordArgs): Observable<SuccessType> {
        return this.authService.send<string>('reset-password', args).pipe(this.authOperator(response));
    }

    @Query(() => UserActionStateType)
    public emailVerificationState(@Args() args: UserActionStateArgs): Observable<UserActionStateType> {
        return this.authService.send('email-verification', args.code);
    }

    @Mutation(() => SuccessType)
    public verifyEmail(@QLResponse() response: Response, @Args() args: VerifyEmailBody): Observable<SuccessType> {
        return this.authService.send('verify-email', args.code).pipe(this.authOperator(response));
    }
}
