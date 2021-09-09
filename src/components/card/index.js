import {useState , useEffect} from 'react';
import useFetch from './useFetch';
import {Alert, Card , Pagination} from 'antd';
import CardLoading from './cardLoding';

import './style.less';

const { Meta } = Card;

export default function CardProduct() {
	const [params , setParams] = useState({});
	const [offset , setOffset] = useState(0); //helps to select elements render
	const [currentPageElements , setCurrentPageElements] = useState([]); // array is to store the elements to render for each page
	const [elementsPerPage , setElementsPerPage] = useState(12); //number of elements render on a single page
	const [pagesCount , setPagesCount] = useState(1); //sets the total number of pages to render
	const [totalElementsCount , setTotalElementsCount] = useState(0);
	const {productCards ,loading, error} = useFetch(params);

	 useEffect(()=> {
		  setPaginationStates()
	 });
	// useEffect(()=> {
	// 	(async ()=> {
	// 		const products = await productCards
	// 		setPaginationStates()
	// 	})()
	// }, []);

	const setPaginationStates = () => {
		 setTotalElementsCount(productCards.length);
		setPagesCount(Math.ceil(totalElementsCount / elementsPerPage));
		setElementsForCurrentPage();
		// console.log(totalElementsCount,'total')
	};

	const setElementsForCurrentPage = () => {
		const currentPageElements = productCards.slice(offset, offset + elementsPerPage);
		setCurrentPageElements(currentPageElements);
	};
	const handlePageClick = (pageNumber) => {
		const currentPage = pageNumber - 1;
		const offset = currentPage * elementsPerPage;
		setOffset(offset);
		setElementsForCurrentPage();
	};


	return (

		<>
			<div className='header-title'><span>Shop your style</span></div>
			<div className='sub-title'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing
					viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies.
					Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.
				</p>
			</div>
			<div className='cards-section'>
				{loading &&
				[...Array(10)].map((x, i) =>
					<CardLoading key={i} />
				)}
				{productCards && currentPageElements.map( (card) =>
					<Card
						hoverable
						cover={<img alt={card.title}  src={card.img} />}
					>
						<Meta title={card.title} description={card.price+'₦'}  />
					</Card>)
				}

				{error && <Alert
					message="Hmmm! An error has occurred "
					description="Please check Internet connection and Try Refreshing"
					type="error"
					// closable
					style={{width: 450, display:'block', textAlign:'center' , margin:'auto'  }}
				/> }
			</div>
			{
				pagesCount > 1 &&
				 <div className='pagination'>
					 <Pagination
					defaultCurrent={1}
					onChange={handlePageClick}
					size="small"
					total={totalElementsCount}
					pageSize={elementsPerPage}
					showSizeChanger={false}
				/>
			 </div>
			}
		</>
	);
}