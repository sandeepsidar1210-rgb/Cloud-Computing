module.exports = async function (context, req) {
    try {
        let n1 = parseInt(req.body.num1 || 0);
        let n2 = parseInt(req.body.num2 || 0);
        context.res = {
            status: 200,
            headers: { "Content-Type": "application/json" },
            body: { Sum: n1 + n2 }
        };
    } catch (e) {
        context.res = { status: 400, body: { error: e.message } };
    }
};

/* {
  "num1": 15,
  "num2": 25
}*/