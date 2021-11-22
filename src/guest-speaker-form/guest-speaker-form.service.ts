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

	//generate random token
	randomizer = () => {
        //generate a random number, convert to base36, & remove the '0.' from the string 
        return Math.random().toString(36).substr(2);
    }

    generateToken = () => {
        //make the generated token twice as long
        return this.randomizer() + this.randomizer();
    }

}
