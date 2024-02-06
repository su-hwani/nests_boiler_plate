import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
// import { TestModule } from './test/test.module';

@Module({
  imports: [AccountModule], // TestModule 추가
})
export class ContextModule {}
