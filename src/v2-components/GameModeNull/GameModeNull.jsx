import React from 'react'
import SelectGameMode from '../SelectGameMode/SelectGameMode'
import IntroText from '../IntroText/IntroText'

const GameModeNull = ({changeGameMode}) => {
    return (
        <>
            <IntroText />
            <SelectGameMode changeGameMode={changeGameMode} />
        </>
    )
}

export default GameModeNull