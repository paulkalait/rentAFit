import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { BiUpload } from "react-icons/bi";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ADD_PHOTO, ADD_PRODUCT } from "../../utils/mutations";

const AddPost = (props) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [fileName, setFileName] = useState("");

  const [addPhoto, { data, error }] = useMutation(ADD_PHOTO, {});
  console.log(data);

  const hadleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFileName(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const photo = reader.result;

      console.log("long string", photo);
      setImage(photo);
      addPhoto({
        variables: { photo: photo },
      });
    };
  };

  const [addProduct, { data: productData, error: productError }] = useMutation(
    ADD_PRODUCT,
    {}
  );

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      await addProduct({
        variables: {
          description: description,
          price: parseInt(price),
          name: name,
          image: image,
          // * TODO: add a category
        },
      });
      window.location.assign("/");
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    console.log("this is the usetstate variable", image);
    //this wont run until productData exists
    if (productData) {
      //reroutes to the home page
      props.history.push("/dashboard");
    }
  }, [data, productData]);

  return (
    <div className="post_container">
      <div className="form-container-parent">
        <form onSubmit={handleFormSubmit} className="form-container">
          <span className="add-post-title">
            <h1>Post a Product</h1>
          </span>

          <h3>Title</h3>
          <div className="price-input-container">
            <textarea
              id="title-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            ></textarea>

            <input
              id="price-input"
              value={price}
              className="form-input "
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              min="1"
              max="1000"
            ></input>
            <p className="per-day"> /day</p>
          </div>

          <label id="add-photo">
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => hadleFileInputChange(e)}
              style={{ display: "none" }}
            />
            <h4>
              {" "}
              <BiUpload /> Add Photo{" "}
            </h4>
          </label>

          {/* image comes from the usestate variable image, setImage*/}
          {image && (
            <div className="img-output-container">
              {image && <img alt="output" src={image} />}
            </div>
          )}

          <h3>Description</h3>
          <textarea
            id="description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-input"
          ></textarea>

          <button
            type="submit"
            className="add-post-btn"
            onSubmit={handleFormSubmit}
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
