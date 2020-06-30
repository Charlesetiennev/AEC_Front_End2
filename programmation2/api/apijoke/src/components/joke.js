import React from 'react';
import {Row,Button} from 'react-bootstrap';
import {Personnage} from './jokeCard';


export class Joke extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]};
        }

    async componentDidMount(){
        let temp = [];
        for(let count=1;count<=10;count++){
            try {
                //const temp = this.state.data;//Tu ne peux pas créer ta variable dans le for sinon elle s'efface.
                const response = await fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single');  //ICI tu dois obtenir 10 fois le fetch
                const json = await response.json();
                //ICI tu dois faire ton push
                // console.log(response)
                temp.push(json); 
                this.setState({ data: temp }); 
            if (!response.ok) { 
                throw Error(response.statusText); 
                } 
            } catch (error) {
            console.log(error); 
            }        
      
        }
    } 
        render() {
            return(        
                 <>
               <Row>   {this.state.data.map((key) => (
                   <Personnage
                   message={key.message}
                   joke={key.joke}
                   />
               ))}
               </Row>
              </>
            )
        }
    }