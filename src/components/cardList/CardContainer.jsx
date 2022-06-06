import "./cardContainer.css";

const CardContainer = (props) => {
	const { name, email, id } = props.monster;
	return (
		<div className='card-container'>
			<img
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
				alt={`monster ${name}`}
			/>
			<h2 className='monster'>{name}</h2>
			<p className='monster'>{email}</p>
		</div>
	);
};

// class CardContainer extends Component {
// 	render() {
// 		const { name, email, id } = this.props.monster;
// 		return (
// 			<div className='card-container'>
// 				<img
// 					src={`https://robohash.org/${id}?set=set2&size=180x180`}
// 					alt={`monster ${name}`}
// 				/>
// 				<h2 className='monster'>{name}</h2>
// 				<p className='monster'>{email}</p>
// 			</div>
// 		);
// 	}
// }

export default CardContainer;
