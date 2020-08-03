import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);

const texts = ["student", "musician", "developer"];

export class TextTransition extends Component {
    state = {
        number: randomNumber(),
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0,
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                number: randomNumber(),
                textIndex: this.state.textIndex + 1,
                paragraphIndex: this.state.paragraphIndex + 1,
            });
        }, 4000);
    }

    render() {
        return (
            <React.Fragment>
                <section className="inline">
                    a
                    <ReactTextTransition
                        text={texts[this.state.textIndex % texts.length]}
                        spring={presets.gentle}
                        style={{ margin: "0 4px" }}
                        inline
                    />
                </section>
            </React.Fragment>
        );
    }
}
