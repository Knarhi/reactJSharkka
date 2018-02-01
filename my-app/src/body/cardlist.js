// Component produces list of cards. It gives a single card data as props (as JSON object)

// renderiin looppi joka iteroi listan läpi. 

import React, {Component} from 'react';
import {Card} from './card';
import '../../node_modules/whatwg-fetch/';

export class CardList extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {cards: null}
        
        this.getCards = this.getCards.bind(this)
        
        
    }
    
    componentDidMount(){
        this.getCards();
    }
    
    
    getCards(){
        // Funkkari joka hakee kortit 
        const url = "https://reactjsharkka-qizma.c9users.io/joblist.php";
        fetch(url).then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {

            this.setState({cards: jsonResponse});
            
        });
    }
    
    getFilter() {
        return this.props.returnFilters;
    }
    


    
    render(){
        
        // TÄMÄ PITÄÄ OLLA ENSIN, JOTTA MIKÄÄN TOIMII. 
        if(!this.state.cards){
            return <div>Tietoja ladataan</div>;
        }
        
        let cards = this.state.cards;
        //console.log("Cards", cards);
        //console.log("Filters: ", this.props.filters);
        
        let pakka = [];
        
        for (let i = 0; i< cards.length; i++) {
            let jtype = cards[i].jobtype;
            
            if (this.props.filters[2] && jtype === "1") {
                (pakka.push(cards[i]));
                
            } 
            if (this.props.filters[3] && jtype === "2") {
                (pakka.push(cards[i]));
                
            }
            if (this.props.filters[0] && jtype === "3") {
                (pakka.push(cards[i]));
                
            } 
            if (this.props.filters[1] && jtype === "4") {
                (pakka.push(cards[i]));
                
            } 
            
            if (this.props.filters[1] && jtype === "5") {
                (pakka.push(cards[i]));
                
            }
             if (this.props.filters[1] && jtype === "6") {
                (pakka.push(cards[i]));
                
            }
             if (this.props.filters[4] && jtype === "7") {
                (pakka.push(cards[i]));
                
            } 
            
        }
        if(pakka){
            pakka = pakka.filter(card => card.jobdesc.indexOf(this.props.filters[5]) !== -1);
            pakka.sort(function(a,b){
                return new Date(a.applydate) - new Date(b.applydate);
            });
            
            
        }
        
        
        
        
        // Silmukka joka käy objektit läpi ja kutsuu <Card info={info}/> // Eli info = JSON-objekti.
        let tuloste = pakka.map((card, index) => <Card key={index} info={card} />);
        // pakka = [];
    
        //console.log("Renderöidään");
        return <div>
            {tuloste}
            
        </div>
            
    
    
    }
    
}

