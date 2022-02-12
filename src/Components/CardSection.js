import React, {useEffect, useState} from 'react';
import {CardBody, CardGroup, CardTitle, Card,CardImg} from 'reactstrap';
import '../App.css';
const CardSection = (props) => {

    const [arrayPokemones, setArrayPokemons] = useState([]);
    const [loadMoreurl, setLoadMore] = useState(null);
    let array1 = [];
        let array2 = [];
    const getPokemon = async () =>{
    
    
        let url = "https://pokeapi.co/api/v2/pokemon?limit=60&offset=0"
    
        const Res = await fetch(url)
        const Data = await Res.json()
        setLoadMore(Data.next);

        function getPokemonData (result){

            result.forEach( async (pokemon) => {

                const res = await fetch(pokemon.url)
                const data = await res.json()
                // console.log(data);
                  let PokemonInd = {
                      nombre: data.name,
                      urlImagen: data.sprites.front_default,
                      tipos: data.types.map(tipos => tipos.type.name)
                  }
                
                  setArrayPokemons(currentList => [...currentList, PokemonInd]);
            })
        } 
                setArrayPokemons(array2);
                getPokemonData (Data.results);
                console.log(arrayPokemones);
    }
    

    export const LoadMorePokemons = () => {
        
    }
    useEffect(() => {
        getPokemon();
    }, [])

    
    return (

           <CardGroup
           className='GroupCard'
           >
               {
                   arrayPokemones.map((pokemon,index)=>
                    <Card
                    className='AnchoCard'
                    key={index}>
                        <CardImg
                          alt="Card image cap"
                          src={pokemon.urlImagen}

                        />
                         <CardBody>
                             <CardTitle>
                                 {pokemon.nombre}
                             </CardTitle>
                         </CardBody>
                    </Card>
                   )
               }
            </CardGroup> 


    )
}

export default CardSection
