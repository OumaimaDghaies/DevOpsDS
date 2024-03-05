async function runTests() {

   
    let server = require("./index");

    describe("Tasks API", () => {


       describe("POST /api/tasks", () => {
            it("POST Task", (done) => {
                chai.request(server)
                    .post("/api/tasks")
                    .end((err, response) => {
                        response.should.have.status(201);
                        response.body.should.be.a('object');
                        response.body.should.have.property('id');
                        response.body.should.have.property('name').eq('Tunisie');
                        response.body.should.have.property('completed').eq(false);
                        done();
                    });
            });
        })
