import { Card, Avatar} from "antd";
import {useState} from "react";
const { Meta } = Card;

export default function CardLoading(){
	const [loading , setLoading] = useState(true);

	return(
		<Card style={{ width: 300, marginTop: 16 }} loading={loading}>
			<Meta
				avatar={
					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				}
				title="Card title"
			/>
		</Card>

	)
}