import React, {useEffect, useState} from 'react';
import {CardBody, CardGroup, CardTitle, Card,CardImg, CardSubtitle} from 'reactstrap';
import '../App.css';
import { prefix, CapitalizeName} from '../Functions/Functions';
import styles from '../Styles/Styles.module.css';
const CardSection = (props) => {
    const [arrayPokemones, setArrayPokemons] = useState([]);
    const [loadMoreurl, setLoadMore] = useState(null);
    let array1 = [];
        let array2 = [];
        let id = '';
// const classes = `AnchoType ${error}`


    const getPokemon = async () =>{
    
        let url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
    
        const Res = await fetch(url)
        const Data = await Res.json()
        setLoadMore(Data.next);

        function getPokemonData (result){

            result.forEach( async (pokemon) => {

                const res = await fetch(pokemon.url)
                const data = await res.json()
                console.log(data);
                  let PokemonInd = {
                      num: data.id,
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
    

    useEffect(() => {
        getPokemon();
    }, [])

//  console.log(arrayPokemones);
    return (

           <CardGroup
           className='GroupCard'
           >
               {
                   arrayPokemones.map((pokemon,index)=>
                    <Card
                    className='AnchoCard'
                    key={index}>
                        <div className='imgCard'>
                        <CardImg
                          alt="Card image cap"
                          src={pokemon.urlImagen}

                        />
                        </div>
                        <CardSubtitle className='prefixNum'>
                            {`N.° ${prefix(pokemon.num,id)}`}
                        </CardSubtitle>
                         <CardBody>
                             <CardTitle>
                                 {CapitalizeName(pokemon.nombre)}
                             </CardTitle> 
                         </CardBody>
                         <CardBody className='FlexTypesContainer'>
                             {
                                 pokemon.tipos.map((pokemon, index) =>
                                  <CardSubtitle key={index} className={`AnchoType ${styles[pokemon]}`}>
                                         {pokemon}                 
                                 </CardSubtitle>
                                 )
                             }
                             </CardBody>
                    </Card>
                   )
               }
            </CardGroup> 


    )
}

export default CardSection
