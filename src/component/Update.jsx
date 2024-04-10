import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseurl } from '../utilis/server';

const Update = ({flag}) => {
    // console.log(flag,'inside')
    const [data, setData] = useState([]);
    const [count,setCount] = useState({})
    const [loading,setLoading] = useState(false)
    const [editedData, setEditedData] = useState({ id: '', content: '' });
const countupdate=()=>{
    axios.get(`${baseurl}/user/count`)
    .then((res) => {
    
        setCount(res.data);
    }).catch((error) => {
        console.log(error);
    });
}
    useEffect(() => {
        axios.get(`${baseurl}/user/all`)
            .then((res) => {
          
                setData(res.data.data);
            }).catch((error) => {
                console.log(error);
            });

            countupdate()
            
    }, [flag]);
   console.log(count,'count')
    const handleEdit = (id, content) => {
        setEditedData({ id, content });
    };

    const handleSave = async () => {
        try {
            setLoading(true)
            await axios.put(`${baseurl}/user/update/${editedData.id}`, { content: editedData.content });
            
            axios.get(`${baseurl}/user/all`)
                .then((res) => {
                    setLoading(false)
                    setData(res.data.data);
                    setEditedData({ id: '', content: '' }); // Reset editedData state
                }).catch((error) => 
                {
                    console.log(error);
                    setLoading(false)
                });
                countupdate()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div  style={{marginBottom:"10px",display:'flex',gap:"10px",marginLeft:"10px"}}>
                <text>{`Add:${data.length ? data.length : 0}`}</text>
                <text>{`Update:${count.update ? count.update : 0}`}</text>
            </div>
            {  data && data.length>0 ? (
                 data && data.map((item) => (
                    <div key={item._id} style={{ display: "flex", width: "300px", gap: "10px", marginLeft: "50px", marginBottom: "10px", alignItems: 'center', justifyContent: 'space-between' }}>
                        {editedData.id === item._id ? (
                            <input
                                type="text"
                                value={editedData.content}
                                onChange={(e) => setEditedData({ ...editedData, content: e.target.value })}
                            />
                        ) : (
                            <span style={{ fontSize: "16px" }}>{item.content}</span>
                        )}
                        {editedData.id === item._id ? (
                            <button onClick={handleSave}>Save</button>
                        ) : (
                            <button onClick={() => handleEdit(item._id, item.content)}>Edit</button>
                        )}
                    </div>
                ))
            ):(
            <text>No Data</text>
            )
               
            }
        </div>
    );
};

export default Update;
