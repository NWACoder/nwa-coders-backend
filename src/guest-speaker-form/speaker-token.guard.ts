import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GuestSpeakerFormService } from './guest-speaker-form.service';

@Injectable()
export class SpeakerTokenGuard implements CanActivate {

	constructor(private guestSpeakerFormService: GuestSpeakerFormService) {}

	canActivate( context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		
		const [req] = context.getArgs();

		return this.guestSpeakerFormService.validateToken(req.query.token);
	}
}
