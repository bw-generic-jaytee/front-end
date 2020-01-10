import React, {useContext} from 'react';
import {Button} from 'semantic-ui-react';

import {Context} from '../hooks/Context';

const ButtonSearch = () => {
    const ctx = useContext(Context)

    function clickHandler(word) {
        let filt = ctx.state.recipes.filter(rec => {

            return rec.meal_type.map(v => v.toLowerCase()).includes(keyword)
        })
    }

    return (
        <div>
            <Button>Breakfast</Button>
        </div>
    )

}

export default ButtonSearch;