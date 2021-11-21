import { Injectable } from '@nestjs/common';
import { CreateGuestSpeakerFormDto } from './dto/create-guest-speaker-form.dto';
import { UpdateGuestSpeakerFormDto } from './dto/update-guest-speaker-form.dto';

@Injectable()
export class GuestSpeakerFormService {

	async validateToken(token){
		// TODO: finish building out token validation
		if(token === "abc")
			return true
		else
			return false
	}

}
