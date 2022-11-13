use anchor_lang::prelude::*;

#[account]
pub struct Post {
    //Cosas donde vamos a poner la variables que se van subir a solana
    //Dicta cuanto va a pesar un smart contract
    //Origen, productor, siniiga, reemo, sicomora, peso, edad, destino,upp,psg,fecha  /*El reemo es lo mega importante*/
    //Limite de memoria
    pub author: Pubkey,

    pub origen: i8,
    pub productor: i8,
    pub siniiga: i8,
    pub reemo: String,
    pub sicomora: i8,
    pub peso: i8,
    pub edad: i8,
    pub destino: i8,
    pub upp: i8,
    pub psg: i8,

    pub time_zone: i8,
    pub year: u8,
    pub month: u8,
    pub day: u8,
    pub hour: u8,
    pub minutes: u8,
    pub seconds: u8,
    pub url: String,
}

impl Post {
    pub const SPACE: usize = DISCRIMINATOR_LENGTH
        + PUBLIC_KEY_LENGTH // Author.

        + ORIGEN_LENGTH
        + PRODUCTOR_LENGTH
        + SINIIGA_LENGTH
        + REEMO_LENGTH
        + SICOMORA_LENGTH
        + PESO_LENGTH
        + EDAD_LENGTH
        + DESTINO_LENGTH
        + UPP_LENGTH
        + PSG_LENGTH
                
        + TIMESZONE_LENGTH // TIME.
        + YEAR_LENGTH // TIME.
        + MONTH_LENGTH // TIME.
        + DAY_LENGTH // TIME.
        + HOUR_LENGTH // TIME.
        + MINUTES_LENGTH // TIME.
        + SECONDS_LENGTH // TIME.

        + URL_LENGTH // Url.

        + LIKES_LENGTH; // Likes
}

const DISCRIMINATOR_LENGTH: usize = 8;
const PUBLIC_KEY_LENGTH: usize = 32;

const ORIGEN_LENGTH: usize = 1;
const PRODUCTOR_LENGTH: usize = 1;
const SINIIGA_LENGTH: usize = 1;
const REEMO_LENGTH: usize = 90;
const SICOMORA_LENGTH: usize = 1;
const PESO_LENGTH: usize = 1;
const EDAD_LENGTH: usize = 1;
const DESTINO_LENGTH: usize = 1;
const UPP_LENGTH: usize = 1;
const PSG_LENGTH: usize = 1;

const TIMESZONE_LENGTH: usize = 1;
const YEAR_LENGTH: usize = 1;
const MONTH_LENGTH: usize = 1;
const DAY_LENGTH: usize = 1;
const HOUR_LENGTH: usize = 1;
const MINUTES_LENGTH: usize = 1;
const URL_LENGTH: usize = 90;

const LIKES_LENGTH: usize = 32 * 10;