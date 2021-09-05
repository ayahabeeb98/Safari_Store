import {useState} from 'react';
import useFetch from './useFetch';
import {Alert, Card} from 'antd';
import CardLoading from './cardLoding';

import './style.less';

const { Meta } = Card;

const onClose = (e) => {
	console.log(e, 'I was closed.');
};

export default function CardProduct() {
	const [params , setParams] = useState({});
	const {productCards ,loading, error} = useFetch(params);

	return (

		<>
			<div className='header-title'><span>Shop your style</span></div>
			<p className='sub-title'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing
				viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies.
				Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.
			</p>
			<div className='cards-section'>
				{loading &&
				[...Array(10)].map((x, i) =>
					<CardLoading key={i} />
				)}
				{productCards && productCards.map( (card) =>
					<Card
						hoverable
						style={{ width: 300 }}
						cover={<img alt="example" src={card.img} />}
					>
						<Meta title={card.title} description={card.price+'₦'}  />
					</Card>)
				}

				{error && <Alert
					message="Hmmmm! An error has occurred "
					description="Please Try Refreshing"
					type="error"
					closable
					onClose={onClose}
					style={{width: 450, textAlign:'center' , margin:'auto' ,position: "absolute" }}
				/> }
			</div>
		</>
	);
}