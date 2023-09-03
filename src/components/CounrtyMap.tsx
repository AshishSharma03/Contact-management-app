import React from 'react';
import { useQuery } from 'react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { fetchAllCovidData } from './NetworkModel/WorldCovidData';

interface CountryData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

const CountryMap: React.FC = () => {
  const { data: countryData, error, isLoading } = useQuery<CountryData[]>(
    'covidData',
    fetchAllCovidData
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !countryData) {
    return <p>Error fetching data</p>;
  }

  if (!Array.isArray(countryData)) {
    return <p>Data is not an array</p>;
  }

  return (
    <MapContainer
      style={{ height: '400px', width: '100%' }}
    >
      {countryData.map((country, index) => (
        <Marker
          key={index}
          position={[country.countryInfo.lat, country.countryInfo.long] as [number, number]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Total Cases: {country.cases}</p>
              <p>Total Deaths: {country.deaths}</p>
              <p>Total Recovered: {country.recovered}</p>
              <p>Total Active: {country.active}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CountryMap;
