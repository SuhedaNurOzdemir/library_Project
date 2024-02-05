import React, { useState } from "react";
import { Container, HomeContainer, HomeImage } from "./Home.style";
import homeImg from "../../assets/books.jpg";
import Header from "../../components/header/Header";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);
  const APP_KEY = process.env.REACT_APP_apiKey;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setMyData(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContainer>
      <Header
        setQuery={setQuery}
        setSelectType={setSelectType}
        getData={getData}
      />

      {!myData.length ? (
        <HomeImage>
          <img src={homeImg} alt="home" />
        </HomeImage>
      ) : (
        <Container wrap="wrap">
          {myData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
      )}
    </HomeContainer>
  );
};

export default Home;
