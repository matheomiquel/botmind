import {
    app
} from "./app.js"
import assert from "assert";
import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from "fs";
import path from "path";
const first = "pour les images j'ai fait en sorte que cela prennent tout les fichier j'espère que cela vous convient.";
const second = "merci pour cette chance, j'aimerais beaucoup travailler dans l'IA";
const last = "Je ne sais plus quoi écire pour les test, si vous voyez des amélioration à me proposer pour les exercices je serai ravie que vous me les donniez.";
chai.use(chaiHttp);
chai.should();


it("premier cas", (done) => {
    chai.request(app)
        .post('/message')
        .send({
            message: "Comment vas-tu"
        })
        .end((err, res) => {
            res.should.have.status(200);
            assert.strictEqual(res.body.response, "Très bien et vous ?")
            done();
        });
});

it("test fichier", (done) => {
    chai.request(app)
        .post('/message')
        .attach('avatar',
            fs.readFileSync(`${path.resolve()}/black.jpg`),
            'preview.png')
        .end((err, res) => {
            res.should.have.status(200);
            assert.strictEqual(res.body, "Je ne sais pas traiter ce type de demande")
            done();
        });
});

it("dernier cas", (done) => {
    chai.request(app)
        .post('/message')
        .send({
            message: first
        })
        .end((err, res) => {
            res.should.have.status(200);
            assert.strictEqual(res.body, first)
            done();
        });
});

it("dernier cas", (done) => {
    chai.request(app)
        .post('/message')
        .send({
            message: second
        })
        .end((err, res) => {
            res.should.have.status(200);
            assert.strictEqual(res.body, second)
            done();
        });
});


it("dernier cas", (done) => {
    chai.request(app)
        .post('/message')
        .send({
            message: last
        })
        .end((err, res) => {
            res.should.have.status(200);
            assert.strictEqual(res.body, last)
            done();
        });
});
