const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir leitura de JSON em req.body
app.use(express.json());

//Banco de Dados em Memória
let voos = [
    {
        id: 1,
        origem: "GRU-Aeroporto de Guarulhos",
        destino: "REC-Aeroporto de Recife",
        horárioPartida: "09:45",
        preço: 649.00
    },

    {
        id: 2,  
        origem: "GRU-Aeroporto de Guarulhos",
        destino: "GIG-Aeroporto do Rio de Janeiro",
        horárioPartida: "10:30",
        preço: 499.00
    },

    {
        id: 3,
        origem: "VCP-Aeroporto de Viracopos",
        destino: "MVD-Aeroporto de Montevideu",
        horárioPartida: "12:20",
        preço: 756.00
    }
];

// Rota 1: GET /voos(listar todos os voos) status 200 ok
app.get('/voos', (req, res) => {
    return res.status(200).json(voos);
});

app.get('/voos/:id', (req, res) => {
    const { id } = req.params;
    const vooEncontrado = voos.find(voo => voo.id === parseInt(id));

        if (!vooEncontrado) {
        return res.status(404).json({ message: "Voo não encontrado" });
    }

    return res.status(200).json(vooEncontrado);
});

app.post('/voos', (req, res) => {
    const { origem, destino, horárioPartida, preço } = req.body;

    if (!origem || !destino || !horárioPartida || !preço) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const novoVoo = { id: voos.length > 0 ? voos[voos.length - 1].id + 1 : 1, origem, destino, horárioPartida, preço: Number(preço) };
    voos.push(novoVoo);
    return res.status(201).json({ mensagem: "Voo adicionado com sucesso", voo: novoVoo });
});

app.put('/voos/:id', (req, res) => {
    const { id } = req.params;
    const { destino, horárioPartida, preço } = req.body;
    const index = voos.findIndex(voo => voo.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Voo não encontrado" });
    }

    voos[index] = { 
        ...voos[index],
        destino: destino || voos[index].destino,
        horárioPartida: horárioPartida || voos[index].horárioPartida,
        preço: preço || voos[index].preço
    };
    return res.status(200).json({ message: "Voo atualizado com sucesso", voo: voos[index] });

});

app.delete('/voos/:id', (req, res) => {
    const { id } = req.params;

    const index = voos.findIndex(voo => voo.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Voo não encontrado para exclusão" });
    }

    voos.splice(index, 1);

    return res.status(200).json({ mensagem: "Voo excluído com sucesso" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});