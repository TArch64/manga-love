import { Module } from '@nestjs/common';
import { HttpClient } from '../core';
import { KitsuClient } from './kitsu.client';
import { KitsuMangaService } from './manga';

@Module({
    providers: [
        HttpClient.provide({
            baseUrl: process.env.API_KITSU_ROOT,
            headers: {
                'Accept':' application/vnd.api+json',
                'Content-Type':' application/vnd.api+json'
            }
        }),
        KitsuClient,
        KitsuMangaService
    ]
})
export class KitsuModule {}
