import React from 'react';
import { BatmanHistorial, BatmanVillains, SupportComics } from './batman-page';
import "./App.css";

function App() {
  return (
  <div>

    <div className='body'>
    <BatmanHistorial></BatmanHistorial> 
    <h3 className='h3'>Gotham Public Enemies</h3>
    <BatmanVillains alias="Alias: Joker" symbol="Symbol: Joker Card" name="Name: Unknown" job="Occupation: Criminal Mastermind"></BatmanVillains>
    <BatmanVillains alias='Alias: Penguin' symbol='Symbol: Umbrella' name='Name: Oswald Cobblepot' job="Occupation: Mobster"></BatmanVillains>
    <BatmanVillains alias="Alias: Ra's al Ghul" symbol="Symbol: Sword" name="Name: Uknown" job="Occupation: Assassin"></BatmanVillains>
    <BatmanVillains alias='Alias: Deathstroke' symbol='Symbol: Katana' name='Name: Slade Wilson' job="Occupation: Mercenary"></BatmanVillains>
    <h4>Support Local Marketplaces </h4>
    <SupportComics name='Metro Comics' city='Los Angeles' onlineStore='Yes'></SupportComics>
    <SupportComics name= "Angel City Comics" city="Hollywood" onlineStore='No'></SupportComics>
    <SupportComics name="Little Tokyo Anime" city='Downtown L.A.' onlineStore='No'></SupportComics>
    </div>
  </div>
  );
}

export default App;
