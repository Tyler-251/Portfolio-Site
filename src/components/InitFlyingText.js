import React from "react"
import {useSpring, animated} from "react-spring"

export function InitFlyingText(text, start, height) {
    var t1 = "translate(" + start + "%, 0)"
    var t2 = "translate(" + (130) + "%, 0)"
    const styles = useSpring({
        loop: false,
        from: {
            transform: t1
            
        },
        to: {
            transform: t2
        },
        config: {duration: 12000}
    });
    return (
        <div class="fallingtextdiv">
            <animated.p 
                style={{
                    marginTop: height,
                    ...styles,
            }}>
            {text}</animated.p>
        </div>
    );
}