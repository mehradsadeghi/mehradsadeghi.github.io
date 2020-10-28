function home() {

    let date = diffYears(new Date(), new Date(2014, 7)); // 1393/05
    date =  Math.floor(date);

    return `
        <section>
            <h2>Hi there, </h2>
            <h2>I'm Mehrad Sadeghi. An enthusiastic backend developer.</h2>
            <h2>I have about <span>${date}</span> years of experience in web
                development.</h2>
            <br>
            <h2>I <strong>love</strong> CLIs. That's why you're inside one here :)</h2>
            <br>
            <p>Try
                <strong>help</strong> + <strong><kbd>Enter</kbd></strong>
                to get list of commands
            </p>
        </section>
    `;
}

function diffYears(dt2, dt1) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs((diff / 365.25).toFixed(1));
}