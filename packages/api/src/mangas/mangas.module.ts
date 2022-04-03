import { Module } from '@nestjs/common';
import { MangasRepositoryModule } from './repository';
import { MangasResolver } from './mangas.resolver';

@Module({
    imports: [MangasRepositoryModule],
    providers: [MangasResolver]
})
export class MangasModule {}
