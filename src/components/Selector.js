import React from "react";
import styled from "styled-components";

export default function Selector({ changeCity, city, fetchData, error }) {


    return (
        <Container>
            <Form onSubmit={fetchData}>
                <SearchBar placeholder="city name" type="text" value={city} onChange={changeCity} />
                <SearchButton type="submit">Search</SearchButton>
            </Form>
            <ErrorMsg>{error}</ErrorMsg>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const SearchBar = styled.input`
    border: 0;
    color: white;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: solid 1px white;
    /* border-right: solid 1px white; */
    padding:1rem;
    font-size:1.4rem;
    transition: all 0.2s ease-in-out;
    outline: none;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition: all 0.2s ease-in-out;
    }
`
const SearchButton = styled.button`
    font-size:1.4rem;
    border-radius: 5px;
    color: white;
    padding:1rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-bottom: solid 1px white;
    background-color: rgba(255, 255, 255, 0);
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition: all 0.2s ease-in-out;
    }
    &:active {
        background-color: rgba(255, 255, 255, 0.5);
        transition: all 0.1s ease-in-out;
    }
`
const ErrorMsg = styled.p`
    color: red;
    font-size: 1.4rem;
`
