import React from 'react';
import './newProduct.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { productInputs } from '../../formData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const NewProduct = () => {

    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const [cat, setCat] = useState([]);
    const [color, setColor] = useState([]);

    const navigate = useNavigate();


    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleOptions = (e) => {
        setCat(e.target.value.split(" "));
    };

    const handleColor = (e) => {
        setColor(e.target.value.split(","));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/tunjooadmin/image/upload",
                data
            );
            const { url } = uploadRes.data;

            const newproduct = {
                ...info,
                // categories: cat,
                color: color,
                size: cat,
                img: url,
            };

            await axios.post("products", newproduct);
            // history.pushState("")
            navigate("/products");
        } catch (err) {
            console.log(err)
        }

    };
    console.log(info, cat, color);



    return (
        <div className='newProduct'>

            <Sidebar />

            <div className="newProductContainer">
                <Navbar />

                <div className="top">
                    <h2 className="title">Add New Product</h2>
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
                                    multiple
                                    onChange={(e) => setFile(e.target.files[0])}
                                />

                            </div>

                            {productInputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        id={input.id}
                                        onChange={handleChange}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            ))}

                            {/* <div className="formInput">
                                <label>Categories</label>
                                <input type="text" name="cat" placeholder="Jeans, Skirts" onChange={handleOptions} />
                            </div> */}

                            <div className="formInput">
                                <label>Sizes</label>
                                <input type="text" name="size" placeholder="XS, S, M" onChange={handleOptions} />
                            </div>

                            <div className="formInput">
                                <label>Colors</label>
                                <input type="text" name="color" placeholder="Yellow, Blue" onChange={handleColor} />
                            </div>

                            <button id="btn_submit" type="submit" onClick={handleClick}>Send</button>

                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewProduct