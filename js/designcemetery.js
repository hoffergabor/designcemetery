
var cb = new Codebird;
cb.setConsumerKey("dcqMcM4R564SmiYOy0yHuf5iq", "bLxtRNjjtkvELD3uH944zSwMIRM4mNsFiW5K7XUpW7oXaEIQAJ");

cb.__call(
    "oauth2_token",
    {},
    function (reply, err) {
        var bearer_token;
        if (err) {
            console.log("error response or timeout exceeded" + err.error);
        }
        if (reply) {
            bearer_token = reply.access_token;
        }
    }
);

cb.__call(
    "search_tweets",
    "q=#design",
    function (reply) {
        console.log("Searched for #designcemetery: " + JSON.stringify(reply));
    },
    true // this parameter required
);
