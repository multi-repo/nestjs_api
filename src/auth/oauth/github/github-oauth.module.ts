import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { GithubOAuthService } from './utils/github.service'
import { GithubOAuthController } from './utils/github.contoller'
import { GithubOauthStrategy } from './utils/github.strategy'
import { SessionSerializer } from 'src/auth/serializer/Serializer'
import { AuthService } from 'src/auth/auth/auth.service'

@Module({
  imports: [PassportModule.register({ session: true })],

  controllers: [GithubOAuthController],
  providers: [
    GithubOAuthService,
    GithubOauthStrategy,
    SessionSerializer,
    AuthService,
  ],
})
export class GithubOAuthModule {}
