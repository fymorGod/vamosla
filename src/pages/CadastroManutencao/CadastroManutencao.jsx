import { useState, useEffect } from 'react';
import { app } from '../../api/app';
import "./cadastroManutencao.css";

export default function CadastroManutencao() {
    const [ descricao, setDescricao ] = useState('');
    const [ data, setData ] = useState('');
    const [ tecnico, setTecnico ] = useState('');
    const [ custo, setCusto ] = useState('');

    const [ selectValue, setSelectValue ] = useState(1); // preventiva
    const [ selectValueFrequencia, setSelectValueFrequencia ] = useState(1); // frequencia
    
    const [ condensadora, setCondensadora ] = useState([]);
    const [ condensadoraId, setCondensadoraId ] = useState('')

    const [ evaporadora, setEvaporadora ] = useState([]);
    const [ evaporadoraId, setEvaporadoraId ] = useState('')


    const optionFrequencia = [
        { id: 1, nome: 'mensal' },
        { id: 2, nome: 'trimestral' },
        { id: 3, nome: 'semestral' }
    ];
    const optionTipo = [
        { id: 1, nome: 'preventivo' },
        { id: 2, nome: 'corretiva' }
    ];

    function handleAdd() {
        app.post('/manutencoes', { 
            "tipo": selectValue,           
            "descricao": descricao,
            "frequencia": selectValueFrequencia,
            "status": "a executar",
            "tec_responsavel": tecnico,
            "custo": custo,
            "id_condensadora" : condensadoraId,
            "id_evaporadora": evaporadoraId,
            "previsao_termino": data,

          }).then((response) => {
              console.log(response.data)
            
          }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });;
      }

      useEffect(() => {
        app
            .get("/condensadoras")//rota de salas
            .then((response) => setCondensadora(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    useEffect(() => {
        app
            .get("/evaporadoras")//rota de salas
            .then((response) => setEvaporadora(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    const handleCondensadora = (event) => {
        const getCondensaId = event.target.value;
        console.log(getCondensaId)
        setCondensadoraId(getCondensaId);
    }

    const handleEvaporadora = (event) => {
        const getEvapoId = event.target.value;
        console.log(getEvapoId)
        setEvaporadoraId(getEvapoId);
    }
    
    return (
        <>
            <div className="container">
                <h2>Cadastrar Manuten????o</h2>
                <form>
                    <div className="form-group">
                        <label id="tipo">Tipo</label>
                        <select id="choose" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                        <option>--Select Tipo--</option>
                           
                            {
                                optionTipo.map((item) => (
                                    <option key={item.id} value={item.nome}> {item.nome} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descri????o</label>
                        <input type="text" placeholder="descri????o" required onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tecnico">T??cnico</label>
                        <input type="text" placeholder="t??cnico" required onChange={e => setTecnico(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="custo">Custo</label>
                        <input type="text" placeholder="custo" onChange={e => setCusto(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="data">Previs??o de Entrega</label>
                        <input type="date" onChange={e => setData(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="frequencia">Frequ??ncia</label>
                        <select id="choose" value={selectValueFrequencia} onChange={e => setSelectValueFrequencia(e.target.value)}>
                        <option>--Select Frequ??ncia--</option>
                            
                            {
                                optionFrequencia.map((item) => (
                                    <option key={item.id} value={item.nome}> {item.nome} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label id="condensadora">Condensadora</label>
                        <select id="choose"  onChange={(e) => handleCondensadora(e)}>
                            <option>--Select Condensadora--</option>
                            {
                                condensadora.map((item) => ( <option key={item.id} value={item.id}> {item.codigo} </option>)   
                                )
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label id="evaporadora">Evaporadora</label>
                        <select id="choose" onChange={(e) => handleEvaporadora(e)}>
                        <option>--Select Evaporadora--</option>

                            {
                                evaporadora.map((item) => (
                                    <option key={item.id} value={item.id}> {item.codigo} </option>
                                ))
                            }
                        </select>
                    </div>

                    <input type="submit" value="Registrar" onClick={handleAdd}/>
                </form>
            </div>
        </>
    )
}
