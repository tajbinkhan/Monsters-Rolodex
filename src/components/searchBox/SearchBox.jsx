import "./searchBox.css";

const SearchBox = (props) => {
	const { onChangeHandler, placeholder, className } = props;
	return (
		<div>
			<input
				type='search'
				className={`search-box ${className}`}
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

// class SearchBox extends Component {
// 	render() {
// 		const { onChangeHandler, placeholder, className } = this.props;
// 		return (
// 			<div>
// 				<input
// 					type='search'
// 					className={`search-box ${className}`}
// 					placeholder={placeholder}
// 					onChange={onChangeHandler}
// 				/>
// 			</div>
// 		);
// 	}
// }

export default SearchBox;
