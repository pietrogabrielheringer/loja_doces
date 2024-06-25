import docemodel from "../Models/Docesmodel.js";

class DocesController {
    constructor() {
    }

    create(req, res) {
        const nome = req.body.nome;
        DocesModel.create(nome).then(
            resposta => {
                console.debug("inserindo um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: inserindo um doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    read(req, res) {
        Docesmodel.read().then(
            resposta => {
                console.debug("Mostrando Doces");
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug("ERRO ao mostrar doces");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_doces = req.params.id_doces;
        const nome = req.body.nome;

        DocesModel.update(id_doces, nome).then(
            resposta => {
                console.debug("Atualizando doces")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO ao atualizar doces");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req, res) {
        const id_doces = req.params.id_doces;
        const nome = req.body.nome;

        DocesModel.delete(id_doces, nome).then(
            resposta => {
                console.debug("Deletando doces")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO ao atualizar doces");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

}
export default new DocesController();