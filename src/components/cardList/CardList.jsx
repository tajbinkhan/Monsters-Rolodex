import CardContainer from "./CardContainer";
import "./cardList.css";

const CardList = (props) => {
	const { monsters } = props;
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				return <CardContainer monster={monster} key={monster.id} />;
			})}
		</div>
	);
};

// class CardList extends Component {
// 	render() {
// 		const { monsters } = this.props;
// 		return (
// 			<div className='card-list'>
// 				{monsters.map((monster) => {
// 					return <CardContainer monster={monster} key={monster.id} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;
