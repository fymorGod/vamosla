import {useEffect, useState} from 'react'
import { app } from '../../api/app';
import './formEvaporadora.css';

export default function FormEvaporadora() {
    const [salas, setSalas] = useState([]);
    const [ salasId, setSalasId] = useState('')
    
    const [codigo, setCodigo] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [potencia, setPotencia] = useState('');
    const [quadro, setQuadro] = useState('');
    const [file, setFile] = useState();


    const [selectValue, setSelectValue] = useState(1);

    const optionStatus = [
        {id: 1, nome: 'normal'}, 
        {id: 2, nome: 'defeito'}
    ];
    

    useEffect(() => {
        app
          .get("/salas")//rota de salas
          .then((response) => setSalas(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

      function handleAdd() {
        app.post('/evaporadoras', {            
            "codigo": codigo,
            "modelo":modelo,
            "marca":marca,
            "id_sala":salasId,
            "potencia": potencia,
            "quadro": quadro,
            "status": selectValue,
            "id_doc": file
          }).then((response) => {
              console.log(response.data)
            
          });
      }

      const handleSala = (event) => {
        const getCondensaId = event.target.value;
        console.log(getCondensaId)
        setSalasId(getCondensaId);
    }

    return (
        <>
            <div className="container">
                <h2>Cadastrar Evaporadora</h2>
                <form>
                    <div className="form-group">
                        <label id="codigo">Código</label>
                        <input type="text" placeholder="ARC001" onChange={e => setCodigo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="sala">Sala</label>
                        <select id="choose" onChange={e => handleSala(e)}>
                        <option>--Select Sala--</option>

                            {
                                salas.map((item)=> (
                                    <option key={item.id} value={item.id}> {item.nome} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label id="modelo">Modelo</label>
                        <input type="text" placeholder='Modelo' required onChange={e => setModelo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="marca">Marca</label>
                        <input type="text" placeholder="Marca" required onChange={e => setMarca(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="potencia">Potência (BTU)</label>
                        <input type="text" placeholder="Potência " required onChange={e => setPotencia(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label id="quadro">Quadro</label>
                        <input type="text" placeholder="Quadro"  onChange={e => setQuadro(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="status">Status</label>
                        <select id="choose" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                            {
                                optionStatus.map((item)=> (
                                    <option key={item.id} value={item.nome}> {item.nome} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label id="file" htmlFor='arquivo'>Nota fiscal</label>
                        <input type="file" name="arquivo" id="arquivo" onChange={e => setFile(e.target.files[0])} />
                    </div>
                    <input type="submit" id='registrar' value="Registrar" onClick={handleAdd}/>

                </form>
            </div>
        </>
    )
}
