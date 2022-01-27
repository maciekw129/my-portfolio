import {
    AnimationContainer,
} from './styles';

const FirstPage = () => {
    return(
        <AnimationContainer>
            <div className="animation">
                <div className="left">
                    <div className='circle'>
                        <div className='mask'></div>
                    </div>
                </div>
                <div className="right">
                    <div className='circle'>
                        <div className='mask'></div>
                    </div>
                </div>
            </div>
            <div className="middleCircle">M</div>
        </AnimationContainer>
    )
};

export default FirstPage;