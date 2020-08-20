export const logCredits = () => {
    const pieceEmoji = String.fromCodePoint(0x270c);

    const logStyle = [
        "color: #17b978",
        "font-size: 3em",
        "font-weight: 300",
        "padding: 100px 0px 100px 0px",
    ].join(";");

    return console.log(
        `%c © ${new Date().getFullYear()} github.com/johoop ${pieceEmoji}`,
        logStyle
    );
};
