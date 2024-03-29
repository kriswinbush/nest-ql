import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './cats.resolvers';
import { CatSchema } from './schemas/cats.schema';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
