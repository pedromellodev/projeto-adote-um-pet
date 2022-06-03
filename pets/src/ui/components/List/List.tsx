import { Button } from '@mui/material';
import {
    ListStyled, 
    ItemListStyled,
    PhotoStyled,
    InfoStyled,
    NameStyled,
    DescriptionStyled
} from './List.style'
import { Pet } from '../../../data/@types/Pet';

interface ListProps{
    pets: Pet[];
}

import { TextService } from '../../../data/services/TextService';

export default function List(props: ListProps){
    const maxTextLength = 200;

    return (  
        <ListStyled>
            {props.pets.map(pet => (
                <ItemListStyled>
                <PhotoStyled src= {pet.photo} />
                <InfoStyled>
                    <NameStyled>{pet.name}</NameStyled>
                    <DescriptionStyled>
                        {TextService.textLimit(pet.history, maxTextLength)}
                    </DescriptionStyled>
                    <Button variant={'contained'} fullWidth>Adotar {pet.name}</Button>
                </InfoStyled>
                </ItemListStyled>
            ))}
            
        </ListStyled>)

   
}