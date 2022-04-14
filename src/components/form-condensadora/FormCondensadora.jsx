import { useState } from 'react';
import { app } from '../../api/app';

export default function FormCondensadora() {
    const [selectValue, setSelectValue] = useState(1);
    const [codigo, setCodigo] = useState('');
    const [modelo, setModelo] = useState('');
    const [local_instalacao, setLocal_instalacao] = useState('');
    const [quadro, setQuadro] = useState('');
    const [file, setFile] = useState();

    const optionStatus = [
        { id: 1, nome: 'normal' },
        { id: 2, nome: 'defeito' }
    ];

    function handleAdd() {
        app.post('/manutencao', {            
            "tipo": codigo,
            "local_instalacao": local_instalacao,
            "modelo": modelo,
            "status": selectValue,
            "quadro": quadro,
          }).then((response) => {
              console.log(response.data)
            
          });
      }
    return (
        <>
            <div className="container">
                <h2>Cadastrar Condesadora</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="codigo">Código</label>
                        <input type="text" placeholder="CON001" required onChange={e => setCodigo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="local">Local da Instalação</label>
                        <input type="text" placeholder="local" required onChange={e => setLocal_instalacao(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="modelo">Modelo</label>
                        <input type="text" placeholder="Modelo" requiredonChange={e => setModelo(e.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label id="status">Status</label>
                        <select id="choose" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                            {
                                optionStatus.map((item) => (
                                    <option key={item.id} value={item.nome}> {item.nome} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quadro">Quadro</label>
                        <input type="text" placeholder="Quadro" required onChange={e => setQuadro(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="arquivo" id="file">Nota fiscal</label>
                        <input type="file" name="arquivo" id="arquivo" onChange={e => setFile(e.target.value)} />
                    </div>
                    <input type="submit" value="Registrar" onClick={handleAdd}/>
                </form>
            </div>
        </>
    )
}
