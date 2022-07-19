import { FactoryProvider, Injectable } from '@nestjs/common';
import axios, { Axios } from 'axios';

@Injectable()
export class HttpClient extends Axios {
    public static provide(): FactoryProvider {
        return {
            provide: HttpClient,
            useFactory: () => axios.create()
        };
    }
}
