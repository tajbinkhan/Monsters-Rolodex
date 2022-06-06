import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [filteredMonster, setFilteredMonster] = useState(monsters);
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonster = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonster(newFilteredMonster);
	}, [monsters, searchField]);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				className={"monsters-search-box"}
				onChangeHandler={onSearchChange}
				placeholder={"Search Monsters"}
			/>
			<CardList monsters={filteredMonster} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange = (e) => {
// 		const searchField = e.target.value.toLocaleLowerCase();
// 		console.log(searchField);
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredMonster = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});
// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monsters Rolodex</h1>
// 				<SearchBox
// 					className={"monsters-search-box"}
// 					onChangeHandler={onSearchChange}
// 					placeholder={"Search Monsters"}
// 				/>
// 				<CardList monsters={filteredMonster} />
// 			</div>
// 		);
// 	}
// }

export default App;
