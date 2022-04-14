import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { app } from '../api/app';

export default function Equipamento() {
    const { id } = useParams();
    const [equip, setEquip] = useState([]);
    useEffect(() => {
        app.get(`http://192.168.6.20:3000/equipamentos/${id}`).then(response => {
            console.log(response.data)
            setEquip(response.data['data'])
        })
        
    }, [])

  return (
    <>
        <div className="container">
            <div className="first-box">
                {
                    equip.map( equipamento => {
                        return (
                            <div>{equipamento.linha}</div>
                        )
                    })
                }
            </div>
            <div className="second-box">

            </div>
        </div>
    </>
  )
}
