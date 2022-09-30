import React from "react"
import {useSpring, animated} from "react-spring"

export function FlyingText(text) {
    var randomHeight = Math.random() * 80;
    var seed = Math.random();
    var randomSpeed = seed * 10000 + 10000;
    var randomSize = ((seed*100/13) + 7) + "pt";
    var randomStart = Math.random() * 10000;
    var t1 = "translate(" + (-35) + "%, 0)"
    var t2 = "translate(" + (130) + "%, 0)"
    const styles = useSpring({
        loop: true,
        from: {
            transform: t1
            
        },
        to: {
            transform: t2
        },
        config: {duration: randomSpeed},
        delay: randomStart
    });
    return (
        <div class="fallingtextdiv">
            <animated.p 
                style={{
                    marginTop: randomHeight,
                    fontSize: randomSize,
                    ...styles,
            }}>
            {text}</animated.p>
        </div>
    );
}