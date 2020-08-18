import { RootStateOrAny } from 'react-redux';
import _ from 'lodash';

export default (state = {}, action: RootStateOrAny) => {
    switch(action.type) {
        case 'FETCH_POKEMONS':
            return {...state, ..._.mapKeys(action.payload, 'id')}
    }
}