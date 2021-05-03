import React, {Component} from "react";
import Contact from './Contact';

class Contacts extends Component {
    state = {
        search: '',
        contacts: [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }]
    }

    handleSearchChange = e => {
        this.setState({search: e.target.value})
    }


    filterPhone = (value) => {
       if (this.state.search === '') {
           return value;
       }
       else if(value.firstName.toLowerCase().includes(this.state.search.toLowerCase())
       || value.lastName.toLowerCase().includes(this.state.search.toLowerCase())
       || value.phone.toLowerCase().includes(this.state.search.toLowerCase())
       || value.gender.toLowerCase().includes(this.state.search.toLowerCase())){
           return value;
       }
    }

    render() {
        return (
            <div>
                <nav>
                    <input type='text' placeholder='&#128270; Search contact' onChange={this.handleSearchChange}/>
                </nav>
                <main>
                    {this.state.contacts.filter(this.filterPhone).map((value, i) => <Contact contact={value} key={i}/>)}
                </main>
            </div>
        )
    }
}

export default Contacts;