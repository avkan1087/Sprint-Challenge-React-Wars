
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction:column;
width: 33%;
border : 4px solid black;
border-radius: 50px;
margin: 20px auto;

`


const CharacterCard = (props) => {
  return (
    <CardContainer>

    <h1>{props.data.name}</h1>
    <p><b>DOB:</b> {props.data.birth_year}</p>
    <p><b>Height:</b> {props.data.height}</p>
    <p><b>Gender:</b> {props.data.gender}</p>
    <p><b>Hair Color:</b> {props.data.hair_color}</p>
    <p><b>Skin Color:</b> {props.data.skin_color}</p>
    <p><b>Eye Color:</b> {props.data.eye_color}</p>

    </CardContainer>
  );
};

export default CharacterCard;
