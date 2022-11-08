import React from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
// import axios from 'axios';
import { axiosInstance } from '../../config';




const NewUser = ({ inputs, title }) => {

    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadRes = await axiosInstance.post(
                "https://api.cloudinary.com/v1_1/tunjooadmin/image/upload",
                data
            );

            const { url } = uploadRes.data;

            const newUser = {
                ...info,
                img: url,
            };

            await axiosInstance.post("/auth/register", newUser);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(info);


    return (
        <div className='new'>

            <Sidebar />

            <div className="newContainer">
                <Navbar />

                <div className="top">
                    <h2 className="title">{title}</h2>
                </div>

                <div className="bottom">

                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                            }
                            alt=""
                        />

                    </div>

                    <div className="right">

                        <form>
                            <div className="imgInput">

                                <label htmlFor="file">
                                    Upload Image: <DriveFolderUploadIcon className='icon' />
                                </label>

                                <input
                                    type="file" id="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />

                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        id={input.id}
                                        placeholder={input.placeholder}
                                        onChange={handleChange}
                                    />
                                </div>

                            ))}


                            <button onClick={handleClick}>Send</button>


                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewUser