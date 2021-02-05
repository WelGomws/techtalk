import React from 'react';
import * as Styled from './style';

function Container({children}) {
    return(
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}

export default Container;